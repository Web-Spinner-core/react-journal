import React from 'react';
import { NoteItem } from '@/components/NoteItem';

interface Note {
  id: string;
  title: string;
  date: string;
}

interface NoteListProps {
  notes: Note[];
  onSelectNote: (noteId: string) => void;
}

export function NoteList({ notes, onSelectNote }: NoteListProps) {
  return (
    <div className="flex flex-col space-y-4">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          title={note.title}
          date={note.date}
          onClick={() => onSelectNote(note.id)}
        />
      ))}
    </div>
  );
}
