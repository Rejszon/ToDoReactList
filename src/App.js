import FilterComponent from "./components/Filter"
import ToDoList from "./components/ToDoList"
import NewTask from "./components/NewTask"
import { useState } from "react";


function App() {
  const [ToDo, AddToDo] =useState([]);
  const [Filter, AddFilter] = useState(false);
  function handleFilter(){
    AddFilter(!Filter)
  }
  
  function AddToDoItem(NewTask){
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: NewTask,
      ischecked: false
    }
    AddToDo(list => [...list , item] )
  }
  function handleTasks(id){
    const newToDo = ToDo.map(item => {
      if(item.id === id){
       item.ischecked = !item.ischecked
      }
      return item
    })
    AddToDo(newToDo)
  }
  
  return (
    <div className="App">
      <header>
        <h1>Welcome to my To Do list!</h1>
      </header>
      <FilterComponent handleFilter ={handleFilter}/>
      <ToDoList ToDo = {ToDo} handleTasks ={handleTasks} Filter ={Filter}/>
      <NewTask AddToDoItem={AddToDoItem}/>
    </div>
  );
}

export default App;
