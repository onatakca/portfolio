import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, BookOpen } from 'lucide-react';
import headshot from '../assets/images/headshot.png';
import useTypewriter from '../hooks/useTypewriter';

const Hero = () => {
    const phrases = [
        "Hi, I'm Onat Akca.",
        "And I love cooking 🥘",
        "model.train()",
        "And I'm addicted to ☕️"
    ];

    const typedText = useTypewriter(phrases, 100, 50, 2000);

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center max-w-5xl mx-auto"
            >
                {/* Headshot - Standard Size */}
                <div className="relative mb-8 group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-accent via-accent-secondary to-accent rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-700" />
                    <img
                        src={headshot}
                        alt="Onat Akca"
                        className="relative w-32 h-32 md:w-44 md:h-44 rounded-full object-cover grayscale brightness-110 contrast-125 border-2 border-transparent group-hover:border-accent-secondary/50 transition-all duration-500 shadow-2xl"
                    />
                </div>

                {/* Tracking Label */}
                <span className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-accent/80 dark:text-accent/90 mb-6 font-semibold">
                    Software Engineer
                </span>

                {/* Big Dynamic Typography */}
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-light-text dark:text-dark-text mb-12 h-20 md:h-28 flex items-center justify-center">
                    <span>{typedText}</span>
                    <span className="ml-1 md:ml-4 w-1 md:w-2 h-8 md:h-16 bg-accent animate-pulse inline-block align-middle" />
                </h1>

                {/* Technical Subtext */}
                <p className="text-lg md:text-xl text-light-textMuted dark:text-dark-textMuted max-w-xl leading-relaxed font-light mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
                    Computer Science Student & Applied AI Engineer. <br />
                    Crafting scalable backend architectures.
                </p>

                {/* Social Links & Resume */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-6 mb-16"
                >
                    <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="Onat_Akca_Resume.pdf" className="flex items-center gap-2 text-light-textMuted dark:text-dark-textMuted hover:text-accent transition-colors duration-300">
                        <FileText className="w-5 h-5" />
                        <span className="text-sm font-medium">Resume</span>
                    </a>
                    <a href="https://github.com/onatakca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-light-textMuted dark:text-dark-textMuted hover:text-accent transition-colors duration-300">
                        <Github className="w-5 h-5" />
                        <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-light-textMuted dark:text-dark-textMuted hover:text-accent transition-colors duration-300">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-sm font-medium">Publications</span>
                    </a>
                    <a href="https://www.linkedin.com/in/onat-akca/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-light-textMuted dark:text-dark-textMuted hover:text-accent transition-colors duration-300">
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                </motion.div>

                {/* Minimal CTA */}
                <motion.button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="group flex flex-col items-center gap-2 text-sm font-medium tracking-widest uppercase text-light-textMuted dark:text-dark-textMuted hover:text-accent transition-colors"
                >
                    Explore
                    <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-accent" />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;
