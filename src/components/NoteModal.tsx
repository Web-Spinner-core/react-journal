"use client";

import { FunctionComponent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
}

const NoteModal: FunctionComponent<NoteModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="noteTitle">Title:</Label>
            <Input id="noteTitle" name="noteTitle" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="mb-6">
            <Label htmlFor="noteContent">Content:</Label>
            <textarea id="noteContent" name="noteContent" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit">Save Note</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
