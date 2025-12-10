import React from 'react';
import SEO from '../components/SEO';
import { Target, Users, Award, Briefcase } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="pt-24 pb-20 bg-bg-light min-h-screen">
            <SEO title="About" />
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Intro Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in">
                    <span className="text-accent font-semibold tracking-wide text-sm uppercase mb-2 block">Our Story</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">
                        Bridging the Gap Between <br /><span className="text-gradient">Idea and Reality</span>
                    </h1>
                    <p className="text-lg text-secondary leading-relaxed">
                        I am a professional digital agency owner committed to delivering premium web and app solutions. With a focus on quality, performance, and modern aesthetics, I turn complex requirements into seamless digital experiences.
                    </p>
                </div>

                {/* Stats / Trust Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 bg-white p-10 rounded-3xl shadow-soft">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                        <div className="text-secondary text-sm font-medium uppercase tracking-wide">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">3+</div>
                        <div className="text-secondary text-sm font-medium uppercase tracking-wide">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                        <div className="text-secondary text-sm font-medium uppercase tracking-wide">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                        <div className="text-secondary text-sm font-medium uppercase tracking-wide">Support</div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-primary mb-6">Why We Are Different</h2>
                        <p className="text-secondary text-lg mb-8">
                            We don't just build websites; we build assets for your business. Our approach is rooted in understanding your market and delivering a product that stands out.
                        </p>
                        <div className="space-y-6">
                            {[
                                { icon: <Target size={24} />, title: "Precision", text: "Pixel-perfect designs ensuring every detail is exactly as planned." },
                                { icon: <Briefcase size={24} />, title: "Professionalism", text: "Transparent communication and timely delivery, every single time." },
                                { icon: <Award size={24} />, title: "Quality", text: "Code that is clean, scalable, and optimized for high performance." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-accent shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                        <p className="text-secondary">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px] glass-panel rounded-3xl overflow-hidden p-8 flex items-center justify-center">
                        {/* Abstract visual for About */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 -z-10"></div>
                        <div className="w-full text-center">
                            <span className="text-9xl font-black text-white opacity-40 select-none">TRUST</span>
                        </div>
                    </div>
                </div>

                {/* Live Projects Mention */}
                <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Real World Impact</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            My portfolio isn't just demos. We have multiple real-world projects deployed live, serving thousands of users daily.
                        </p>
                        <a href="/top-projects" className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-all">
                            See Our Work
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
