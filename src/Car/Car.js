import React from 'react'

export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>
            <strong>Year: {props.year}</strong>
        </p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)
