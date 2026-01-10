import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Texture & Decoration */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">

                {/* Large Decorative Callout */}
                <div className="mb-24 text-center relative">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-cursive text-white/[0.03] select-none whitespace-nowrap pointer-events-none">
                        TechPoint
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's Build Something <br /> <span className="font-serif italic text-accent">Extraordinary</span></h2>
                    <Link to="/contact" className="inline-block border-b border-gold text-gold hover:text-white hover:border-white transition-all pb-1 text-sm font-bold uppercase tracking-widest">
                        Start a Project
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block group">
                            <div className="text-3xl font-display font-bold tracking-widest text-white transition-colors">
                                TECH<span className="text-accent font-serif italic">Point</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm max-w-xs font-light font-serif">
                            Elevating brands through premium digital craftsmanship. We build platforms that define industries.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-primary transition-all duration-300 group shadow-lg shadow-black/20">
                                    <Icon size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-medium italic text-accent mb-8 relative inline-block">
                            Explore
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-gold/50"></span>
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400 font-light">
                            <li><Link to="/about" className="hover:text-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>About Us</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>Services</Link></li>
                            <li><Link to="/top-projects" className="hover:text-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>Portfolio</Link></li>
                            <li><Link to="/career" className="hover:text-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-serif font-medium italic text-accent mb-8 relative inline-block">
                            Expertise
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-gold/50"></span>
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400 font-light">
                            <li><Link to="/services" className="hover:text-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>Web Development</Link></li>
                            <li><Link to="/app-development" className="hover:text-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>App Development</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>UI/UX Design</Link></li>
                            <li><Link to="/ecommerce" className="hover:text-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300"></span>Ecommerce</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-serif font-medium italic text-accent mb-8 relative inline-block">
                            Visit Us
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[1px] bg-gold/50"></span>
                        </h4>
                        <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 font-sans">
                            Udyog Vihar Phase 4,<br />
                            Gurugram, India 122015
                        </p>
                        <div className="text-slate-400 text-sm font-light space-y-2">
                            <a href="tel:+919876543210" className="block hover:text-gold transition-colors">+91 98765 43210</a>
                            <a href="mailto:hello@techpoint.in" className="block hover:text-gold transition-colors">hello@techpoint.in</a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs tracking-wide font-light">
                        &copy; {new Date().getFullYear()} TechPoint India. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs text-slate-500 uppercase tracking-wider">
                        <a href="#" className="hover:text-gold transition-colors relative group">
                            Privacy
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#" className="hover:text-gold transition-colors relative group">
                            Terms
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#" className="hover:text-gold transition-colors relative group">
                            Sitemap
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
