import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Middle East Technical University (METU)",
        role: "Graduate Research Assistant (Computer Vision)",
        period: "Oct 2023 - Present",
        description: [
            "Optimized nnUNetv2 and DeepLabv3 architectures for advanced eyelid gland segmentation, fine-tuning hyperparameters to maximize image analysis efficiency.",
            "Achieved a DICE score of 0.84 for gland segmentation and 0.92 for eyelid segmentation, significantly surpassing existing benchmarks."
        ]
    },
    {
        company: "OpenProcessing.org",
        role: "Software Engineer Intern",
        period: "June 2022 - Aug. 2022",
        description: [
            "Engineered a collaborative filtering recommendation system using Python (Pandas, NumPy) to personalize content for a user base of 100,000+ monthly users.",
            "Authored technical documentation and interactive tutorials for p5.js, facilitating user onboarding for multiplayer game development."
        ]
    },
    {
        company: "University of Illinois Chicago",
        role: "Research Assistant (Deep Learning)",
        period: "May 2022 - Aug. 2022",
        description: [
            "Designed deep neural networks in TensorFlow and Keras to analyze crash survivor datasets, automating the extraction of survival patterns from raw sensor data.",
            "Built automated data preprocessing pipelines in Python to clean and normalize raw datasets, ensuring compatibility with neural network architectures."
        ]
    },
    {
        company: "Cybersoft",
        role: "Android Developer Intern",
        period: "June 2021 - Aug. 2021",
        description: [
            "Implemented in-app voice search functionality using Android Speech-to-Text, enabling hands-free song queries.",
            "Integrated Spotify Web APIs to develop a dynamic music streaming application with real-time playback control."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
            <div className="mb-16 md:mb-24 flex items-end justify-between border-b border-light-border dark:border-dark-border pb-6">
                <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text tracking-tight">Experience</h2>
                <span className="text-light-textMuted dark:text-dark-textMuted font-mono text-xs hidden md:block">02 — EXPERIENCE</span>
            </div>

            <div className="space-y-16">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8"
                    >
                        <div className="md:col-span-1">
                            <span className="font-mono text-xs text-accent-secondary uppercase tracking-wider">{exp.period}</span>
                        </div>
                        <div className="md:col-span-3">
                            <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-1">{exp.role}</h3>
                            <h4 className="text-sm font-medium text-light-textMuted dark:text-dark-textMuted mb-4">{exp.company}</h4>
                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-light-textMuted dark:text-dark-textMuted text-sm leading-relaxed flex items-start">
                                        <span className="mr-2 text-accent">▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
