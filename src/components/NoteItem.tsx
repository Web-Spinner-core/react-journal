import React from 'react';

interface NoteItemProps {
  title: string;
  date: string;
  onClick: () => void;
}

export function NoteItem({ title, date, onClick }: NoteItemProps) {
  return (
    <div onClick={onClick} className="flex justify-between items-center p-4 bg-white shadow-md cursor-pointer">
      <span>{title}</span>
      <span>{date}</span>
    </div>
  );
}
