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
                        <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm text-slate-400 font-light">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/top-projects" className="hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link to="/career" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Expertise</h4>
                        <ul className="space-y-4 text-sm text-slate-400 font-light">
                            <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">App Development</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">SEO & Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Visit Us</h4>
                        <p className="text-slate-400 text-sm font-light leading-relaxed mb-4">
                            Udyog Vihar Phase 4,<br />
                            Gurugram, India 122015
                        </p>
                        <div className="text-slate-400 text-sm font-light">
                            <p>+91 98765 43210</p>
                            <p>hello@techpoint.in</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs tracking-wide">
                        &copy; {new Date().getFullYear()} TechPoint India. All rights reserved.
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
