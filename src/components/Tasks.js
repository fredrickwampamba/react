import React from 'react'
import Task from './Task'
const tasks = [
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
]
const Tasks = () => {
    return (
        <>
            {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </>
    )
}

// Delete Task
const onDelete = (id)=>{
    console.log("They clicked me", id)
}

export default Tasks
