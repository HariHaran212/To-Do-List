import React from "react"
import ItemsList from "./ItemsList"

function Content({items, handleCheck, handleDelete}) {
    return(
        <>
            {items.length ? (
                <ItemsList
                    items = {items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
                ) : (
                    <p>Your List is Empty</p>
                )
            }
        </>
    );
}

export default Content