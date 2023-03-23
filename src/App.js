import { useState } from "react";
import './App.css';


function App() {
  const [car, setCar] = useState ({
    brand:'volvo', 
    color: 'black'
  })

  function changeBrand () {
    setCar ({
      ...car,
      brand: 'benz'
    })
  };

  const [count, setCount] = useState(0);

  function increaseCount () {
    setCount (count + 1)
  };

  function decreaseCount () {
    setCount (count - 1)
  };
   
  const [value, setValue] = useState('david')

  function changeValue (event) {
    const changed = event.target.value;
    setValue (changed);
  }


  const [toggle, setToggle] = useState(false)

  function toggleButton () {
    setToggle (!toggle)
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>

      <h1>{car.brand}</h1>
      <p>{car.color}</p>

      <button onClick={changeBrand}>change car brand</button>

      <input type="text" placeholder="type anything" onChange={changeValue} />
      <h1>{value}</h1>

      <button onClick={toggleButton}>toggleMe</button>
      
      {
        toggle && <h1>I love my Family</h1>
      }
      
    </div>
  );
}

export default App;
