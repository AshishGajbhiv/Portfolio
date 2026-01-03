import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="order-2 md:order-1 text-center md:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-cyan-400 font-medium tracking-wide text-lg mb-4">
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Ashish Gajbhiv
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-neutral-400 mb-8 font-light">
                            Frontend Developer
                        </h3>
                        <p className="text-neutral-400 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed mb-10">
                            I build exceptional digital experiences with modern technologies.
                            focused on creating intuitive and dynamic user interfaces.
                        </p>

                        <motion.div
                            className="flex gap-4 justify-center md:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors duration-300"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex gap-6 mt-12 justify-center md:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            {[
                                { Icon: FaGithub, href: "https://github.com/AshishGajbhiv", color: "hover:text-white" },
                                { Icon: FaLinkedin, href: "www.linkedin.com/in/ashish-gajbhiv-614019253", color: "hover:text-cyan-400" },
                                { Icon: FaInstagram, href: "https://instagram.com", color: "hover:text-pink-500" },
                                { Icon: FaXTwitter, href: "https://x.com/ashish__2802", color: "hover:text-black-500" }



                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 text-neutral-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
                                >
                                    <social.Icon size={24} />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    className="order-1 md:order-2 flex justify-center z-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative">
                        {/* Decorative glowing ring */}
                        <motion.div
                            className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-600 opacity-70 blur-lg"
                            animate={{
                                scale: [0.7, 1, 0.7],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        ></motion.div>

                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neutral-900 shadow-2xl">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
