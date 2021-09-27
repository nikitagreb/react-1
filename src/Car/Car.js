import React from 'react'
import {Component} from 'react'
import classes from './Car.module.scss'
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'

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

        return (
            <>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    className={inputClasses.join(' ')}
                    onChange={this.props.handlerChangeName}
                    value={this.props.name}
                />
                <button onClick={this.props.handlerDeleteCar}>Delete car</button>
            </>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, classes['car'])
