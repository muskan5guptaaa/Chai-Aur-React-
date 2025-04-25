import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15)
//let counter=15

const addValue=()=>{
  //counter=counter+1
  console.log("clicked",Math.random())
  setCounter(counter+1)
}
const removeValue=()=>{
  if(counter>0){ //add logic to check if counter is greater than 0
    setCounter(counter-1)
    console.log("clicked",Math.random())
  }else{
    console.log("Counter value is already 0")
  }
}
  return (  
    <>
      <h1>Muskan Gupta</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}>
        Increase value</button>
      <br/>
      <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
