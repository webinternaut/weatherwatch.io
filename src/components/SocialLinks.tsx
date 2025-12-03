import React from 'react';
import { Twitter, Instagram, Github } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-6">
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
        <span className="sr-only">Twitter</span>
        <Twitter size={20} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
        <span className="sr-only">Instagram</span>
        <Instagram size={20} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
        <span className="sr-only">GitHub</span>
        <Github size={20} />
      </a>
    </div>
  );
};