import React from 'react';
import SEO from '../components/SEO';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Modern E-commerce Store',
        category: 'Web Development',
        image: 'bg-blue-100', // Placeholder
        description: 'A full-stack e-commerce platform with payment integration and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Corporate Finance Portal',
        category: 'Web Design',
        image: 'bg-slate-200',
        description: 'Professional website for a finance firm with secure client login.',
        tags: ['Next.js', 'Tailwind', 'PostgreSQL'],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Fitness Tracking App',
        category: 'Mobile App',
        image: 'bg-green-100',
        description: 'Cross-platform mobile app for tracking workouts and nutrition.',
        tags: ['React Native', 'Firebase', 'Redux'],
        links: { live: '#', github: '#' }
    },
    {
        title: 'Restaurant Delivery System',
        category: 'Full Stack',
        image: 'bg-orange-100',
        description: 'Order management system for a multi-chain restaurant business.',
        tags: ['MERN', 'Socket.io', 'Google Maps API'],
        links: { live: '#', github: '#' }
    }
];

const TopProjects = () => {
    return (
        <div className="pt-24 pb-20 bg-bg-light min-h-screen">
            <SEO title="Top Projects" />
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-wide text-sm uppercase mb-2 block">Portfolio</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                        Our Top <span className="text-gradient">Projects</span>
                    </h1>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        Explore some of our major work. We take pride in delivering robust and scalable solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="group glass-panel rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            {/* Image Placeholder */}
                            <div className={`h-64 w-full ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300 gap-4">
                                    <button className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform" title="View Live"><ExternalLink size={20} /></button>
                                    <button className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform" title="View Code"><Github size={20} /></button>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{project.category}</div>
                                <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                                <p className="text-secondary mb-6 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
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
