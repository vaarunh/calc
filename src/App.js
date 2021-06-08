import React, { useState,useEffect,useRef } from 'react';
import './App.css';

function App() {
  const [result,setResult]=useState("");
  const inputRef=useRef(null);
  useEffect(()=>inputRef.current.focus()); 
  
  function handleclick(e){
      setResult(result.concat(e.target.name));
  }
  function backspace(){
    setResult(result.slice(0,result.length-1))
  }
  function clear(){
    setResult("")
  }
  function calculate(){
    try{
      setResult(eval(result).toString());
    }
    catch(error){
      setResult("Error");
    }
  }
  return (
    <>
    <br></br>
    <br></br>
      <h1 className="h1">A Simple Calculator built using ReactJS</h1>

    <div className="container">
    <form>
      <input type="text" value={result} ref={inputRef}/>
    </form>
      <div className="keypad">
      <button className="highlight" onClick={clear} id="clear">Clear</button>
        <button className="highlight" onClick={backspace}>C</button>  
        <button name="/" className="highlight" onClick={handleclick}>&divide;</button>
        <button name="7" onClick={handleclick}>7</button>
        <button name="8" onClick={handleclick}>8</button>
        <button name="9" onClick={handleclick}>9</button>
        <button name="*" className="highlight" onClick={handleclick}>&times;</button>
        <button name="4" onClick={handleclick}>4</button>
        <button name="5" onClick={handleclick}>5</button>
        <button name="6" onClick={handleclick}>6</button>
        <button name="-" className="highlight" onClick={handleclick}>&ndash;</button>
        <button name="1" onClick={handleclick}>1</button>
        <button name="2" onClick={handleclick}>2</button>
        <button name="3" onClick={handleclick}>3</button>
        <button name="+" className="highlight" onClick={handleclick}>+</button>
        <button name="0" onClick={handleclick}>0</button>
        <button name="." className="highlight" onClick={handleclick}>.</button>
        <button id="result" className="highlight" onClick={calculate}>=</button>
      </div>
    
    </div>
    <h1 className="h12">Designed by <a rel="noreferrer" target="_blank" href="https://github.com/varunherlekar/calculator">Varun Herlekar</a></h1>

    </>
  );
}
export default App;