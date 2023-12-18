import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import NoteList from '@/components/NoteList';
import AddNoteModal from '@/components/AddNoteModal';
import { Button } from '@/components/ui/button';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddNote = (title: string, content: string) => {
    const newNote = { id: Date.now().toString(), title, content, date: new Date().toLocaleDateString() };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setModalOpen(false);
  };

  const handleNoteClick = (note) => {
    alert(`Note Content for "${note.title}":\n\n${note.content}`);
  };

  return (
    <div className="bg-gray-100 flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6">Notes</h1>
        <NoteList notes={notes} onNoteClick={handleNoteClick} />
        <Button onClick={() => setModalOpen(true)} className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          +
        </Button>
        <AddNoteModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddNote} />
      </div>
    </div>
  );
}