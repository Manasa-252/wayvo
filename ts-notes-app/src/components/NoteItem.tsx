import React, { useState } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface NoteItemProps {
  note: Note;
  deleteNote: (id: number) => void;
  editNote: (id: number, updatedTitle: string, updatedContent: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({
  note,
  deleteNote,
  editNote,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(note.title);
  const [content, setContent] = useState<string>(note.content);

  const handleEdit = () => {
    editNote(note.id, title, content);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <small>{note.date}</small>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteItem;
