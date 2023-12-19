import React from 'react';

interface AddNoteButtonProps {
  onClick: () => void;
}

export function AddNoteButton({ onClick }: AddNoteButtonProps) {
  return (
    <button
      id="newNoteBtn"
      onClick={onClick}
      className="mt-6 p-4 rounded-full bg-gray-300 text-4xl shadow-md focus:outline-none"
    >
      +
    </button>
  );
}
