import { Notitas } from './Notes.js';
import { useState } from 'react';


export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState();

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleClick = () => {
    console.log(newNote);
  }
  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map(note => <Notitas key={note.id} content={note.content} date={note.date} />)}      
      </ol>
      <div>
        <input type='text' onChange={handleChange}/>
        <input type='submit' value='Submit' onClick={handleClick}/>
      </div>
    </div>
  );
}
