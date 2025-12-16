import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Cloud, Code2, Terminal, Cpu } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, x, y, size = "w-12 h-12" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
                x: [0, 10, 0]
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
            className={`absolute ${x} ${y} ${size} text-primary/20 pointer-events-none z-0`}
        >
            <Icon className="w-full h-full" />
        </motion.div>
    );
};

const BackgroundIcons = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <FloatingIcon icon={Database} delay={0} x="left-[10%]" y="top-[20%]" />
            <FloatingIcon icon={Server} delay={2} x="right-[15%]" y="top-[15%]" size="w-16 h-16" />
            <FloatingIcon icon={Cloud} delay={1} x="left-[20%]" y="bottom-[20%]" size="w-20 h-20" />
            <FloatingIcon icon={Code2} delay={3} x="right-[10%]" y="bottom-[30%]" />
            <FloatingIcon icon={Terminal} delay={4} x="left-[5%]" y="top-[60%]" size="w-10 h-10" />
            <FloatingIcon icon={Cpu} delay={5} x="right-[25%]" y="top-[40%]" />
        </div>
    );
};

export default BackgroundIcons;
