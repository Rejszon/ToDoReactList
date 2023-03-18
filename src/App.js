import Filter from "./components/Filter"
import ToDoList from "./components/ToDoList"
import NewTask from "./components/NewTask"
import { useState } from "react";


function App() {
  const [ToDo, AddToDo] =useState([]);

  function AddToDoItem(){
    const item = {
      id: Math.floor(Math.random()),
      value: "damianek"
    }
    console.log("Im dumb")
    AddToDo(list => [...list , item] )
  }
  
  return (
    <div className="App">
      <header>
        <h1>Welcome to my To Do list!</h1>
      </header>
      <Filter />
      <ToDoList />
      <NewTask AddToDoItem={AddToDoItem}/>
    </div>
  );
}

export default App;
