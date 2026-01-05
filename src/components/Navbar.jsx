import React, { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-neutral-950/50 border-b border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold text-white tracking-wider cursor-pointer hover:text-cyan-400 transition-colors duration-300">
                            &lt;Ashish/&gt;
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-neutral-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-neutral-800/50"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="resume.pdf"
                                download="Ashish_Resume.pdf"
                                className="flex items-center gap-2 text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400 hover:text-black px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                            >
                                <FaFileDownload size={14} /> Resume
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white transition-colors duration-300"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-neutral-950/90 backdrop-blur-md`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-neutral-800">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-neutral-300 hover:text-white hover:bg-neutral-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-2 px-3 pb-2">
                        <a
                            href="resume.pdf"
                            download="Ashish_Resume.pdf"
                            className="flex items-center justify-center gap-2 w-full text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400 hover:text-black px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaFileDownload size={18} /> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
