import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

export interface DesignProject {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  link?: string;
}

interface DesignCardProps {
  design: DesignProject;
  setSelectedDesign: (design: DesignProject | null) => void;
}

const DesignCard: React.FC<DesignCardProps> = ({ design, setSelectedDesign }) => {
  return (
    <motion.div
      className="card overflow-hidden group cursor-pointer"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={() => setSelectedDesign(design)}
    >
      <div className="relative overflow-hidden">
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white text-lg font-bold">{design.title}</h3>
          <p className="text-white/80 text-sm">{design.category}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const DesignModal: React.FC<{
  design: DesignProject | null;
  onClose: () => void;
}> = ({ design, onClose }) => {
  if (!design) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-white dark:bg-dark-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white z-10"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        
        <div className="relative h-[50vh] bg-gray-100 dark:bg-dark-700">
          <img
            src={design.image}
            alt={design.title}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{design.title}</h2>
              <p className="text-primary-600 dark:text-primary-400">{design.category}</p>
            </div>
            {design.link && (
              <a
                href={design.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2 px-4 text-sm"
              >
                <ExternalLink size={16} className="mr-2" />
                View Project
              </a>
            )}
          </div>
          {design.description && (
            <p className="text-gray-700 dark:text-gray-300">{design.description}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DesignCard;