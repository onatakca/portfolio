import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Code2, User, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const FloatingDock = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'hero', icon: Home, label: 'Home' },
        { id: 'projects', icon: Code2, label: 'Work' },
        { id: 'experience', icon: Briefcase, label: 'Exp' },
        { id: 'about', icon: User, label: 'About' },
    ];

    return (
        <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
            <div className="flex items-center gap-1.5 p-2 bg-light-bg/80 dark:bg-dark-surface/80 backdrop-blur-xl border border-light-border dark:border-dark-border rounded-full shadow-2xl shadow-black/10">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="relative p-3 rounded-full text-light-textMuted dark:text-dark-textMuted hover:bg-light-surface dark:hover:bg-white/10 hover:text-light-text dark:hover:text-dark-text transition-all group"
                        aria-label={item.label}
                    >
                        <item.icon className="w-5 h-5" strokeWidth={2} />
                        {/* Tooltip */}
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark-bg/90 dark:bg-light-bg/90 text-dark-text dark:text-light-text text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {item.label}
                        </span>
                    </button>
                ))}

                {/* Divider */}
                <div className="w-px h-6 bg-light-border dark:bg-dark-border mx-1" />

                <button
                    onClick={toggleTheme}
                    className="p-3 rounded-full text-light-textMuted dark:text-dark-textMuted hover:bg-light-surface dark:hover:bg-white/10 hover:text-accent transition-all"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>
        </div>
    );
};

export default FloatingDock;
