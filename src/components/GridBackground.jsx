import React, { useState, useEffect } from 'react';

const GridBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className="fixed left-0 top-0 z-0 h-full w-full bg-black">
            {/* Base Grid - darker, subtle */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:15px_15px] opacity-20"></div>
        </div>
    );
};

export default GridBackground;
