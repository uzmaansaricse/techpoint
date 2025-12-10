import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-24 pb-12 border-t border-slate-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-3 mb-5 group">
                            <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white/5 shadow-md">
                                <img src="/logo.jpeg" alt="AgencyX logo" loading="lazy" className="w-full h-full object-contain" />
                            </div>
                            {/* <span className="text-lg font-semibold tracking-tight text-white">AgencyX</span> */}
                        </Link>
                        <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                            We help brands grow and thrive in the digital era through product design, engineering and marketing.
                        </p>
                        <div className="flex items-center gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all transform hover:-translate-y-0.5 text-slate-300 shadow-sm">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 font-display">Quick Links</h4>
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
                        <h4 className="text-lg font-semibold mb-6 font-display">Services</h4>
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
                        <h4 className="text-lg font-semibold mb-6 font-display">Newsletter</h4>
                        <p className="text-slate-300 mb-4 text-sm">Subscribe to our newsletter to get product updates and design tips.</p>
                        <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email" className="bg-slate-800/40 text-white px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-slate-400" />
                            <button type="submit" className="bg-gradient-to-r from-accent to-blue-600 text-white px-4 py-3 rounded-lg font-semibold transition-transform shadow-md hover:-translate-y-0.5">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()}  All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
