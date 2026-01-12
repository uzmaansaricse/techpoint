import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { Mail, Clock, Code, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Career = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();

        // 1. Header Reveal
        tl.from(".career-header-item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });

        // 2. Status Card Reveal
        gsap.from(".status-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".status-card",
                start: "top 85%"
            }
        });

        // 3. Opportunities
        gsap.from(".opportunity-card", {
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".opportunities-grid",
                start: "top 85%"
            }
        });

    }, { scope: container });

    return (
        <div ref={container} className="pt-32 pb-20 bg-bg-light min-h-screen">
            <SEO title="Career" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <span className="career-header-item font-cursive text-4xl text-accent mb-4 block transform -rotate-2">
                        Join Our Team
                    </span>
                    <h1 className="career-header-item text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
                        Crafting the Future <br /> <span className="font-serif italic text-secondary">Together</span>
                    </h1>
                    <p className="career-header-item text-xl text-secondary mx-auto leading-relaxed font-light">
                        We believe in delivering world-class solutions through passion, precision, and a relentless pursuit of excellence.
                    </p>
                </div>

                {/* Status Card */}
                <div className="status-card bg-white p-12 lg:p-16 rounded-3xl text-center shadow-2xl border border-gray-100 mb-24 relative overflow-hidden max-w-4xl mx-auto">

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-tr-full"></div>

                    <div className="inline-flex items-center justify-center w-20 h-20 bg-bg-light text-accent rounded-full border border-gold/30 shadow-gold mb-8">
                        <Clock size={32} />
                    </div>

                    <h2 className="text-3xl font-display font-bold text-primary mb-6">
                        Current Status
                    </h2>

                    <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        We are currently <strong className="text-primary font-bold">not hiring full-time roles</strong>.
                        However, we are always open to connecting with exceptional talent for upcoming
                        <span className="text-accent font-medium italic"> part-time, remote, and contract-based opportunities</span>.
                    </p>

                    <a
                        href="mailto:careers@techpoint.com"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-none shadow-xl hover:bg-accent hover:-translate-y-1 transition-all group"
                    >
                        <Mail size={16} /> Connect via Email <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Future Roles */}
                <div className="text-center">
                    <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-12">
                        Future Opportunities
                    </h3>

                    <div className="opportunities-grid grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Card 1 */}
                        <div className="opportunity-card bg-white p-8 border border-gray-100 flex items-center gap-6 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group text-left">
                            <div className="w-14 h-14 bg-bg-light text-primary flex items-center justify-center rounded-none transition-all duration-300 group-hover:border-gold group-hover:text-gold border border-transparent">
                                <Code size={24} />
                            </div>
                            <div>
                                <div className="font-display font-bold text-xl text-primary mb-1 group-hover:text-gold transition-colors">MERN Stack Developer</div>
                                <div className="text-xs text-accent uppercase tracking-wider font-bold">Part-time / Contract</div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="opportunity-card bg-white p-8 border border-gray-100 flex items-center gap-6 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group text-left">
                            <div className="w-14 h-14 bg-bg-light text-primary flex items-center justify-center rounded-none transition-all duration-300 group-hover:border-gold group-hover:text-gold border border-transparent">
                                <Code size={24} />
                            </div>
                            <div>
                                <div className="font-display font-bold text-xl text-primary mb-1 group-hover:text-gold transition-colors">React Native Developer</div>
                                <div className="text-xs text-accent uppercase tracking-wider font-bold">Project Based</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Career;
