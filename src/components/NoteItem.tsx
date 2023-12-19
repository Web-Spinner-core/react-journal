import React from 'react';

interface NoteItemProps {
    title: string;
    date: string;
}

function NoteItem({ title, date }: NoteItemProps) {
    return (
        <div className="flex justify-between items-center py-3 cursor-pointer">
            <div className="text-lg">{title}</div>
            <div className="text-sm text-gray-500">{date}</div>
        </div>
    );
}

export default NoteItem;
