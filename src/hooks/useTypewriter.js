import React, { useState, useEffect } from 'react';



// ... Wait, a multi-phrase deleter is complex. Let's write a robust hook-based one.

const useTypewriter = (phrases, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeedState(isDeleting ? deletingSpeed : typingSpeed);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeedState);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, phrases, typingSpeedState, pauseDuration]);

    return text;
};

export default useTypewriter;
