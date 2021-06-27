import { Notitas } from './Notes.js';
import { useEffect, useState } from 'react';
import { getAllNotes, createNote } from './services/notes/services'


export default function App() { 
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    console.log('Render');
    getAllNotes().then(notes => setNotes(notes))
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const NewtoAdd = {
      body: newNote,
      title: new Date().toISOString(),
      userId: 1
    };

    createNote(NewtoAdd)
      .then((newNote) => {
      setNotes((prevNotes) => prevNotes.concat(newNote))
    })
    setNewNote("")
  }

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes
        .map(note => <Notitas key={note.id} {...note} />
        )}      
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button>Crear Nota</button>
      </form>
    </div>
  );
}
