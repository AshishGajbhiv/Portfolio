import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image or Graphical Element */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative p-8 bg-neutral-900 ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start space-x-6">
                                {/* Placeholder for code snippet or image */}
                                <div className="text-left font-mono text-sm text-neutral-300 pointer-events-none select-none">
                                    <p><span className="text-purple-400">const</span> <span className="text-yellow-400">developer</span> = &#123;</p>
                                    <p className="pl-4">name: <span className="text-green-400">'Ashish'</span>,</p>
                                    <p className="pl-4">passion: <span className="text-green-400">'Building infinite possibilities'</span>,</p>
                                    <p className="pl-4">stack: [<span className="text-green-400">'HTML'</span>, <span className="text-green-400">'CSS'</span>, <span className="text-green-400">'JS'</span> <span className="text-green-400">'React'</span>],</p>
                                    <p className="pl-4">hardWorker: <span className="text-cyan-400">true</span>,</p>
                                    <p className="pl-4">problemSolver: <span className="text-cyan-400">true</span></p>
                                    <p>&#125;;</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-neutral-300 space-y-6 text-lg leading-relaxed text-justify md:text-left"
                    >
                        <p>
                            I am a passionate <span className="text-cyan-400 font-semibold">Frontend Developer</span> with a knack for creating visually stunning and highly functional web applications. My journey in tech is driven by curiosity and a desire to build things that make a difference.
                        </p>
                        <p>
                            With a strong foundation in <span className="text-white">React.js</span> and modern CSS frameworks like <span className="text-white">Tailwind</span>, I specialize in translating design concepts into seamless user experiences. I believe in clean code, performance optimization, and continuous learning.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or refining my design sensibilities.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
