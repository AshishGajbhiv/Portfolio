import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace these with your actual Service ID, Template ID, and Public Key from EmailJS
        // You can sign up at https://www.emailjs.com/
        emailjs.sendForm('service_52hp5kg', 'template_zrq2b2j', form.current, 's-1g2IlQyDWMlLK4a')
            .then((result) => {
                setStatus('sent');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                setStatus('error');
                console.log(error.text);
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-neutral-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Chat to me</h3>
                                    {/* <p className="text-neutral-400 mb-4">Our friendly team is here to help.</p> */}
                                    <a href="mailto:ashish28gajbhiv@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                                        ashishgajbhiv.dev@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Based in</h3>
                                    <p className="text-neutral-400 mb-4">Come say hello !</p>
                                    <p className="text-white">Chhatrapati Sambhajinagar (Aurangabad), Maharashtra, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 bg-neutral-950/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-neutral-600 transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 bg-neutral-950/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-neutral-600 transition-all"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 bg-neutral-950/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-neutral-600 transition-all resize-none"
                                    placeholder="Leave us a message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'} <FaPaperPlane size={14} />
                            </button>

                            {status === 'sent' && (
                                <p className="text-green-400 text-center text-sm mt-2">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-center text-sm mt-2">Failed to send. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
