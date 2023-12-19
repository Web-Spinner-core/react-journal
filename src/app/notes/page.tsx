"use client";

import { FunctionComponent, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import NoteList from '@/components/NoteList';
import NoteModal from '@/components/NoteModal';
import { Button } from '@/components/Button';

interface NotePageProps {}

const notesInitial = [
  { title: 'Magnetism', date: '12/10/23' },
  { title: 'Electricity', date: '11/20/23' }
];

const NotePage: FunctionComponent<NotePageProps> = () => {
  const [notes, setNotes] = useState(notesInitial);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewNote = (title: string, content: string) => {
    // This example does not handle the content, only the title and date is used
    const newNote = { title, date: new Date().toLocaleDateString('en-US') };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10 text-2xl font-bold">
        <div className="flex justify-between">
          <h1 className="text-4xl">Notes</h1>
          <Button onClick={() => setIsModalOpen(true)}>
            Add Note
          </Button>
        </div>
        <NoteList notes={notes} />
      </div>
      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleNewNote}
      />
    </div>
  );
};

export default NotePage;
