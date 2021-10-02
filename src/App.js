import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus());




  function handleclick(e) {
    setResult(result.concat(e.target.name));
  }
  function backspace() {
    setResult(result.slice(0, result.length - 1))
  }
  function clear() {
    setResult("")
  }
  function calculate() {
    try {
      setResult(eval(result).toString());
    }
    catch (error) {
      setResult("Error");
    }
  }
  function pi() {
    setResult(Math.PI);
  }
  function root() {
    setResult(Math.pow(result, (1 / 2)));
  }

  function cube() {

    setResult(Math.pow(result, 3));

  }

  function square() {
    setResult(Math.pow(result, 2));
  }
function rand(){
setResult(Math.random());
}

function exp(){
  setResult(Math.exp(result));
}

function ln(){
  setResult(Math.log(result));
}
function sin(){
  setResult(Math.sin(result));
}
function cuberoot(){
  setResult(Math.cbrt(result));
}
function log(){
  setResult(Math.log10(result));
}
function cos(){
  setResult(Math.cos(result));
}
function fact(){
  let i=1;
        let a=result;
        while(a>=1)
        {
            i = i*a;
            a--;
        }
        setResult(i);
}
function tan(){
  setResult(Math.tan(result));
}
function fraction(){
  setResult(1/result);
}


  return (
    <>
      <br></br>
      <br></br>
      <h1 className="h1">A Simple Calculator built using ReactJS</h1>

      <div className="container">
        <form>
          <input id="screen" type="text" value={result} ref={inputRef} />
        </form>
        <div className="keypad">
          {/* <button className="highlight" onClick={clear} id="clear">Clear</button>
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
        <button id="result" className="highlight" onClick={calculate}>=</button> */}


          <button id="rand" className="highlight" onClick={rand}>Rand</button>
          <button id ="exp" className="highlight" onClick={exp}>exp</button>
          <button className="highlight" onClick={clear} id="clear">Reset</button>
          <button name="(" onClick={handleclick}>(</button>
          <button name=")" onClick={handleclick}>)</button>
          <button className="highlight" onClick={backspace}>

            <img src="https://cdn3.iconfinder.com/data/icons/social-productivity-line-art-3/128/delete-512.png" width="16" height="16" alt="" style={{ color: "white" }} />


          </button>
          <button name="/" className="highlight" onClick={handleclick}>÷</button>




          <button className="highlight" onClick={ln}>ln</button>
          <button className="highlight" onClick={sin}>sin</button>
          <button className="highlight" onClick={cuberoot}>∛</button>
          <button name="7" onClick={handleclick}>7</button>
          <button name="8" onClick={handleclick}>8</button>
          <button name="9" onClick={handleclick}>9</button>
          <button name="*" className="highlight" onClick={handleclick}>X</button>



          <button className="highlight" onClick={log}>log</button>
          <button className="highlight" onClick={cos}>cos</button>
          <button className="highlight" onClick={fact}>X!</button>
          <button name="4" onClick={handleclick}>4</button>
          <button name="5" onClick={handleclick}>5</button>
          <button name="6" onClick={handleclick}>6</button>
          <button name="-" className="highlight" onClick={handleclick}>-</button>
          <button className="highlight" onClick={pi}>Π</button>
          <button className="highlight" onClick={tan}>tan</button>
          <button className="highlight" onClick={cube}>X<sup>3</sup></button>
          <button name="1" onClick={handleclick}>1</button>
          <button name="2" onClick={handleclick}>2</button>
          <button name="3" onClick={handleclick}>3</button>
          <button name="+" className="highlight" onClick={handleclick}>+</button>
          <button className="highlight" onClick={fraction}>1/x</button>
          <button className="highlight" onClick={root}>√</button>
          <button className="highlight" onClick={square}>X<sup>2</sup></button>

          <button name="." className="highlight" onClick={handleclick}>.</button>
          <button name="0" onClick={handleclick}>0</button>
          <button name="%" className="highlight" onClick={handleclick}>%</button>
          <button id="result" className="highlight" onClick={calculate}>=</button>



        </div>

      </div>
      <h1 className="h12">Designed by <a rel="noreferrer" target="_blank" href="https://github.com/varunherlekar/calculator">Varun Herlekar</a>Founder of Code Cubicals</h1>

    </>
  );
}
export default App;