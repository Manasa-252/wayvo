import React from "react";
import NoteItem from "./NoteItem";

interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface NoteListProps {
  notes: Note[];
  deleteNote: (id: number) => void;
  editNote: (id: number, updatedTitle: string, updatedContent: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, deleteNote, editNote }) => {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>No notes yet. Add some!</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
