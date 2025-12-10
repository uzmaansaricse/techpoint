import React from 'react';
import { Lightbulb, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
    {
        icon: <Lightbulb size={28} />,
        title: 'Idea & Strategy',
        description: 'We brainstorm and define the roadmap to bring your vision to life.',
        color: 'bg-yellow-50 text-yellow-600 border-yellow-200'
    },
    {
        icon: <PenTool size={28} />,
        title: 'UI/UX Design',
        description: 'Crafting pixel-perfect, user-centric interfaces that engage.',
        color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
        icon: <Code size={28} />,
        title: 'Development',
        description: 'Building robust, scalable solutions using modern tech stacks.',
        color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
        icon: <Rocket size={28} />,
        title: 'Launch & Growth',
        description: 'Deploying your product and optimizing for maximum reach.',
        color: 'bg-green-50 text-green-600 border-green-200'
    }
];

const ProcessFlow = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-primary mb-3">
                        How I Work
                    </h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        A simple yet powerful workflow from idea to growth.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector line for large screens */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2"></div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div 
                                key={index}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Icon Container */}
                                <div
                                    className={`w-24 h-24 rounded-2xl border ${step.color} flex items-center justify-center mb-6
                                    shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2`}
                                >
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-secondary text-sm leading-relaxed max-w-xs">
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
