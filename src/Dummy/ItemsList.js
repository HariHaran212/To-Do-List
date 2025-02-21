import React from 'react'
import LineItem from './LineItem'

const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul className='mt-2'>
        {items.map((item) => 
            <LineItem
                item = {item}
                key={item.id}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
            />
        )}
    </ul>
  )
}

export default ItemsList