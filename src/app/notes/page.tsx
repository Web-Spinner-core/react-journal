import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { NoteList } from '@/components/NoteList';
import { AddNoteButton } from '@/components/AddNoteButton';
import { NewNoteModal } from '@/components/NewNoteModal';

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectNote = (noteId: string) => {
    // Handle note selection
  };

  const handleAddNote = () => {
    setIsModalOpen(true);
  };

  const handleSaveNote = (title: string, content: string) => {
    // Handle saving the new note
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar activeSection="Notes" />
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-semibold mb-6">Notes</h1>
        <NoteList notes={notes} onSelectNote={handleSelectNote} />
        <AddNoteButton onClick={handleAddNote} />
        <NewNoteModal isOpen={isModalOpen} onClose={handleCloseModal} onSaveNote={handleSaveNote} />
      </div>
    </div>
  );
}

export default NotesPage;
