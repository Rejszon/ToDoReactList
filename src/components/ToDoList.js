import Task from "./Task"
import "../styles/ToDoList.css"
function ToDoList(props){
    if (props.ToDo.length == 0) {
        return(
            <div className="ToDoList">
                <p>Nothing to do...</p>
            </div>
        )
    }
    if (props.Filter == false) {
        return(
            <div className="ToDoList">
                {props.ToDo.map((item) => (
                    <Task key={item.id} item = {item} updateTask = {props.handleTasks}/>
                ))}
            </div>
        )
    }
    return(
        <div className="ToDoList">
            {props.ToDo.map((item) => (
                item.ischecked == false && <Task key={item.id} item = {item} updateTask = {props.handleTasks}/>
            ))}
        </div>
    )
}
export default ToDoList