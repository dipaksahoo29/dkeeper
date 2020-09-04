import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from "./TodoItem";


function App(){

const [inputText,setInputText]=React.useState("");
const [items,setItems]=React.useState([]);

function handleInput(event){
  setInputText(event.target.value);
}

function addItems(){
  setItems((prevItems) => {
    return [...prevItems,inputText]
  });
  setInputText("");
}


  return (
    <div className="container">
      <h1>To Do-List</h1>
        <input onChange={handleInput} autoComplete="off" type="text" name="inputText" value={inputText}/>
        <button onClick={addItems}>
          <span> Add </span>
        </button>
        <ul>
          {items.map(todoItem => {
            return <TodoItem item={todoItem} />;
          })}
        </ul>
    </div>

  );
}

export default App;
