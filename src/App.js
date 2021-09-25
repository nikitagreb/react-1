import './App.css'
import Car from './Car/Car'
import {Component} from 'react'

class App extends Component {

    constructor(props) {
        console.log('App constructor')
        super(props)

        this.state = {
            cars: [
                {name: 'Ford', year: 2018},
                {name: 'Mazda', year: 2015},
                {name: 'Audi', year: 2013},
            ],
            pageTitle: "React components",
            showCars: false
        }
    }

    componentWillMount() {
        console.log('App componentWillMount')
    }

    componentDidMount() {
        console.log('App componentDidMount')
    }

    handlerChangeName = (name, index) => {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    }

    handlerDeleteCar(index) {
        const cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({cars})
    }

    handlerToggleCars = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    render() {

        console.log('App render')

        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div className="App" style={divStyle}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>
                <button onClick={this.handlerToggleCars}>Toggle cars</button>

                {this.state.showCars
                    ? this.state.cars.map((car, index) => {
                        return (
                            <div key={index}
                                style={{
                                width: 250,
                                margin: 'auto',
                                paddingTop: 20
                            }}>
                                <Car
                                    name={car.name}
                                    year={car.year}
                                    handlerDeleteCar={this.handlerDeleteCar.bind(this, index)}
                                    handlerChangeName={event => this.handlerChangeName(event.target.value, index)}
                                />
                            </div>
                        )
                    })
                    : null
                }

            </div>
        )
    }
}

export default App
