import React from 'react'

export default props => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '3px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>
            <strong>Year: {props.year}</strong>
        </p>
        <input type="text" onChange={props.handlerChangeName} value={props.name}/>
        <button onClick={props.handlerDeleteCar}>Delete car</button>
    </div>
)
