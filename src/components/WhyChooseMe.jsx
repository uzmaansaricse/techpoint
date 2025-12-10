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
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-20 items-center">

                {/* Text Section */}
                <div>
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Why Choose Me
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-tight mb-6">
                        Quality That Speaks  
                        <br />
                        <span className="text-gradient">For Itself</span>
                    </h2>

                    <p className="text-secondary text-lg leading-relaxed mb-10 max-w-xl">
                        I don’t just write code — I build long-term digital solutions.  
                        Clean architecture, future-proof tech, and designs that convert.
                    </p>

                    {/* Features list */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 group"
                            >
                                {/* Icon box */}
                                <div className="p-4 bg-white rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 text-accent ring-1 ring-gray-100 group-hover:-translate-y-1">
                                    {feature.icon}
                                </div>

                                {/* Text */}
                                <div>
                                    <h4 className="font-semibold text-primary mb-1 text-lg">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-secondary leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Visual */}
                <div className="relative">
                    {/* Gradient Background Blob */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-6 blur-xl opacity-25 scale-105"></div>

                    {/* Glass Card */}
                    <div className="relative glass-panel rounded-3xl p-12 aspect-square flex items-center justify-center shadow-xl">
                        <div className="text-center">
                            <div className="text-7xl font-black text-gray-100 drop-shadow mb-4 select-none">
                                100%
                            </div>
                            <div className="text-2xl font-bold text-primary">
                                Client Satisfaction
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseMe;
