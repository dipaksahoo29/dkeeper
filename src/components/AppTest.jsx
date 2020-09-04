import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login'


function App(){
  const [count,setState]=React.useState(0);

  const fruits =["Apple","Orange","Banana"];
  const food = ["Chicken","Mutton", ...fruits];

  console.log("Hello"+fruits);
  console.log(food);


  function increase(){
    setState(count + 1);
  }
   function reSet(){
     setState(0);
   }



  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}> + </button>
      <button onClick={reSet}> Reset </button>

    </div>
  );
}

export default App;
