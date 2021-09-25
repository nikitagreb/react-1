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
        pageTitle: "React components",
        showCars: false
    }

    changeTitleHandler = newTitle => {
        this.setState({
            pageTitle: newTitle
        })
    }

    handlerToggleCars = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div className="App" style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.handlerToggleCars}>Toggle cars</button>

                {this.state.showCars
                    ? this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                onChangeTitle={() => this.changeTitleHandler(car.name)}
                            />
                        )
                    })
                    : null
                }

            </div>
        )
    }
}

export default App
