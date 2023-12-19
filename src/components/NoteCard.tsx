"use client";

import { FunctionComponent } from 'react';

interface NoteCardProps {
  title: string;
  date: string;
  onClick?: () => void;
}

const NoteCard: FunctionComponent<NoteCardProps> = ({ title, date, onClick }) => {
  return (
    <div className="note-entry p-4 flex justify-between items-center bg-white shadow-md rounded-lg mb-2" onClick={onClick}>
      <div>{title}</div>
      <div>{date}</div>
    </div>
  );
};

export default NoteCard;
