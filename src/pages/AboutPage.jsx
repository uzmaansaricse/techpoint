import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { Target, Users, Award, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const statsData = [
    { count: "50+", label: "Projects Delivered" },
    { count: "3+", label: "Years Experience" },
    { count: "100%", label: "Client Satisfaction" },
    { count: "24/7", label: "Dedicated Support" }
];

const AboutPage = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();

        // Intro
        tl.from(".animate-text", {
            y: 30, // Reduced distance
            opacity: 0,
            duration: 0.8, // Faster intro
            stagger: 0.1,
            ease: "power3.out"
        });

        // Count Up Stats
        const statElements = gsap.utils.toArray('.stat-number');
        statsData.forEach((stat, i) => {
            const targetElement = statElements[i];
            const originalValue = stat.count; // Source of truth from data

            const match = originalValue.match(/^([\d.]+)(.*)$/);
            if (!match) return;

            const endValue = parseFloat(match[1]);
            const suffix = match[2] || '';

            // Initial reset to ensure clean start
            targetElement.innerText = "0" + suffix;

            const counter = { val: 0 };

            gsap.to(counter, {
                val: endValue,
                duration: 2, // Faster count up (was 2.5)
                scrollTrigger: {
                    trigger: targetElement,
                    start: "top 90%",
                    toggleActions: "play none none none"
                },
                ease: "power2.out",
                onUpdate: () => {
                    targetElement.innerText = Math.floor(counter.val) + suffix;
                }
            });
        });

        // Values Stagger
        gsap.from(".value-card", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".values-grid",
                start: "top 80%"
            }
        });

    }, { scope: container });

    return (
        <div ref={container} className="pt-32 pb-20 bg-bg-light min-h-screen overflow-x-hidden">
            <SEO title="About" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Intro Section */}
                <div className="text-center mb-24 max-w-4xl mx-auto relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -z-10"></div>

                    <span className="animate-text font-cursive text-4xl text-accent mb-4 block transform -rotate-3">
                        Our Story
                    </span>

                    <h1 className="animate-text text-5xl md:text-7xl font-display font-bold text-primary mb-8 leading-[1.1]">
                        Bridging Vision & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Reality</span>
                    </h1>

                    <p className="animate-text text-xl text-secondary leading-relaxed max-w-3xl mx-auto font-light">
                        We help businesses transform abstract ideas into powerful digital products.
                        With a focus on modern aesthetics, scalable architecture, and flawless execution,
                        we build legacies, not just websites.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {statsData.map((stat, i) => (
                        <div key={i} className="text-center p-8 bg-white border border-gray-100 hover:border-gold/30 hover:shadow-gold transition-all duration-500 group">
                            <div className="stat-number text-5xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">{stat.count}</div>
                            <div className="text-accent text-xs font-bold uppercase tracking-widest border-t border-gray-100 pt-4 inline-block group-hover:border-gold/50 transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why Different Section */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <div className="inline-block border-b border-accent pb-1 mb-6">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase">Core Values</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
                            Redefining Digital <br /> <span className="font-serif italic text-secondary">Standards</span>
                        </h2>

                        <p className="text-secondary text-lg mb-12 leading-relaxed font-light">
                            We believe digital products should be fast, aesthetic, and business-driven.
                            Every project goes through detailed planning, ensuring it stands out in today’s competitive market.
                        </p>

                        <div className="space-y-10">
                            {[
                                { icon: <Target size={24} />, title: "Precision", desc: "Pixel-perfect design execution with granular attention to detail." },
                                { icon: <Briefcase size={24} />, title: "Professionalism", desc: "Clear communication, structured planning, and on-time delivery." },
                                { icon: <Award size={24} />, title: "Excellence", desc: "Clean, scalable code with high performance and smooth UX." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 border border-gold/30 bg-white text-primary rounded-none flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm group-hover:border-gold group-hover:text-gold group-hover:shadow-md">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-primary mb-2">{item.title}</h3>
                                        <p className="text-secondary text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[600px] w-full">
                        {/* Abstract Art Composition */}
                        <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-white border border-gray-100 shadow-2xl p-2 z-0">
                            <div className="w-full h-full bg-gray-50 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                                <span className="text-[120px] font-display font-black text-primary/5 rotate-90 absolute right-[-40px]">TRUST</span>
                                <div className="p-10 border border-primary/10 m-8 w-full h-full flex flex-col justify-center items-center">
                                    <Award size={64} className="text-accent mb-6" strokeWidth={1} />
                                    <p className="text-center font-serif italic text-2xl text-primary max-w-xs">"Quality is not an act, it is a habit."</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-primary z-10 p-10 flex flex-col justify-center shadow-2xl border-t border-r border-gold/20">
                            <div className="text-gold font-cursive text-5xl mb-3">Since 2023</div>
                            <div className="text-white/80 text-sm font-light leading-relaxed">Delivering digital excellence across borders with precision and passion.</div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="bg-primary text-white relative overflow-hidden p-16 md:p-24 text-center">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 !text-white">Ready to make an impact?</h2>

                        <p className="text-slate-300/90 mb-10 text-lg font-light leading-relaxed">
                            Join a roster of successful brands that have elevated their digital presence with us.
                        </p>

                        <Link
                            to="/top-projects"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-all duration-300 group"
                        >
                            View Our Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
