"use client";

import { FunctionComponent } from 'react';
import NoteCard from '@/components/NoteCard';

interface NoteListProps {
  notes: Array<{ title: string; date: string; }>; // Define a type for note objects
  onNoteClick?: (note: { title: string; date: string; }) => void;
}

const NoteList: FunctionComponent<NoteListProps> = ({ notes, onNoteClick }) => {
  return (
    <div className="mt-8">
      {notes.map((note, index) => (
        <NoteCard
          key={index}
          title={note.title}
          date={note.date}
          onClick={() => onNoteClick && onNoteClick(note)}
        />
      ))}
    </div>
  );
};

export default NoteList;
