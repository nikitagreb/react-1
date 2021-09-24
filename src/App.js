import './App.css'
import Car from './Car/Car'
import {Component} from 'react'

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Mazda', year: 2015},
            {name: 'Audi', year: 2013},
        ],
        pageTitle: "React components"
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }

        const cars = this.state.cars

        return (
            <div className="App" style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <Car name={cars[0].name} year={cars[0].year}/>
                <Car name="Mazda" year={2019}/>
                <Car name="Audi" year={2017}/>
            </div>
        )
    }
}

export default App
