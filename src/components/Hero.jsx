import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Globe, Zap } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark pt-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 w-full h-full">
                {/* Gradient Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-blob" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    style={{ y: y1, opacity }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                        <span className="text-gray-300 text-sm font-medium tracking-wide">Ready to innovate</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                        Transform Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-400">Digital Vision</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                        We build premium digital experiences that empower startups and enterprises.
                        From robust web apps to seamless mobile solutions, we bring your ideas to life.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link to="/contact" className="group relative px-8 py-3 bg-accent text-primary font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </Link>

                        <Link to="/top-projects" className="px-8 py-3 bg-white/5 text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm">
                            View Work
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-8">
                        <div>
                            <div className="text-3xl font-bold text-white">50+</div>
                            <div className="text-sm text-gray-500">Projects Done</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">98%</div>
                            <div className="text-sm text-gray-500">Client Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">24/7</div>
                            <div className="text-sm text-gray-500">Support</div>
                        </div>
                    </div>
                </motion.div>

                {/* 3D Visuals / Floating Elements */}
                <motion.div
                    style={{ y: y2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block h-[600px] w-full"
                >
                    {/* Main Floating Card */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 flex flex-col justify-between z-20"
                    >
                        <div className="space-y-4">
                            <div className="h-2 w-20 bg-accent/50 rounded-full" />
                            <div className="h-32 w-full bg-black/20 rounded-lg animate-pulse" />
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-white/10 rounded-full" />
                                <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent"><Code size={16} /></div>
                            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400"><Zap size={16} /></div>
                        </div>
                    </motion.div>

                    {/* Floating Icons/Elements around */}
                    <motion.div
                        animate={{ y: [0, 30, 0], x: [0, -10, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-20 right-10 p-4 bg-primary/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl z-30"
                    >
                        <Database className="w-8 h-8 text-accent" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-32 left-0 p-4 bg-primary/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl z-10"
                    >
                        <Globe className="w-8 h-8 text-indigo-400" />
                    </motion.div>

                    {/* Decorative Rings */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full z-0" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full z-0" />

                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            >
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent to-transparent"></div>
            </motion.div>

        </section>
    );
};

export default Hero;
