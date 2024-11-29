import React, { useState, useEffect } from 'react';
import NoteCard from './note-card/NoteCard';

interface Note {
  id: number;
  title: string;
  content: string;
}

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    // Simulating fetch from an API
    const fetchedNotes: Note[] = [
      { id: 1, title: 'First Note', content: 'This is the first note' },
      { id: 2, title: 'Second Note', content: 'This is the second note' },
    ];
    setNotes(fetchedNotes);
  }, []);

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          content={note.content}
          onDelete={() => deleteNote(note.id)}
        />
      ))}
    </div>
  );
};

export default NoteList;
