import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import AddItem from "./AddItem"
import SearchItem from './SearchItem'
import {useState} from 'react'
import ContentDuplicate from "./ContentDuplicate"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fontsource/poppins';  // Defaults to 400 weight (regular)
import '@fontsource/poppins/400.css'; // Import specific weight
import '@fontsource/poppins/600.css'; // Import bold weight
import './App.css'


function App() {
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')))
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

  const handleCheck = (id) =>{
      const listItems = items.map(item => 
          item.id===id ? {...item, checked : !item.checked} : item
      );
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  const handleDelete = (id) =>{
      const listItems = items.filter(item => 
          item.id!==id
      );
      setItems(listItems)
      console.log(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const addItem = (item) => {
    const id = items.length ?
                items[items.length-1].id+1
                : 1
    const addNewItem = {id, checked: false, item}
    let listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="To Do List"/>
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
      <Content 
        items = {items.filter(item => 
          (item.item).toLowerCase().includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
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