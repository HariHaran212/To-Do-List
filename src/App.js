import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import AddItem from "./AddItem"
import SearchItem from './SearchItem'

import {useEffect, useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap-icons/font/bootstrap-icons.css";

import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';

import './App.css'

import apiRequest from "./apiRequest"


function App() {
  
  const API_URL = "https://to-do-list-db-server.onrender.com/items"
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    const fetchItems = async () =>{
      try{
        const response = await fetch(API_URL)
        if(!response.ok) throw Error("Data Not Received");
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      }catch(err){
        setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    },2000)

  }, [])

  const handleCheck = async (id) =>{
      const listItems = items.map(item => 
          item.id===id ? {...item, checked : !item.checked} : item
      );
      setItems(listItems)

      const myItem = listItems.filter(item => item.id===id)

      const updateOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"checked": myItem[0].checked})
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl, updateOptions)
      if(result) setFetchError(result)
  }
  const handleDelete = async (id) =>{
      const listItems = items.filter(item => 
          item.id!==id
      );
      setItems(listItems)

      const deleteOptions = {
        method: 'DELETE'
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl, deleteOptions)
      if(result) setFetchError(result)
  }


  const addItem = async (item) => {
    const currId = (parseInt(items[items.length-1].id)+1).toString()
    console.log(currId)
    const id = items.length ?
                currId
                : "1"
    const addNewItem = {id, checked: false, item}
    let listItems = [...items, addNewItem]
    setItems(listItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URL, postOptions)
    if(result) setFetchError(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="Course List"/>
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
      <main className="h-100 d-flex justify-content-center">
        {(isLoading && <p>{`Loading...`}</p>) ||
        (fetchError && <p>{`Error: ${fetchError}`}</p>) ||
        <Content 
          items = {items.filter(item => 
            (item.item).toLowerCase().includes(search.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
          />}
      </main>
      
      <Footer 
        length = {items.length} 
        />
    </div>
  );
}

export default App;