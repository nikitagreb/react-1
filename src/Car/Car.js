import React from 'react'
import Radium from 'radium'
import {Component} from 'react'
import classes from './Car.module.scss'

class Car extends Component {
    render() {
        const inputClasses = [classes['input']]
        if (this.props.name !== '') {
            inputClasses.push(classes['green'])
        } else {
            inputClasses.push(classes['red'])
        }

        if (this.props.name.length > 4 ) {
            inputClasses.push(classes['bold'])
        }

        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
                cursor: 'pointer'
            }
        }

        return (
            <div className={classes['car']} style={style}>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    className={inputClasses.join(' ')}
                    onChange={this.props.handlerChangeName}
                    value={this.props.name}
                />
                <button onClick={this.props.handlerDeleteCar}>Delete car</button>
            </div>
        )
    }
}

export default Radium(Car)
