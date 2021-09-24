import './App.css'
import Car from './Car/Car'

function App() {
    return (
        <div className="App">
            <h1>Hello world!</h1>

            <Car name="Ford" year={2018}>
                <p style={{color: 'green'}}>Color</p>
            </Car>
            <Car name="Mazda" year={2019}>
                <p style={{color: 'red'}}>Color</p>
            </Car>
            <Car name="Audi" year={2017}/>
        </div>
    )
}

export default App
