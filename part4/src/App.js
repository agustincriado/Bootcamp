import { Notitas } from './Notes.js';
import { useState } from 'react';


export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
 
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleClick = () => {
    const NewtoAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes([...notes, NewtoAdd]);
    setNewNote("")
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick = { handleShowAll }>{showAll ? 'show only important' : 'show all'}</button>
      <h3>{showAll ? 'These are all notes' : 'These are only important ones'}</h3>
      <ol>
        {
        notes
        .filter(note => {
          if (showAll === true) return true;
          return note.important === true
          })
        .map(note => <Notitas key={note.id} {...note} />
        )}      
      </ol>
      <div>
        <input type='text' onChange={handleChange} value={newNote}/>
        <input type='submit' value='Submit' onClick={handleClick}/>
      </div>
    </div>
  );
}
