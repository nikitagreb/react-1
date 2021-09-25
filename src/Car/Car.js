import React from 'react'
import 'Car.css'

export default props => (
    <div className='Car'>
        <h3>Car name: {props.name}</h3>
        <p>
            <strong>Year: {props.year}</strong>
        </p>
        <input type="text" onChange={props.handlerChangeName} value={props.name}/>
        <button onClick={props.handlerDeleteCar}>Delete car</button>
    </div>
)
