import React from 'react'
import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'


const Task = (props) => {
    return (
        <div className={`task ${ props.task.reminder ? "reminder": ""}`} onDoubleClick={()=>{props.onToggle(props.task.id)}}>
            <h3>{props.task.text} <FaTimes style={{color: "red", cursor: "pointer"}} onClick={()=>{props.onDelete(props.task.id)}} /></h3>
            <p>{props.task.day}</p>
        </div>
    )
}

Task.defaultProps = {
    task : {
        text : "Unknown Task",
        day : "Jan 1st at 13:00"
    }
}

Task.prototype = {
    task : PropTypes.object
}

export default Task
