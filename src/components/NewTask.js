import React from "react"
import { useState } from "react";
function NewTask(props){
    
    function handleAddingTasks(){
        props.AddToDoItem(NewTask)
        setNewTask("")
    }
    const [NewTask, setNewTask] = useState("")
    return(
        <>
        <input
            type="text"
            name="newTask"
            placeholder="Add new task"
            value={NewTask}
            onChange={(e) => setNewTask(e.target.value)}
            
        ></input>
        <button onClick={handleAddingTasks}>Add</button>
        </>
    )
}
export default NewTask