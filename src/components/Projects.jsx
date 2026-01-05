import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Racing Event Management System",
        description: "Built a web-based system to manage go-kart racing event registrations and admin operations.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        github: "https://github.com/AshishGajbhiv/Gokart-Website",
        color: "from-indigo-500/30 to-purple-500/30",
        colSpan: "md:col-span-1 md:row-span-1",
        live: "https://github.com/AshishGajbhiv/Gokart-Website"
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "A modern frontend developer portfolio highlighting my skills, projects, and love for intuitive UI design.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        github: "https://github.com/AshishGajbhiv/Portfolio",
        color: "from-cyan-500/30 to-blue-500/30",
        colSpan: "md:col-span-1 md:row-span-1",
        live: "https://AshishGajbhiv.github.io/Portfolio"
    },
    {
        id: 3,
        title: "Weather App",
        description: "A responsive weather app built with React and Tailwind CSS.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        github: "https://github.com/AshishGajbhiv/Weather",
        color: "from-emerald-500/30 to-teal-500/30",
        colSpan: "md:col-span-1 md:row-span-1",
        live: "https://ashishgajbhiv.github.io/Weather/"
    },
    {
        id: 4,
        title: "Advance To-Do Website",
        description: "A smart, visually immersive to-do app that helps you focus, track effort, and build consistent productivity.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        github: "https://github.com/AshishGajbhiv/Advance-todo",
        color: "from-orange-500/30 to-red-500/30",
        colSpan: "md:col-span-2 md:row-span-1",
        live: "https://ashishgajbhiv.github.io/Advance-todo/"
    },
    {
        id: 5,
        title: "Portfolio Builder",
        description: "A simple and stylish portfolio builder that lets developers showcase their work in minutes.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        github: "https://github.com/AshishGajbhiv/Portfolio-builder",
        color: "from-pink-500/30 to-rose-500/30",
        colSpan: "md:col-span-1 md:row-span-1",
        live: "https://ashishgajbhiv.github.io/Portfolio-builder/"
    },
    {
        id: 6,
        title: "Image to Pdf Converter",
        description: "Convert multiple images into one PDF in a single click.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "jspdf", "dnd-kit"],
        github: "https://github.com/AshishGajbhiv/image-to-pdf",
        color: "from-pink-500/30 to-rose-500/30",
        colSpan: "md:col-span-1 md:row-span-1",
        live: "https://ashishgajbhiv.github.io/image-to-pdf/"
    },
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ y: -5 }}
            className={`group relative rounded-2xl p-6 border border-white/10 overflow-hidden flex flex-col justify-between ${project.colSpan} bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300`}
        >
            {/* Subtle Gradient Glow */}
            <div className={`absolute -right-10 -top-10 w-48 h-48 bg-gradient-to-br ${project.color} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full pointer-events-none`}></div>

            <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-medium uppercase tracking-wider text-neutral-300 bg-neutral-800/50 px-2 py-1 rounded border border-neutral-700">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                    <FaGithub size={20} />
                </a>
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                    VIEW LIVE <FaArrowRight size={10} />
                </a>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Selected Works</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    <p className="text-neutral-400 max-w-xl mx-auto text-sm">
                        Compact showcase of my recent engineering projects.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
