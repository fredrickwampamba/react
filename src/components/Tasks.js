import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    // Delete Task

    return (
        <>
            {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}



export default Tasks
