import React from 'react';
import SEO from '../components/SEO';
import { Mail, Clock, Code } from 'lucide-react';

const Career = () => {
    return (
        <div className="pt-24 pb-20 bg-bg-light min-h-screen">
            <SEO title="Career" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-accent font-semibold tracking-wide text-sm uppercase mb-2 block">
                        Join Our Team
                    </span>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
                        Build the Future <span className="text-gradient">With Us</span>
                    </h1>

                    <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
                        We believe in delivering world-class solutions through innovation, detail, and excellence.
                    </p>
                </div>

                {/* Status Card */}
                <div className="glass-panel p-12 rounded-3xl text-center shadow-xl border border-white/50 mb-20 relative overflow-hidden">
                    
                    {/* Decorative Glow */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>

                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 text-accent rounded-2xl shadow-inner mb-6">
                        <Clock size={36} />
                    </div>

                    <h2 className="text-3xl font-bold text-primary mb-4">
                        Current Status
                    </h2>

                    <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        We are currently <strong className="text-primary">not hiring full-time roles</strong>.  
                        However, we are always open to connecting with talented developers for 
                        upcoming <span className="text-primary font-semibold">part-time, remote, and contract-based opportunities</span>.
                    </p>

                    <a
                        href="mailto:careers@agency.com"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-accent hover:-translate-y-1 transition-all"
                    >
                        <Mail size={20} /> Connect via Email
                    </a>
                </div>

                {/* Future Roles */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-10">
                        Future Opportunities
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-100 flex items-center gap-5 hover:shadow-xl transition-all">
                            <div className="p-4 bg-purple-100 text-purple-600 rounded-xl shadow-inner">
                                <Code size={26} />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-lg text-primary">MERN Stack Developer</div>
                                <div className="text-xs text-secondary mt-1">Part-time / Contract</div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-100 flex items-center gap-5 hover:shadow-xl transition-all">
                            <div className="p-4 bg-green-100 text-green-600 rounded-xl shadow-inner">
                                <Code size={26} />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-lg text-primary">React Native Developer</div>
                                <div className="text-xs text-secondary mt-1">Project Based</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Career;
