import React from 'react';
import { motion } from 'framer-motion';

export interface TimelineEvent {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="timeline-dot" />
      <div className="mb-1">
        <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">
          {event.title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm mb-2">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {event.organization}
          </span>
          <span className="hidden sm:inline text-gray-400">•</span>
          <span className="text-gray-500 dark:text-gray-400">
            {event.period}
          </span>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        {event.description}
      </p>
    </motion.div>
  );
};

export default TimelineItem;