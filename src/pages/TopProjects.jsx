import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: 'Modern E-commerce Store',
        category: 'Web Development',
        image: '', // Placeholder logic handled in CSS/Component
        color: 'from-blue-900 to-slate-900',
        description: 'A full-stack e-commerce platform with payment integration and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Corporate Finance Portal',
        category: 'Web Design',
        image: '',
        color: 'from-emerald-900 to-slate-900',
        description: 'Professional website for a finance firm with secure client login.',
        tags: ['Next.js', 'Tailwind', 'PostgreSQL'],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Fitness Tracking App',
        category: 'Mobile App',
        image: '',
        color: 'from-rose-900 to-slate-900',
        description: 'Cross-platform mobile app for tracking workouts and nutrition.',
        tags: ['React Native', 'Firebase', 'Redux'],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Restaurant Delivery System',
        category: 'Full Stack',
        image: '',
        color: 'from-amber-900 to-slate-900',
        description: 'Order management system for a multi-chain restaurant business.',
        tags: ['MERN', 'Socket.io', 'Google Maps API'],
        links: { live: '#', github: '#' }
    }
];

const TopProjects = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();

        // Header Reveal
        tl.from(".project-header-item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });

        // Grid Stagger
        gsap.fromTo(".project-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, { scope: container });

    return (
        <div ref={container} className="pt-32 pb-28 bg-bg-light min-h-screen">
            <SEO title="Top Projects" />
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="project-header-item font-cursive text-4xl text-accent mb-4 block transform -rotate-2">
                        Portfolio
                    </span>
                    <h1 className="project-header-item text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
                        Selected <span className="font-serif italic text-secondary">Works</span>
                    </h1>
                    <p className="project-header-item text-lg text-secondary mx-auto leading-relaxed font-light">
                        Explore some of our major work. We take pride in delivering robust and scalable solutions.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid grid md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card group bg-white rounded-none border border-gray-100 overflow-hidden hover:border-gold/30 hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full"
                        >
                            {/* Image Placeholder area */}
                            <div className={`h-80 w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center p-8 group-hover:scale-[1.02] transition-transform duration-700`}>
                                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                                {/* Abstract Shapes */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

                                <span className="relative z-10 font-display font-bold text-3xl text-white/90 tracking-widest uppercase border border-white/20 px-6 py-2">
                                    {project.category}
                                </span>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm z-20">
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 bg-white text-primary hover:bg-gold hover:text-white transition-all transform hover:scale-110 shadow-lg"
                                        title="View Live"
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 bg-primary text-white border border-white/20 hover:bg-white hover:text-primary transition-all transform hover:scale-110 shadow-lg"
                                        title="View Code"
                                    >
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-8 lg:p-10 flex-1 flex flex-col bg-white">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-3xl font-display font-bold text-primary group-hover:text-gold transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="text-gold opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                <p className="text-secondary mb-8 flex-grow leading-relaxed font-light text-lg">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-auto border-t border-gray-50 pt-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold uppercase tracking-widest text-primary/60 border border-gray-200 px-4 py-2 hover:border-gold/50 hover:text-gold transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProjects;
