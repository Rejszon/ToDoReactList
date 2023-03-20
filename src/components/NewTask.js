import React from "react"
import { useState } from "react";
function NewTask(props){
    
    function handleAddingTasks(e){
        e.preventDefault();
        props.AddToDoItem(NewTask)
        setNewTask("")
    }
    const [NewTask, setNewTask] = useState("")
    return(
        <>
        <form onSubmit={handleAddingTasks}>
        <input
            type="text"
            name="newTask"
            placeholder="Add new task"
            value={NewTask}
            onChange={(e) => setNewTask(e.target.value)}
            
        ></input>
        <button type="submit">Add</button>
        </form>
        </>
    )
}
export default NewTask