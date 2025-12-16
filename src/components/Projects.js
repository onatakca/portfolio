import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Football Data AI",
        category: "Data Engineering",
        description: "A comprehensive ETL system indexing the Turkish Super Lig. Handles API rate limits, complex relationship mapping, and builds a historical dataset for predictive modeling.",
        tech: ["Python", "SQLAlchemy", "Pandas"],
        github: "https://github.com/onatakca/football-data-ai-app",
        link: "#"
    },
    {
        title: "Face Rater AI",
        category: "Computer Vision",
        description: "Algorithmic analysis of facial geometry using dlib's 68-point landmark detection. Computes attractiveness scores based on Golden Ratio mathematics rather than black-box models.",
        tech: ["Python", "dlib", "OpenCV"],
        github: "https://github.com/onatakca/face-rater",
        link: "#"
    },
    {
        title: "News Bot",
        category: "Automation",
        description: "Serverless data pipeline that aggregates news, summarizes it via Google Gemini LLM, and dispatches daily digests. Runs entirely on GitHub Actions.",
        tech: ["Gemini API", "GitHub Actions", "SMTP"],
        github: "https://github.com/onatakca/serverless-news-etl",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
            <div className="mb-16 md:mb-24 flex items-end justify-between border-b border-light-border dark:border-dark-border pb-6">
                <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text tracking-tight">Selected Work</h2>
                <span className="text-light-textMuted dark:text-dark-textMuted font-mono text-xs hidden md:block">01 — PROJECTS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group flex flex-col justify-between h-full p-8 bg-light-surface dark:bg-dark-surface rounded-2xl border border-transparent hover:border-accent-secondary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 dark:hover:shadow-accent/10"
                    >
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-mono font-bold text-accent-secondary uppercase tracking-wider">{project.category}</span>
                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.github} className="text-light-textMuted dark:text-dark-textMuted hover:text-accent transition-colors duration-300 translate-y-2 group-hover:translate-y-0 transform"><Github className="w-5 h-5" /></a>
                                    <a href={project.link} className="text-light-textMuted dark:text-dark-textMuted hover:text-accent transition-colors duration-300 translate-y-2 group-hover:translate-y-0 transform delay-75"><ArrowUpRight className="w-5 h-5" /></a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                            <p className="text-light-textMuted dark:text-dark-textMuted leading-relaxed text-sm mb-8">
                                {project.description}
                            </p>
                        </div>

                        <div className="pt-6 border-t border-light-border/50 dark:border-dark-border/50">
                            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-light-textMuted dark:text-dark-textMuted/60">
                                {project.tech.map(t => <li key={t}>{t}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
