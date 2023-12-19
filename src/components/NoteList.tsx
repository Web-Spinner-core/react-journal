import React from 'react';
import NoteItem from '@/components/NoteItem';

interface Note {
    title: string;
    date: string;
}

interface NoteListProps {
    notes: Note[];
}

function NoteList({ notes }: NoteListProps) {
    return (
        <div id="notesList" className="divide-y-2 divide-gray-100">
            {notes.map((note, index) => (
                <NoteItem key={index} title={note.title} date={note.date} />
            ))}
        </div>
    );
}

export default NoteList;
