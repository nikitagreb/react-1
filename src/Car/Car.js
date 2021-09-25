import React from 'react'

export default props => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '3px',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        borderRadius: '5px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>
            <strong>Year: {props.year}</strong>
        </p>
        <input type="text" onChange={props.handlerChangeName} value={props.name}/>
        <button onClick={props.handlerDeleteCar}>Delete car</button>
    </div>
)
