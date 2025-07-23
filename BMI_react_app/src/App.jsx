import './App.css';
import React from 'react';
import { useState } from 'react'; 

function App() {
   //making a state variable to hold the input value
   const[weight, setWeight] = useState("");
    const[height, setHeight] = useState("");
    const[bmi, setBmi] = useState("");
    const[message, setMessage] = useState('');

//Logic
let calcBmi = (e) =>{
  e.preventDefault();
  if(weight === 0 || height === 0){
    alert("Please enter a valid weight and height");
  }
  else{
    let bmi = (weight/ (height * height)) * 703;
    setBmi(bmi.toFixed(2));
  
  }
  if(bmi<25){
    setMessage("You are underweight");
  }
  else if(bmi >= 25 && bmi <= 30){
    setMessage("You are normal weight");
  }
  else{
    setMessage("You are overweight");
  }
}
//reload function
let reload = () => {
  window.location.reload();
}







  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f3e8ff 60%, #ede9fe 100%)' }}>
      <div className="bmi-card">
        <h1 className="bmi-title">BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label className="bmi-label">Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              className="bmi-input"
            />
          </div>
          <div>
            <label className="bmi-label">Height (inches)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={e => setHeight(e.target.value)}
              className="bmi-input"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <button className="bmi-btn" type="submit">Submit</button>
            <button className="bmi-btn-outline" onClick={reload} type="button">Reload</button>
          </div>
          <div className="bmi-result">
            <h3>Your BMI is: <span>{bmi}</span></h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
)
}
export default App;