import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
            <div className="mb-16 md:mb-24 flex items-end justify-between border-b border-light-border dark:border-dark-border pb-6">
                <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text tracking-tight">About Me</h2>
                <span className="text-light-textMuted dark:text-dark-textMuted font-mono text-xs hidden md:block">03 — ABOUT</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-light-textMuted dark:text-dark-textMuted leading-loose text-lg mb-6">
                        Hello! I'm Onat, a Software Engineer and Master’s student specializing in Data Science and Machine Learning. My journey started at the
                        <span className="text-accent"> University of Illinois Urbana-Champaign (UIUC)</span>, and I'm currently advancing my expertise at the
                        <span className="text-accent"> University of Twente</span>.
                    </p>
                    <p className="text-light-textMuted dark:text-dark-textMuted leading-loose text-lg">
                        I have a passion for building intelligent systems, from computer vision models for medical imaging to recommendation engines for creative communities. Detail-oriented and research-driven, I enjoy tackling complex problems where AI meets real-world application.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-6">Skills & Technologies</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm text-light-textMuted dark:text-dark-textMuted">
                        <li className="flex items-center"><span className="text-accent mr-2">▹</span> Python</li>
                        <li className="flex items-center"><span className="text-accent mr-2">▹</span> C++</li>
                        <li className="flex items-center"><span className="text-accent mr-2">▹</span> PyTorch / TensorFlow</li>
                        <li className="flex items-center"><span className="text-accent mr-2">▹</span> SQL / NoSQL</li>
                        <li className="flex items-center"><span className="text-accent mr-2">▹</span> Docker / GCP</li>
                        <li className="flex items-center"><span className="text-accent mr-2">▹</span> Computer Vision</li>
                        <li className="flex items-center"><span className="text-accent mr-2">▹</span> Java</li>
                        <li className="flex items-center"><span className="text-accent mr-2">▹</span> Bash / Linux</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
