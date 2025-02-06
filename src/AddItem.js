import React from 'react'
import { useRef, useEffect } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef()
  return (
    <form className='searchForm' onSubmit={(e) => handleSubmit(e)}>
        <div className='w-100 my-2 d-flex justify-content-center'>
            <input
                ref={inputRef}
                id='addItems'
                type='text'
                placeholder='Add task'
                className='form-control'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                required
            />
            <button
                type='submit'
                aria-label='Add Item'
                className='btn border-primary text-primary font-weight-bold add-itm-btn'
                onClick={() => inputRef.current.focus()}
            >
                <i className='bi bi-plus-lg'></i>
            </button>
        </div>
    </form>
  )
}

export default AddItem