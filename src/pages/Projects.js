import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, Users, FileText, Globe } from 'lucide-react';

const projects = [
    {
        title: "Football Data AI App",
        description: "A comprehensive ETL system that builds a historical database for the Turkish Super Lig. Handles API rate limits and maps complex relationships (transfers, stats) to create a dataset ready for predictive modeling.",
        techStack: ["Python", "SQLAlchemy", "SQLite", "Pandas", "API-Football"],
        link: "https://onatakca.github.io/football-data-ai-app", // Placeholder, you can update if deployed
        github: "https://github.com/onatakca/football-data-ai-app", // Placeholder
        icon: Activity
    },
    {
        title: "AI Attractiveness Rater",
        description: "Computer Vision application analyzing facial geometry (Golden Ratio, Symmetry) using dlib's 68-point landmark detection. Applies geometric algorithms rather than black-box deep learning to compute scores.",
        techStack: ["Python", "dlib", "OpenCV", "NumPy", "Computer Vision"],
        link: "https://onatakca.github.io/face-rater",
        github: "https://github.com/onatakca/face-rater",
        icon: Users
    },
    {
        title: "Serverless Daily News Bot",
        description: "Automated news aggregator using Google Gemini LLM to summarize articles into a daily digest. Uses GitHub Actions for a 'serverless' architecture that runs on a schedule without a dedicated backend.",
        techStack: ["Python", "Google Gemini API", "GitHub Actions", "SMTP"],
        link: "https://github.com/onatakca/serverless-news-etl",
        github: "https://github.com/onatakca/serverless-news-etl",
        icon: Globe
    },
    {
        title: "Dutch Learning App",
        description: "EdTech tool that programmatically fetches and parses lessons from Wikibooks. Converts unstructured web text into structured JSON data for a React frontend.",
        techStack: ["JavaScript", "Wikibooks API", "Regex", "Data Parsing"],
        link: "https://onatakca.github.io/dutch-learning-app",
        github: "https://github.com/onatakca/dutch-learning-app",
        icon: FileText
    }
];

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
        >
            <div className="mb-12 border-b border-white/10 pb-4">
                <h2 className="text-4xl font-bold text-white">Selected Work</h2>
                <p className="text-textMuted mt-2">
                    Showcasing applied AI, data engineering pipelines, and full-stack builds.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => {
                    const Icon = project.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="group relative bg-surface rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 flex flex-col h-full"
                        >
                            {/* Subtle Gradient Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank" rel="noopener noreferrer"
                                        className="text-textMuted hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                                        aria-label="View Source"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank" rel="noopener noreferrer"
                                        className="text-textMuted hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full"
                                        aria-label="View Project"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors relative z-10">{project.title}</h3>

                            <p className="text-textMuted mb-6 leading-relaxed relative z-10 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 text-textMuted text-xs font-medium rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Projects;
