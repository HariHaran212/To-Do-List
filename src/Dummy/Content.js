import React from "react"
import ItemsList from "./ItemsList"
// import "./index.css"

function Content({items, handleCheck, handleDelete}) {
    return(
        <main className="d-flex justify-content-center">
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
        </main>
    );
}

export default Content