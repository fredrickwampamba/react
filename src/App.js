import { useState } from "react"
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {

  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : "Doctor's Appointment",
        day : "Feb 5th at 12:00",
        reminder : true
    },
    {
        id : 2,
        text : "Board Meeting",
        day : "Feb 6th at 09:00",
        reminder : true   
    },
    {
        id : 3,
        text : "Visitation Day",
        day : "June 8th at 19:00",
        reminder : false
    }    
])
//Add Task
const addTask = (task)=>{
  console.log(task)
  const id = Math.floor(Math.random()*1000) + 1

  const newTask = {...task, id}
  setTasks([...tasks, newTask])
}
const onDelete = (id)=>{
  setTasks(tasks.filter((task) => task.id !== id ))
  // console.log("delete", id)
}

const toggleReminder = (id)=>{
  console.log(id)
  setTasks(tasks.map((task)=> 
    task.id === id ? {...task, reminder : !task.reminder } : task
  ))
}
  return (
    <div className="container">
      <Header title="Designer Fredrick" stallno={12} />
      <AddTask onAdd={addTask} />
      { tasks.length < 1 ? "The list is empty" : <Tasks tasks={tasks}  onDelete={onDelete} onToggle={toggleReminder}/>}
      
    </div>
  );
}

export default App;
