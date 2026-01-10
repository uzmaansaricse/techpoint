import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block group">
                            <div className="text-3xl font-display font-bold tracking-widest text-white transition-colors">
                                TECH<span className="text-accent font-serif italic">Point</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm max-w-xs font-light">
                            Elevating brands through premium digital craftsmanship. We build platforms that define industries.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 group">
                                    <Icon size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent">Explore</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                                        <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-4"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent">Expertise</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'Mobile Apps', 'E-commerce', 'UI/UX Design', 'SEO Optimization'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-slate-400 hover:text-white transition-colors text-sm hover:pl-2 duration-300 block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-accent">Stay Updated</h4>
                        <p className="text-slate-400 mb-6 text-sm font-light">Join our exclusive network for the latest insights.</p>
                        <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input type="email" placeholder="Email Address" className="w-full bg-white/5 text-white px-5 py-3 rounded-none border-b border-white/10 focus:border-accent focus:outline-none transition-all placeholder:text-slate-600 text-sm" />
                            </div>
                            <button type="submit" className="self-start text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors flex items-center gap-2 group">
                                Subscribe <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs tracking-wide">
                        &copy; {new Date().getFullYear()} TechPoint. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500 uppercase tracking-wider">
                        <a href="#" className="hover:text-accent transition-colors">Privacy</a>
                        <a href="#" className="hover:text-accent transition-colors">Terms</a>
                        <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
