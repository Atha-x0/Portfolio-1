import React from 'react';
import { motion } from 'framer-motion';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: 'programming' | 'design' | 'ai';
  color: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <motion.div
      className="card p-6 h-full"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-4">
        <div 
          className={`p-3 rounded-lg mr-4 ${skill.color}`}
        >
          {skill.icon}
        </div>
        <h3 className="text-lg font-bold">{skill.name}</h3>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5 mb-1">
        <motion.div 
          className={`h-2.5 rounded-full ${skill.color.replace('bg-', 'bg-')}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>Beginner</span>
        <span>Advanced</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;