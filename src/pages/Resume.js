import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Senior Data Engineer",
        company: "Tech Corp",
        period: "2021 - Present",
        description: "Leading the data infrastructure team. Designed and implemented scalable ETL pipelines processing terabytes of data. Mentoring junior engineers and establishing best practices."
    },
    {
        role: "Data Engineer",
        company: "Startup Inc",
        period: "2019 - 2021",
        description: "Built the initial data warehouse using Snowflake and dbt. Automated reporting processes reducing manual work by 80%."
    },
    {
        role: "Junior Data Analyst",
        company: "Big Data Co",
        period: "2018 - 2019",
        description: "Analyzed customer behavior data using SQL and Python. Created interactive dashboards using Tableau."
    }
];

const education = [
    {
        degree: "Master of Science in Data Science",
        school: "University of Technology",
        period: "2018"
    },
    {
        degree: "Bachelor of Science in Computer Science",
        school: "State University",
        period: "2016"
    }
];

const ResumeItem = ({ data }) => (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-12 relative">
        <div className="md:w-1/4 flex-shrink-0">
            <span className="text-primary/80 font-medium text-sm md:text-base tracking-wider uppercase">{data.period}</span>
        </div>
        <div className="md:w-3/4 relative pb-12 border-l border-white/10 pl-8 md:pl-12 last:border-0 last:pb-0">
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background"></div>
            <h3 className="text-xl font-bold text-white mb-1">{data.role || data.degree}</h3>
            <div className="text-textMuted font-medium mb-4">{data.company || data.school}</div>
            {data.description && <p className="text-textMuted leading-relaxed">{data.description}</p>}
        </div>
    </div>
);

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
        >
            <div className="mb-20">
                <h2 className="text-3xl font-bold mb-12 text-white border-b border-white/10 pb-4 inline-block">Experience</h2>
                {experiences.map((exp, index) => (
                    <ResumeItem key={index} data={exp} />
                ))}
            </div>

            <div>
                <h2 className="text-3xl font-bold mb-12 text-white border-b border-white/10 pb-4 inline-block">Education</h2>
                {education.map((edu, index) => (
                    <ResumeItem key={index} data={edu} />
                ))}
            </div>
        </motion.div>
    );
};

export default Resume;
