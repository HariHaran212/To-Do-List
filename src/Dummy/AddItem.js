import React from 'react'
import { FaPlus } from "react-icons/fa";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <div  className='container w-100 d-flex justify-content-center ml-2'>
        <form onSubmit={(e) => handleSubmit(e)}>
            {/* <label 
                htmlFor='addItem'
                >
                    Add Item
            </label> */}
            <div className='d-flex mt-2 ml-6 item'>
                <input
                    // autoFocus
                    id='addItems'
                    type='text'
                    placeholder='Add task'
                    className='form-control w-75'
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    required
                />
                <button
                    type='submit'
                    aria-label='Add Item'
                    className='btn btn-primary text-white'
                >
                    {/* <FaPlus /> */}
                    <i class="bi bi-plus-lg"></i>
                </button>
            </div>
        </form>
    </div>
  )
}

export default AddItem