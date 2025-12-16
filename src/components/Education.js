import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
    {
        school: "University of Twente",
        location: "Enschede, Netherlands",
        degree: "Master of Science in Computer Science",
        period: "Aug. 2024 – Present",
        details: [
            "Specialization in Data Science and Machine Learning",
            "Focusing on advanced AI methodologies and their application."
        ]
    },
    {
        school: "University of Illinois Urbana-Champaign",
        location: "Champaign, IL",
        degree: "Bachelor of Science in Computer Science",
        period: "Aug. 2019 – May 2023",
        details: [
            "Graduated with High Honors",
            "Coursework: Algorithms, Database Systems, Artificial Intelligence, Applied Machine Learning"
        ]
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
            <div className="mb-16 md:mb-24 flex items-end justify-between border-b border-light-border dark:border-dark-border pb-6">
                <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text tracking-tight">Education</h2>
                <span className="text-light-textMuted dark:text-dark-textMuted font-mono text-xs hidden md:block">01.5 — EDUCATION</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* Vertical Line for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20 -translate-x-1/2" />

                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className={`relative flex flex-col gap-4 p-8 rounded-2xl bg-light-surface dark:bg-dark-surface border border-transparent hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-accent/10 ${index % 2 === 0 ? "md:text-right md:items-end" : "md:text-left md:items-start"
                            } ${index === 1 ? "md:col-start-2 md:row-start-2" : ""}`}
                    >
                        {/* Connector Dot */}
                        <div className={`hidden md:block absolute top-10 w-4 h-4 rounded-full bg-accent border-4 border-dark-bg z-10 ${index % 2 === 0 ? "-right-[25px]" : "-left-[25px]"
                            }`} />

                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase flex items-center gap-2 md:justify-end">
                                {index % 2 !== 0 && <Calendar className="w-3 h-3" />}
                                {edu.period}
                                {index % 2 === 0 && <Calendar className="w-3 h-3" />}
                            </span>
                            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text leading-tight">{edu.school}</h3>
                            <span className="text-sm text-light-textMuted dark:text-dark-textMuted flex items-center gap-1 md:justify-end">
                                <GraduationCap className="w-4 h-4" /> {edu.degree}
                            </span>
                        </div>

                        <p className="text-sm text-light-textMuted dark:text-dark-textMuted italic">{edu.location}</p>

                        <ul className={`mt-2 space-y-2 text-sm text-light-textMuted dark:text-dark-textMuted/80 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                            }`}>
                            {edu.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
