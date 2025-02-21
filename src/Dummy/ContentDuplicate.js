import React from "react"
import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
// import "./index.css"

function ContentDuplicate() {
    function getData(){
        let list = [
            {id: 1,
            checked: false,
            item: "Practice Coding"
            },
            {id: 2,
            checked: false,
            item: "Play Chess"
            },
            {id: 3,
            checked: false,
            item: "Do React Project"
            },
            {id: 4,
            checked: true,
            item: "Call Naveen"
            }
        ]
        console.log("List assigned");
        localStorage.setItem("todo_list", JSON.stringify(list));
        console.log("Stored data");
    }
    let list = JSON.parse(localStorage.getItem("todo_list"))
    console.log(typeof list)
    const [items, setItems] = useState(() => list);
    // const numbers = [-2, -1, 0, 1, 2]
    // const itemss = numbers.filter(n => n>=0).map(n => ({number:n}))
    // console.log(itemss)

    const handleCheck = (id) =>{
        const listItems = items.map(item => 
            item.id===id ? {...item, checked : !item.checked} : item
        );
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
        // console.log(listItems)
    }
    const deleteItem = (id) =>{
        const listItems = items.filter(item => 
            item.id!==id
        );
        setItems(listItems)
        console.log(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }
    const addItem = (item) => {
        console.log(items)
        items.push(item)
        console.log(items)
        localStorage.setItem("todo_list", JSON.stringify(items));
    } 
    return(
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => 
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label 
                                style={item.checked ? {textDecoration: 'line-through'} : null}
                                onDoubleClick={() => handleCheck(item.id)}
                                >
                                    {item.item}
                            </label>
                            <FaTrashAlt 
                                role="button"
                                tabIndex="0"
                                onClick={() => deleteItem(item.id)}
                            />
                        </li>
                    )}
                    <button onClick={() => addItem({
                        id:5,
                        checked: true,
                        item: "Success"
                    })}>Add item</button>
                </ul>
                ) : (
                    <div>
                        <p>Your List is Empty</p>
                        <button onClick={()=>getData()}>Get Listt</button>
                    </div>
                )
            }
        </main>
    );
}

export default ContentDuplicate