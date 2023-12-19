import React from 'react';
import { Modal } from '@/components/Modal';
import { NoteForm } from '@/components/NoteForm';

interface NewNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveNote: (title: string, content: string) => void;
}

export function NewNoteModal({ isOpen, onClose, onSaveNote }: NewNoteModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <span className="close" onClick={onClose}>&times;</span>
      <h2>Create New Note</h2>
      <NoteForm onSave={onSaveNote} />
    </Modal>
  );
}
