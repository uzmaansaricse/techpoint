import React from 'react';
import SEO from '../components/SEO';
import { Mail, Clock, Code } from 'lucide-react';

const Career = () => {
    return (
        <div className="pt-24 pb-20 bg-bg-light min-h-screen">
            <SEO title="Career" />
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
                <div className="text-center mb-12">
                    <span className="text-accent font-semibold tracking-wide text-sm uppercase mb-2 block">Join Our Team</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                        Build the Future <span className="text-gradient">With Us</span>
                    </h1>
                    <p className="text-lg text-secondary">
                        We are strictly focused on quality and innovation.
                    </p>
                </div>

                {/* Status Card */}
                <div className="glass-panel p-10 rounded-3xl text-center shadow-lg border-t-4 border-accent mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-accent rounded-full mb-6">
                        <Clock size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-4">Current Status</h2>
                    <p className="text-secondary text-lg mb-8 max-w-lg mx-auto">
                        We are currently <strong>not hiring</strong> full-time roles. However, we are always looking to connect with talented Full-Stack Developers for upcoming part-time and contract opportunities.
                    </p>

                    <a href="mailto:careers@agency.com" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full shadow-lg hover:bg-accent transition-colors hover:-translate-y-1">
                        <Mail size={20} /> Connect via Email
                    </a>
                </div>

                {/* Roles We Look For */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-primary mb-6">Future Opportunities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg"><Code size={24} /></div>
                            <div className="text-left">
                                <div className="font-bold text-primary">MERN Stack Developer</div>
                                <div className="text-xs text-secondary">Part-time / Contract</div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                            <div className="p-3 bg-green-50 text-green-600 rounded-lg"><Code size={24} /></div>
                            <div className="text-left">
                                <div className="font-bold text-primary">React Native Developer</div>
                                <div className="text-xs text-secondary">Project Based</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Career;
