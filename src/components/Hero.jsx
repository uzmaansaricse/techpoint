import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Shield } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -50]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-light pt-32 pb-20">
            {/* Background Decoration */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Subtle Gold Mesh Gradient */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-radial from-gold/5 to-transparent blur-3xl opacity-60" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-gold/5 to-transparent blur-3xl opacity-40" />

                {/* Diagonal Lines Background */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="#D4AF37" strokeWidth="1" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    style={{ y: y1, opacity }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left space-y-8"
                >
                    <div className="inline-block relative">
                        <span className="font-cursive text-5xl text-accent transform -rotate-3 inline-block mb-2">
                            Elevate your Brand
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-display font-bold text-primary leading-[1.1] tracking-tight">
                        Crafting Digital <br />
                        <span className="text-primary">Excellence</span>
                    </h1>

                    <p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed font-light">
                        We blend aesthetic elegance with powerful technology to build premium digital experiences for forward-thinking enterprises.
                    </p>

                    <div className="flex flex-wrap gap-5 pt-4">
                        <Link to="/contact" className="group px-8 py-4 bg-accent text-white font-bold tracking-widest uppercase text-sm shadow-gold hover:translate-y-[-2px] hover:bg-yellow-600 transition-all duration-300 rounded-none flex items-center gap-2">
                            Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link to="/top-projects" className="px-8 py-4 bg-white text-primary border border-gray-200 font-bold tracking-widest uppercase text-sm hover:border-accent hover:text-accent transition-all duration-300 rounded-none shadow-sm">
                            View Portfolio
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center gap-8 pt-12 mt-4 opacity-90">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Star className="w-5 h-5 text-accent fill-accent" />
                            <span className="text-sm font-semibold">5-Star Rated</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Award className="w-5 h-5 text-accent" />
                            <span className="text-sm font-semibold">Award Winning</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Shield className="w-5 h-5 text-accent" />
                            <span className="text-sm font-semibold">Secure & Scalable</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual / Image (Arch Design) */}
                <motion.div
                    style={{ y: y2 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block h-[700px] w-full"
                >
                    {/* Arch Background Decoration (Separate from Card) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[480px] h-[640px] bg-white rounded-t-[240px] border border-gray-100/50 z-0 opacity-60">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white/80"></div>
                        {/* Floating Gold Circle Decoration Behind Card */}
                        <div className="absolute top-[30%] right-[-20px] w-48 h-48 rounded-full border border-accent/20 bg-gradient-radial from-accent/5 to-transparent blur-sm"></div>
                    </div>

                    {/* Full Border "Client Satisfaction" Card (Floating on Top) */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                        {/* The Frame (White Outline + Thin Border) */}
                        <div className="relative w-[380px] h-[520px] bg-white p-4 shadow-2xl border border-gray-900 rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">

                            {/* Inner Dark Card */}
                            <div className="w-full h-full bg-primary relative overflow-hidden flex flex-col items-center justify-center text-center p-8">
                                {/* Noise Texture Overlay */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                    <span className="font-cursive text-8xl text-accent mb-6">100%</span>

                                    <div className="w-full h-px bg-white/10 max-w-[200px] mb-8"></div>

                                    <h3 className="text-2xl font-display tracking-[0.2em] text-white uppercase mb-6">
                                        Client Satisfaction
                                    </h3>

                                    <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
                                        Our commitment to excellence ensures every project exceeds expectations.
                                    </p>
                                </div>

                                {/* Inner Border Effect */}
                                <div className="absolute inset-3 border border-white/5 pointer-events-none"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Background Circle Stroke */}
                    <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] border border-gray-200 rounded-full opacity-40 animate-pulse"></div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
