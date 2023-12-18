import React from 'react';
import NoteEntry from '@/components/NoteEntry';

type Note = {
  id: string;
  title: string;
  content: string;
  date: string;
};

type NoteListProps = {
  notes: Note[];
  onNoteClick: (note: Note) => void;
};

export default function NoteList({ notes, onNoteClick }: NoteListProps) {
  return (
    <div id="notesList" className="space-y-4">
      {notes.map((note) => (
        <NoteEntry
          key={note.id}
          title={note.title}
          date={note.date}
          onClick={() => onNoteClick(note)}
        />
      ))}
    </div>
  );
}