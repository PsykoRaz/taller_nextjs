"use client";
import React, { useState } from 'react';

interface NoteCardProps {
  title: string;
  content: string;
  onDelete: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, content, onDelete }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <div
      className={`p-4 border rounded ${
        isHighlighted ? 'bg-accent' : 'bg-secondary'
      }`}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2">{content}</p>
      <div className="mt-4">
        <button onClick={toggleHighlight}>Highlight</button>
        <button onClick={onDelete} className="ml-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
