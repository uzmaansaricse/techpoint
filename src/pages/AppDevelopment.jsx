import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { Smartphone, Layers, Cpu, Globe, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const benefits = [
    {
        icon: <Smartphone size={24} />,
        title: "Native Performance",
        desc: "Fluid animations and rapid response times that feel natural on any device."
    },
    {
        icon: <Layers size={24} />,
        title: "Cross-Platform",
        desc: "Build once, deploy everywhere. We specialize in React Native and Flutter for maximum reach."
    },
    {
        icon: <Cpu size={24} />,
        title: "Scalable Backend",
        desc: "Robust cloud architecture (AWS/Firebase) to handle millions of users seamlessly."
    },
    {
        icon: <Globe size={24} />,
        title: "Global Standards",
        desc: "UI/UX that meets international design guidelines for intuitive navigation."
    }
];

const AppDevelopment = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();

        // Header Reveal
        tl.fromTo(".app-header-item",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }
        );

        // Benefits Stagger
        gsap.fromTo(".benefit-card",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".benefits-grid",
                    start: "top 80%"
                }
            }
        );

        // Tech Stack Reveal
        gsap.fromTo(".industries-section",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".industries-section",
                    start: "top 75%"
                }
            }
        );

    }, { scope: container });

    return (
        <div ref={container} className="pt-32 pb-20 bg-bg-light min-h-screen overflow-x-hidden">
            <SEO title="App Development" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Hero Section */}
                <div className="text-center mb-24 max-w-4xl mx-auto relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -z-10"></div>
                    <span className="app-header-item font-cursive text-4xl text-accent mb-4 block transform -rotate-3">
                        Mobile First
                    </span>
                    <h1 className="app-header-item text-5xl md:text-7xl font-display font-bold text-primary mb-8 leading-[1.1]">
                        Apps That Define <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">The Future</span>
                    </h1>
                    <p className="app-header-item text-xl text-secondary leading-relaxed max-w-3xl mx-auto font-light">
                        We craft high-performance mobile applications that engage users and drive business value.
                        From idea validation to App Store launch, we handle the entire lifecycle.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="benefits-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="benefit-card bg-white p-8 border border-gray-100 group hover:border-gold/30 hover:shadow-gold transition-all duration-500">
                            <div className="w-14 h-14 bg-bg-light border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:border-gold group-hover:text-gold transition-all duration-500 shadow-sm group-hover:shadow-md">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                            <p className="text-secondary text-sm font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Industries */}
                <div className="industries-section grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative h-[500px] w-full bg-white border border-gray-100 p-4 shadow-2xl skew-y-1 hover:skew-y-0 transition-all duration-700">
                        <div className="absolute inset-0 bg-primary/5 -m-4 -z-10"></div>
                        <div className="w-full h-full bg-primary relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                            <div className="text-center p-10">
                                <Smartphone size={80} className="text-gold mx-auto mb-6 opacity-80" strokeWidth={1} />
                                <h3 className="text-3xl font-display font-bold text-white mb-2">iOS & Android</h3>
                                <p className="text-white/60 font-light">Unified Excellence</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Solutions for Every Industry</h2>
                        <p className="text-secondary text-lg font-light leading-relaxed mb-8">
                            Our expertise spans across various domains, delivering specialized solutions that solve real-world problems.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['FinTech & Banking', 'Healthcare & Telemedicine', 'Education & E-Learning', 'On-Demand Services', 'Social Networking', 'Enterprise Management'].map((tag, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 bg-white hover:border-gold/30 transition-colors">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm font-bold text-primary uppercase tracking-wide">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary text-white p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 !text-white">Have an App Idea?</h2>
                        <p className="text-slate-300 mb-8 max-w-xl mx-auto font-light">Turn your concept into a reality with our expert mobile development team.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-all duration-300 group">
                            Consult With Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDevelopment;
