import React from 'react';
import { ArrowRight, Globe, Smartphone, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-36 overflow-hidden min-h-screen flex items-center bg-white">

            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-[480px] h-[480px] bg-accent/25 rounded-full blur-[110px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28 grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <div className="text-center lg:text-left z-10 animate-fade-in">
                    <span className="inline-block py-2 px-4 rounded-full bg-blue-50 border border-blue-100 text-accent text-sm font-semibold mb-8 tracking-wide shadow-sm">
                        PREMIUM WEB & APP DEVELOPMENT
                    </span>

                    <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-primary leading-[1.15] mb-8">
                        Crafting Digital <br />
                        <span className="text-gradient">Masterpieces</span>
                    </h1>

                    <p className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-90">
                        I build high-performance websites, e-commerce stores, and mobile apps that drive growth.
                        Elevate your brand with award-winning design and modern technology.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-primary text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Start Your Project
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to="/portfolio"
                            className="px-8 py-4 bg-white text-primary border border-gray-200 hover:border-accent hover:text-accent font-semibold rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </div>

                {/* 3D Visual Cards */}
                <div className="relative hidden lg:block h-[640px]">

                    {/* Main Structure */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">

                        {/* Main Floating Card */}
                        <div
                            className="absolute top-8 left-12 w-72 h-80 glass-panel rounded-3xl p-7 transform -rotate-6 animate-float shadow-2xl backdrop-blur-md bg-white/20 border border-white/30"
                            style={{ animationDelay: "0s" }}
                        >
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-accent mb-5 shadow-inner">
                                <Globe size={26} />
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-2">Web Development</h3>
                            <p className="text-sm text-secondary leading-relaxed">
                                Modern, SEO-optimized websites built with React & Tailwind.
                            </p>

                            <div className="mt-7 h-20 bg-gray-50 rounded-xl p-2 grid grid-cols-2 gap-2 border border-gray-100">
                                <div className="bg-gray-200 rounded-xl"></div>
                                <div className="bg-gray-200 rounded-xl"></div>
                            </div>
                        </div>

                        {/* Secondary Floating Card */}
                        <div
                            className="absolute top-44 right-12 w-64 h-72 glass-panel rounded-3xl p-7 transform rotate-3 animate-float shadow-xl backdrop-blur-md bg-white/20 border border-white/30"
                            style={{ animationDelay: "1s" }}
                        >
                            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-5 shadow-inner">
                                <Smartphone size={26} />
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-2">App Development</h3>
                            <p className="text-sm text-secondary leading-relaxed">
                                iOS & Android apps with smooth performance.
                            </p>
                        </div>

                        {/* Third Floating Card */}
                        <div
                            className="absolute bottom-20 left-20 w-64 h-64 glass-panel rounded-3xl p-7 transform -rotate-3 animate-float shadow-xl backdrop-blur-md bg-white/20 border border-white/30"
                            style={{ animationDelay: "2s" }}
                        >
                            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-5 shadow-inner">
                                <ShoppingBag size={26} />
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-2">E-commerce</h3>
                            <p className="text-sm text-secondary leading-relaxed">
                                Scalabale online stores built for conversions.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
