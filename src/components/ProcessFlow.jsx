import React from 'react';
import { Lightbulb, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Lightbulb size={32} />,
        title: 'Idea & Strategy',
        description: 'We brainstorm and define the roadmap to bring your vision to life.',
        color: 'bg-yellow-100 text-yellow-600'
    },
    {
        icon: <PenTool size={32} />,
        title: 'UI/UX Design',
        description: 'Crafting pixel-perfect, user-centric interfaces that engage.',
        color: 'bg-purple-100 text-purple-600'
    },
    {
        icon: <Code size={32} />,
        title: 'Development',
        description: 'Building robust, scalable solutions using modern tech stacks.',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: <Rocket size={32} />,
        title: 'Launch & Growth',
        description: 'Deploying your product and optimizing for maximum reach.',
        color: 'bg-green-100 text-green-600'
    }
];

const ProcessFlow = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">How I Work</h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">A streamlined process from concept to deployment.</p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                                <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed px-4">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
