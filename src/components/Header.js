import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClick = (e)=>{
        console.log(e)
        alert("You just clicked me")
    }

    
    return (
        <div>
            {/* <h1>{props.title} is the best in the {props.market} in shop with stall number {props.stallno}</h1> */}
            <header className='header'>
                <h1>Task Scheduler</h1>
                <Button color='green' text="Add" onClick={onClick} />
            </header>
        </div>
    )
}

Header.propTypes = {
    stallno : PropTypes.number,
    title : PropTypes.string.isRequired,
}

Header.defaultProps = {
    market : "Wandegeya Market",
    stallno : 25,
}

// This is how you can define an inline style
//CSS IN JS
// const divStyling = {
//     color: 'red',
//     backgroundColor : "blue"
// }

export default Header
