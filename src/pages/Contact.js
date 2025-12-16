import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col justify-center"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">Let's Connect.</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <a
                    href="mailto:hello@example.com"
                    className="group relative p-10 bg-surface rounded-3xl border border-white/5 hover:border-white/10 hover:bg-surfaceHighlight transition-all duration-300 flex flex-col justify-between h-64 md:h-80"
                >
                    <Mail className="w-12 h-12 text-textMuted group-hover:text-primary transition-colors duration-300" />

                    <div>
                        <div className="flex items-center gap-2 mb-2 text-textMuted font-medium group-hover:text-primary transition-colors">
                            Email
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-2xl font-bold text-white">
                            hello@example.com
                        </div>
                    </div>
                </a>

                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-10 bg-surface rounded-3xl border border-white/5 hover:border-white/10 hover:bg-surfaceHighlight transition-all duration-300 flex flex-col justify-between h-64 md:h-80"
                >
                    <Linkedin className="w-12 h-12 text-textMuted group-hover:text-[#0077b5] transition-colors duration-300" />

                    <div>
                        <div className="flex items-center gap-2 mb-2 text-textMuted font-medium group-hover:text-[#0077b5] transition-colors">
                            LinkedIn
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-2xl font-bold text-white">
                            in/onatakca
                        </div>
                    </div>
                </a>
            </div>
        </motion.div>
    );
};

export default Contact;
