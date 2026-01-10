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

                {/* Geometric Lines */}
                <svg className="absolute top-0 right-0 w-1/3 h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M100 0 L0 100" stroke="#D4AF37" strokeWidth="0.5" />
                    <path d="M100 20 L20 100" stroke="#D4AF37" strokeWidth="0.5" />
                    <path d="M100 40 L40 100" stroke="#D4AF37" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    style={{ y: y1, opacity }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left space-y-6"
                >
                    <div className="inline-block relative">
                        <span className="font-cursive text-4xl text-accent transform -rotate-6 inline-block mb-2">
                            Elevate your Brand
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-primary leading-[1.1]">
                        Crafting Digital <br />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Excellence</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/20 -z-0 skew-x-12 transform"></span>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed font-light">
                        We blend aesthetic elegance with powerful technology to build premium digital experiences for forward-thinking enterprises.
                    </p>

                    <div className="flex flex-wrap gap-5 pt-6">
                        <Link to="/contact" className="group relative px-8 py-4 bg-accent text-white font-bold tracking-widest uppercase text-sm shadow-gold hover:translate-y-[-2px] transition-all duration-300">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link to="/top-projects" className="px-8 py-4 bg-transparent text-primary border border-primary/20 font-bold tracking-widest uppercase text-sm hover:bg-primary hover:text-white transition-all duration-300">
                            View Portfolio
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center gap-8 pt-12 border-t border-primary/5 mt-8 opacity-80">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-accent fill-accent" />
                            <span className="text-sm font-medium text-primary">5-Star Rated</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-accent" />
                            <span className="text-sm font-medium text-primary">Award Winning</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-accent" />
                            <span className="text-sm font-medium text-primary">Secure & Scalable</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual / Image */}
                <motion.div
                    style={{ y: y2 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block h-[700px] w-full"
                >
                    {/* Abstract Abstract Composition */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-white rounded-t-[200px] shadow-2xl border border-gold/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

                        {/* Decorative Circle */}
                        <div className="absolute top-20 right-[-50px] w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>

                        {/* Floating Cards Mockup */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-32 left-10 right-10 bottom-32 bg-white shadow-soft border border-gray-100 p-8 flex flex-col gap-4 rounded-xl"
                        >
                            <div className="w-12 h-12 bg-gray-100 rounded-full mb-4"></div>
                            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-100 rounded w-full mt-4"></div>
                            <div className="h-32 bg-gray-50 rounded w-full mt-4 border border-dashed border-gray-200"></div>
                        </motion.div>
                    </div>

                    {/* Gold Ring */}
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/3 right-10 w-32 h-32 border border-accent rounded-full border-dashed opacity-30"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
