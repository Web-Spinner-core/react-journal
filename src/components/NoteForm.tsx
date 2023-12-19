import React, { useState } from 'react';

interface NoteFormProps {
    onSubmit: (title: string, content: string) => void;
}

function NoteForm({ onSubmit }: NoteFormProps) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(title, content);
        setTitle('');
        setContent('');
    };

    return (
        <form id="addNoteForm" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="noteTitle" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input type="text" id="noteTitle" value={title} onChange={(e) => setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-6">
                <label htmlFor="noteContent" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
                <textarea id="noteContent" value={content} onChange={(e) => setContent(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" required></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Add Note
                </button>
            </div>
        </form>
    );
}

export default NoteForm;
