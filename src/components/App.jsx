import React from 'react';
import ReactDOM from 'react-dom';
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes";
import CreateNote from "./CreateNote"



function App(){

function createNote(noteItem,index){
    return <Note
            key = {index}
            id = {index}
            title = {noteItem.title}
            content = {noteItem.content}
            onDelete = {onDelete}
            />;
  }

const [notes,setNotes]=React.useState([]);

function addNote(newNote){
  setNotes((prevNote) => {
    return [...prevNote, newNote];
  });
}

function onDelete(id){
  setNotes(prevNote => {
    return  prevNote.filter((nodeItem,index) => {
        return index !== id;
    });
  });
}

React.useEffect(() => {
    const data = localStorage.getItem("notes");
    if(data){
        setNotes(JSON.parse(data));
    }
  }, []);

React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  return (
    <div>
      <Heading />
        <CreateNote onAdd={addNote}/>
        {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
