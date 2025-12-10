import React from 'react';
import SEO from '../components/SEO';
import { Target, Users, Award, Briefcase } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="pt-24 pb-20 bg-bg-light min-h-screen">
            <SEO title="About" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Intro Section */}
                <div className="text-center mb-20 max-w-4xl mx-auto animate-fade-in">
                    <span className="text-accent font-semibold tracking-wide text-sm uppercase mb-2 block">
                        Our Story
                    </span>

                    <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 leading-tight">
                        Bridging the Gap Between <br />
                        <span className="text-gradient">Idea and Reality</span>
                    </h1>

                    <p className="text-lg text-secondary leading-relaxed max-w-3xl mx-auto">
                        I help businesses transform vision into powerful digital products. 
                        With a focus on modern UI, scalable architecture, and flawless execution, 
                        I build solutions that last — not just websites.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-white/60 backdrop-blur-xl p-12 rounded-3xl shadow-soft border border-white/40">
                    {[
                        { count: "50+", label: "Projects Delivered" },
                        { count: "3+", label: "Years Experience" },
                        { count: "100%", label: "Client Satisfaction" },
                        { count: "24/7", label: "Support" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl font-bold text-gradient mb-2">{stat.count}</div>
                            <div className="text-secondary text-sm font-medium uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why Different Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                            Why We Are Different
                        </h2>

                        <p className="text-secondary text-lg mb-10 leading-relaxed">
                            We believe digital products should be fast, aesthetic, and business-driven. 
                            Every project goes through detailed planning, ensuring it stands out in today’s competitive market.
                        </p>

                        <div className="space-y-7">
                            {[
                                { icon: <Target size={24} />, title: "Precision", desc: "Pixel-perfect design execution with granular attention to detail." },
                                { icon: <Briefcase size={24} />, title: "Professionalism", desc: "Clear communication, structured planning, and on-time delivery." },
                                { icon: <Award size={24} />, title: "Quality", desc: "Clean, scalable code with high performance and smooth UX." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-blue-100 text-accent rounded-lg flex items-center justify-center shrink-0 shadow-inner">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                                        <p className="text-secondary">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[500px] glass-panel rounded-3xl overflow-hidden p-8 flex items-center justify-center shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-70 -z-10"></div>

                        <span className="text-[180px] md:text-[210px] font-black text-white opacity-20 select-none">
                            TRUST
                        </span>
                    </div>
                </div>

                {/* Live Projects Section */}
                <div className="bg-primary rounded-3xl p-16 text-center text-white relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-600 opacity-70 -z-10"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Real World Impact</h2>

                        <p className="text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                            My projects are live — serving real customers, solving real problems, 
                            and helping businesses grow in the digital world.
                        </p>

                        <a
                            href="/top-projects"
                            className="px-8 py-3 bg-white text-primary font-bold rounded-full shadow-md hover:bg-accent hover:text-white transition-all duration-300"
                        >
                            See Our Work
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
