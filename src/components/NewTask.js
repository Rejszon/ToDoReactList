import React from "react"

function NewTask(props){
    return(
        <>
        <input
            type="text"

        ></input>
        <button onClick={() => AddToDoItem()}>Add</button>
        </>
    )
}
export default NewTask