import React from "react";

function TodoItem(props){

const [isDone,setSatus]=React.useState(false);

function handleCLick(){
  setSatus((prevStatus) =>{
    return !prevStatus;
  });
}

  return (
    <div onClick={handleCLick}>
      <li style={  {textDecoration: isDone ? "line-through red" : "none"} }> {props.item} </li>
    </div>
  );
}

export default TodoItem;
