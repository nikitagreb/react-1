import './App.css';
import Car from './Car/Car'

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>

        <Car name="Ford" year={2018}/>
        <Car name="Mazda" year={2019}/>
        <Car name="Audi" year={2017}/>
    </div>
  );
}

export default App;
