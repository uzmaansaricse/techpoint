import React from 'react';
import { ArrowRight, Globe, Smartphone, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left z-10 animate-fade-in">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-accent text-sm font-semibold mb-6 tracking-wide">
                        PREMIUM WEB & APP DEVELOPMENT
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary mb-6 leading-tight">
                        Crafting Digital <br />
                        <span className="text-gradient">Masterpieces</span>
                    </h1>
                    <p className="text-lg text-secondary mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        I build high-performance websites, e-commerce stores, and mobile apps that drive growth. Elevate your brand with award-winning design and modern technology.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-primary text-white font-medium rounded-full transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Start Your Project
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="px-8 py-4 bg-white text-primary border border-gray-200 hover:border-accent hover:text-accent font-medium rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </div>

                {/* 3D Visuals / Glass Cards */}
                <div className="relative hidden lg:block h-[600px]">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                        {/* Main Floating Card */}
                        <div className="absolute top-10 left-10 w-72 h-80 glass-panel rounded-2xl p-6 transform -rotate-6 animate-float z-20" style={{ animationDelay: '0s' }}>
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-accent mb-4">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Web Development</h3>
                            <p className="text-sm text-secondary">Modern, SEO-optimized websites built with React & Tailwind.</p>
                            <div className="mt-6 h-20 bg-gray-50 rounded-lg p-2 gap-2 grid grid-cols-2">
                                <div className="bg-gray-200 rounded h-full w-full"></div>
                                <div className="bg-gray-200 rounded h-full w-full"></div>
                            </div>
                        </div>

                        {/* Secondary Floating Card */}
                        <div className="absolute top-40 right-10 w-64 h-72 glass-panel rounded-2xl p-6 transform rotate-3 animate-float z-10" style={{ animationDelay: '1s' }}>
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">App Development</h3>
                            <p className="text-sm text-secondary">iOS & Android apps with smooth performance.</p>
                        </div>

                        {/* Third Floating Card (E-commerce) */}
                        <div className="absolute bottom-20 left-20 w-64 h-64 glass-panel rounded-2xl p-6 transform -rotate-3 animate-float z-30" style={{ animationDelay: '2s' }}>
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                                <ShoppingBag size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">E-commerce</h3>
                            <p className="text-sm text-secondary">Scalable online stores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
