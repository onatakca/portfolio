import React from 'react';
import { Home, Briefcase, Code2, User, Moon, Sun, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SideDock = () => {
    const { theme, toggleTheme } = useTheme();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'hero', icon: Home, label: 'Home' },
        { id: 'education', icon: GraduationCap, label: 'Edu' },
        { id: 'projects', icon: Code2, label: 'Work' },
        { id: 'experience', icon: Briefcase, label: 'Exp' },
        { id: 'about', icon: User, label: 'About' },
    ];

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 items-center hidden md:flex">
            {/* Navigation Icons */}
            <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="group relative p-3 text-light-textMuted dark:text-dark-textMuted hover:text-accent-secondary transition-all duration-300"
                        aria-label={item.label}
                    >
                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />

                        {/* Minimal Label Tooltip (Appears on Left) */}
                        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 text-xs font-medium tracking-widest uppercase text-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Separator Line */}
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-light-border dark:via-dark-border to-transparent opacity-50" />

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="group relative p-3 text-light-textMuted dark:text-dark-textMuted hover:text-light-text dark:hover:text-dark-text transition-colors"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? (
                    <Sun className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" strokeWidth={1.5} />
                ) : (
                    <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500" strokeWidth={1.5} />
                )}
            </button>
        </div>
    );
};

export default SideDock;
