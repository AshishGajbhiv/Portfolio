import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    // Generate random dots for scattering effect
    const dots = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
    }));

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.2 } }}
        >
            {/* Background Dots that will scatter */}
            {dots.map((dot) => (
                <motion.div
                    key={dot.id}
                    className="absolute bg-white rounded-full opacity-30"
                    style={{
                        left: dot.x,
                        top: dot.y,
                        width: Math.random() * 3 + 1,
                        height: Math.random() * 3 + 1
                    }}
                    initial={{ scale: 1, x: 0, y: 0 }}
                    exit={{
                        x: (Math.random() - 0.5) * 500, // Scatter X
                        y: (Math.random() - 0.5) * 500, // Scatter Y
                        opacity: 0,
                        scale: 0
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            ))}

            <motion.div
                className="relative z-10 flex flex-col items-center"
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            >
                <motion.div
                    className="w-24 h-24 mb-8 border-4 border-cyan-500/30 rounded-full flex items-center justify-center relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Rotating ring */}
                    <motion.div
                        className="absolute inset-0 border-t-4 border-cyan-500 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    ></motion.div>

                    {/* Inner pulsing dot */}
                    <motion.div
                        className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.div>
                </motion.div>

                <motion.h2
                    className="text-2xl font-bold text-white tracking-widest"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    LOADING
                </motion.h2>

                {/* Optional progress bar */}
                <motion.div
                    className="w-48 h-1 bg-neutral-800 mt-6 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <motion.div
                        className="h-full bg-cyan-500"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        onAnimationComplete={onComplete}
                    ></motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
