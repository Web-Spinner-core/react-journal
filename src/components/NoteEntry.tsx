import React from 'react';

type NoteEntryProps = {
  title: string;
  date: string;
  onClick: () => void;
};

export default function NoteEntry({ title, date, onClick }: NoteEntryProps) {
  return (
    <div
      className="note-entry p-4 bg-white shadow rounded flex justify-between hover:bg-gray-300 cursor-pointer"
      onClick={onClick}
    >
      <span>{title}</span>
      <span>{date}</span>
    </div>
  );
}