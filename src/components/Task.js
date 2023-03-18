import React from "react"
function Task(props){
    return(
        <>    
            <input type ="checkbox" name="check"></input>
            <label for = "check">{props.text}</label>
        </>
    )
}
export default Task