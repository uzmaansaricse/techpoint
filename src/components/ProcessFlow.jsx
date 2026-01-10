import React from 'react';
import { Lightbulb, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Lightbulb size={24} />,
        title: 'Strategy & Vision',
        description: 'Defining a clear roadmap aligned with your business goals.',
        number: '01'
    },
    {
        icon: <PenTool size={24} />,
        title: 'Design & Craft',
        description: 'Creating intuitive interfaces that captivate and engage.',
        number: '02'
    },
    {
        icon: <Code size={24} />,
        title: 'Development',
        description: 'Building robust, scalable solutions with modern architecture.',
        number: '03'
    },
    {
        icon: <Rocket size={24} />,
        title: 'Launch & Scale',
        description: 'Deploying seamless experiences ready for market growth.',
        number: '04'
    }
];

const ProcessFlow = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Title */}
                <div className="text-center mb-20">
                    <span className="text-secondary font-serif italic text-lg mb-2 block">Our Methodology</span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
                        From Concept to <span className="text-accent underline decoration-gold/30 underline-offset-4 decoration-2">Reality</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center group relative"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-12 text-6xl font-display font-bold text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 select-none -z-10">
                                    {step.number}
                                </div>

                                {/* Icon Container */}
                                <div
                                    className="w-16 h-16 rounded-full border border-gold/30 bg-bg-light flex items-center justify-center mb-8
                                    shadow-sm group-hover:shadow-gold group-hover:bg-primary group-hover:text-gold transition-all duration-500 relative z-10"
                                >
                                    {step.icon}
                                </div>

                                {/* Connectors (Mobile hidden, Desktop visible) */}
                                {index !== steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[1px] bg-gold/20 -z-0"></div>
                                )}

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-3 text-primary uppercase tracking-wider">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-secondary text-sm leading-relaxed max-w-xs font-light">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProcessFlow;
