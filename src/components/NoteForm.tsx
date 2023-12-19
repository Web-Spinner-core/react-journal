import React, { useState } from 'react';

interface NoteFormProps {
  onSave: (title: string, content: string) => void;
}

export function NoteForm({ onSave }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        className="border p-2 w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        name="content"
        className="border p-2 w-full mb-4"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Save Note
      </button>
    </form>
  );
}
