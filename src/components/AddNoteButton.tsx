import React from 'react';

interface AddNoteButtonProps {
    onClick: () => void;
}

function AddNoteButton({ onClick }: AddNoteButtonProps) {
    return (
        <button id="addNoteBtn" className="mt-6 bg-gray-200 rounded-full p-3 hover:bg-gray-300 focus:outline-none" onClick={onClick}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
        </button>
    );
}

export default AddNoteButton;
