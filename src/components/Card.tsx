import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  sourceLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  liveLink,
  sourceLink,
}) => {
  return (
    <div className="max-w-sm rounded-lg border-solid border-4 border-sky-500 overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      <img
        className="w-full h-48 object-cover  border-2 border-slate-500"
        src={imageUrl}
        alt={title}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
      <div className="px-6 pt-2 pb-4 flex gap-3">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          <Github size={18} />
          Source
        </a>
      </div>
    </div>
  );
};

export default Card;