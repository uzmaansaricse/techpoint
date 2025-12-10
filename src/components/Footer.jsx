import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Code2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-6 group">
                            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg text-white">
                                <Code2 size={24} />
                            </div>
                            <span className="text-2xl font-bold font-display tracking-tight text-white">
                                Agency<span className="text-accent">X</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            We are a full-service digital agency dedicated to helping brands grow and succeed in the digital era through innovation and design.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all hover:-translate-y-1 text-slate-400">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-display">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent/50 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-display">Services</h4>
                        <ul className="space-y-3">
                            {['Web Development', 'Mobile Apps', 'E-commerce', 'UI/UX Design', 'SEO Optimization'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-slate-400 hover:text-accent transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 font-display">Newsletter</h4>
                        <p className="text-slate-400 mb-4">Subscribe to our newsletter to get the latest updates and news.</p>
                        <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your Email" className="bg-slate-800/50 text-white px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                            <button type="submit" className="bg-accent hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-accent/50">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-500">
                        &copy; {new Date().getFullYear()} AgencyX. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
