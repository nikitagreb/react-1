import React from 'react'
import './Car.css'

export default props => {

    const inputClasses = ['input']
    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 4 ) {
        inputClasses.push('bold')
    }

    return (
        <div className="car">
            <h3>Car name: {props.name}</h3>
            <p>
                <strong>Year: {props.year}</strong>
            </p>
            <input
                type="text"
                className={inputClasses.join(' ')}
                onChange={props.handlerChangeName}
                value={props.name}
            />
            <button onClick={props.handlerDeleteCar}>Delete car</button>
        </div>
    )
}
