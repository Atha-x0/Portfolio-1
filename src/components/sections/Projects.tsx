import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard, { Project } from '../ui/ProjectCard';

const projectsData: Project[] = [
  {
    id: 1,
    title: "NeuralVision",
    description: "A computer vision application that uses deep learning to identify objects in real-time video streams.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["Python", "TensorFlow", "OpenCV", "Flask"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "ai"
  },
  {
    id: 2,
    title: "AI Design Assistant",
    description: "A web application that leverages machine learning to help designers generate color palettes and layout suggestions.",
    image: "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["React", "Node.js", "ML", "Figma API"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "webdev"
  },
  {
    id: 3,
    title: "SentimentTracker",
    description: "An NLP-based tool that analyzes customer reviews and social media mentions to track brand sentiment over time.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["Python", "NLTK", "spaCy", "Flask", "React"],
    github: "https://github.com",
    category: "ai"
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description: "A web app that helps designers and developers create professional portfolios with customizable templates.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "webdev"
  },
  {
    id: 5,
    title: "HealthPredict",
    description: "An ML model that predicts potential health risks based on lifestyle and genetic factors.",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["Python", "scikit-learn", "Pandas", "TensorFlow"],
    github: "https://github.com",
    category: "ai"
  },
  {
    id: 6,
    title: "CodeExplainer",
    description: "An educational tool that uses NLP to explain complex code snippets in plain English for programming students.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["Python", "NLP", "React", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "ai"
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'webdev', name: 'Web Development' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Projects" 
          subtitle="Selected works showcasing my skills and interests" 
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;