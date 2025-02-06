import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import AddItem from "./AddItem"
import SearchItem from './SearchItem'
import {useEffect, useState} from 'react'
import ContentDuplicate from "./ContentDuplicate"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fontsource/poppins';  // Defaults to 400 weight (regular)
import '@fontsource/poppins/400.css'; // Import specific weight
import '@fontsource/poppins/600.css'; // Import bold weight
import './App.css'
import apiRequest from "./apiRequest"


function App() {
  
  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    // JSON.parse(localStorage.getItem('todo_list'))
    const fetchItems = async () =>{
      try{
        const response = await fetch(API_URL)
        if(!response.ok) throw Error("Data Not Received");
        // console.log(response)
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      }catch(err){
        // console.log(err.message)
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
//     [
//         {id: 1,
//         checked: false,
//         item: "Practice Coding"
//         },
//         {id: 2,
//         checked: false,
//         item: "Play Chess"
//         },
//         {id: 3,
//         checked: false,
//         item: "Do React Project"
//         },
//         {id: 4,
//         checked: true,
//         item: "Call Naveen"
//         }
//   ]);
  // const numbers = [-2, -1, 0, 1, 2]
  // const itemss = numbers.filter(n => n>=0).map(n => ({number:n}))
  // console.log(itemss)

  const handleCheck = async (id) =>{
      const listItems = items.map(item => 
          item.id===id ? {...item, checked : !item.checked} : item
      );
      setItems(listItems)
      // localStorage.setItem("todo_list", JSON.stringify(listItems))

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
      // console.log(listItems)
      // localStorage.setItem("todo_list", JSON.stringify(listItems))

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
    // localStorage.setItem("todo_list", JSON.stringify(listItems))

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
      {/* <ContentDuplicate /> */}
      <Footer 
        length = {items.length} 
        />
    </div>
  );
}

export default App;

// function greetRandom(){
//   const greetings = ["Hello", "Hai", "Hi", "Vanakkam", "Welcome"]
//   let rand = Math.floor(Math.random()*5)
//   return greetings[rand];
// }
// <div className="App">
//       <p>{greetRandom()} guys</p>
//     </div>




    // <main className="h-100 d-flex justify-content-center">
    //   {(isLoading && <p>{`Loading...`}</p>)}
    //   {(fetchError && <p>{`Error: ${fetchError}`}</p>)}
    //   {!isLoading && !fetchError && <Content 
    //     items = {items.filter(item => 
    //       (item.item).toLowerCase().includes(search.toLowerCase()))}
    //     handleCheck = {handleCheck}
    //     handleDelete = {handleDelete}
    //     />}
    // </main>

    // npx json-server -p3500 -w data/db.json
    // npx json-server --watch data/db.json --port 3500