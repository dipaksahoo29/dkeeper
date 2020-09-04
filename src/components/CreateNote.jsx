import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


function CreateNote(props){

  const [isExpanded, setExpanded] = React.useState(false);

  const [note,setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const { name , value } = event.target;
    setNote( prevNote =>{
      return {...prevNote,
        [name]:value
      };
    });
  }

  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();
    setNote(
      {title:"",
      content:""}
      );
    }

    function expand(){
      setExpanded(true);
    }


  return (
    <div>
    <form className="create-note">
      {isExpanded && (<input type="text"
      autoComplete="off"
      onChange={handleChange}
      name="title"
      value={note.title}
      placeholder="Title" />)
      }

      <textarea name="content"
        onClick={expand}
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note"
        row={isExpanded ? 3:1}
      />

      <Zoom in={isExpanded}>
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </Zoom>

    </form>
    </div>
  );

}

export default CreateNote;
