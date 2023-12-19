import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import NoteList from '@/components/NoteList';
import AddNoteButton from '@/components/AddNoteButton';
import Modal from '@/components/Modal';
import NoteForm from '@/components/NoteForm';

function NotesPage() {
    const [notes, setNotes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddNote = (title: string, content: string) => {
        setNotes([...notes, { title, date: new Date().toLocaleDateString() }]);
        setIsModalOpen(false);
    };

    return (
        <div className="flex">
            <Sidebar activeItem="notes" />

            <div className="flex-1 p-10">
                <h1 className="text-4xl font-bold mb-6">Notes</h1>
                <div className="bg-white shadow-md rounded p-6">
                    <NoteList notes={notes} />
                    <AddNoteButton onClick={() => setIsModalOpen(true)} />
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <NoteForm onSubmit={handleAddNote} />
            </Modal>
        </div>
    );
}

export default NotesPage;
