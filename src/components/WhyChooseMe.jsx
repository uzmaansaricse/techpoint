import React from 'react';
import { Zap, ShieldCheck, Layout, MonitorSmartphone } from 'lucide-react';

const features = [
    {
        icon: <Zap size={24} />,
        title: 'Blazing Fast Performance',
        description: 'Optimized code and assets for lightning-fast load times and smooth interactions.'
    },
    {
        icon: <ShieldCheck size={24} />,
        title: 'Reliable & Secure',
        description: 'Built with security best practices to protect your data and users.'
    },
    {
        icon: <Layout size={24} />,
        title: 'Modern UI/UX',
        description: 'Clean, aesthetic designs that provide an exceptional user experience.'
    },
    {
        icon: <MonitorSmartphone size={24} />,
        title: 'Fully Responsive',
        description: 'Flawless adaptability across all devices, from mobile phones to 4K desktops.'
    }
];

const WhyChooseMe = () => {
    return (
        <section className="py-20 bg-bg-light">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-accent font-semibold tracking-wide text-sm uppercase mb-2 block">Why Choose Me</span>
                    <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary mb-6">
                        Quality That Speaks <br /><span className="text-gradient">For Itself</span>
                    </h2>
                    <p className="text-secondary text-lg mb-8 leading-relaxed">
                        I don't just write code; I build solutions. My focus is on delivering long-term value through clean architecture, future-proof technology, and designs that convert.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-accent">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">{feature.title}</h4>
                                    <p className="text-sm text-secondary">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual/Image placeholder */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-3 blur-md opacity-20 transform scale-105"></div>
                    <div className="relative glass-panel rounded-3xl p-8 aspect-square flex items-center justify-center">
                        {/* Abstract representation of quality code */}
                        <div className="text-center">
                            <div className="text-6xl font-black text-gray-100 mb-4 select-none">100%</div>
                            <div className="text-2xl font-bold text-primary">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
