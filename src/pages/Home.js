import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Brain, GitBranch, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import headshot from '../assets/images/headshot.png';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">

                {/* Left Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col text-left space-y-8 order-2 md:order-1"
                >
                    <div>
                        <span className="text-primary font-medium tracking-wider uppercase mb-4 block">
                            Hello, I'm
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Onat Akca
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-textMuted font-light">
                            Computer Science Student <br />
                            <span className="text-white font-medium">Building Intelligent Systems</span>
                        </h2>
                    </div>

                    <p className="text-lg text-textMuted leading-relaxed max-w-lg">
                        I build the full lifecycle of data-driven applications.
                        From engineering robust pipelines and backend architecture to integrating modern AI models.
                        Focused on scalable, real-world solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primaryHover transition-all duration-300 shadow-lg shadow-blue-900/20"
                        >
                            See My Work
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        <a
                            href="https://github.com/onatakca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/10 hover:border-white/30 text-textMuted hover:text-white transition-all bg-white/5"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-6 h-6" />
                        </a>

                        <a
                            href="https://linkedin.com/in/onatakca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/10 hover:border-white/30 text-textMuted hover:text-white transition-all bg-white/5"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>

                    {/* Mini Tech Stack Indicators - Bento Style */}
                    <div className="pt-8">
                        <p className="text-sm text-textMuted uppercase tracking-wider mb-4 font-semibold">Technologies</p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                <Brain className="w-6 h-6 text-primary mb-2" />
                                <span className="text-sm font-medium">PyTorch</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                <Terminal className="w-6 h-6 text-primary mb-2" />
                                <span className="text-sm font-medium">Python</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                <GitBranch className="w-6 h-6 text-primary mb-2" />
                                <span className="text-sm font-medium">DevOps</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Headshot / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative order-1 md:order-2 flex justify-center md:justify-end"
                >
                    {/* Decorative Glow */}
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform translate-y-10 scale-75 pointer-events-none"></div>

                    {/* Image Container */}
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface group">
                        <img src={headshot} alt="My Headshot" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Home;
