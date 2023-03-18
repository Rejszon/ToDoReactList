import React from "react"
function Task(props){
    function generateATodo(x)
    {
        if(x.ischecked == false)
        {
            return <label htmlFor="check">{x.value}</label>
        }
        else{
            return(
                <label htmlFor="check" style={{textDecoration: "line-through"}}>{x.value}</label>
            )
        }
    }
    return(
        <div>
            <input type ="checkbox" name="check" onChange={() => props.updateTask(props.item.id)} checked = {props.item.ischecked}/>
            {generateATodo(props.item)}
        </div>
    )
}
export default Task