import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id: number, updatedTitle: string, updatedContent: string) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, title: updatedTitle, content: updatedContent }
          : note
      )
    );
  };

  return (
    <div className="app">
      <h1>Notes App 📝</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
};

export default App;
