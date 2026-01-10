import React from 'react';
import { Zap, ShieldCheck, Layout, MonitorSmartphone } from 'lucide-react';

const features = [
    {
        icon: <Zap size={20} />,
        title: 'High Performance',
        description: 'Blazing fast load times optimized for conversion.'
    },
    {
        icon: <ShieldCheck size={20} />,
        title: 'Secure by Design',
        description: 'Enterprise-grade security standards for peace of mind.'
    },
    {
        icon: <Layout size={20} />,
        title: 'Pixel Perfection',
        description: 'Impeccable attention to detail in every interface.'
    },
    {
        icon: <MonitorSmartphone size={20} />,
        title: 'Universal Adaptability',
        description: 'Flawless experiences across all device sizes.'
    }
];

const WhyChooseMe = () => {
    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Text Section */}
                    <div>
                        <div className="inline-block border-b border-accent pb-1 mb-6">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase">The Advantage</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-[1.2] mb-8">
                            Combining Art & <br />
                            <span className="text-secondary font-serif italic text-4xl lg:text-5xl">Engineering</span>
                        </h2>

                        <p className="text-secondary text-lg leading-relaxed mb-12 max-w-xl font-light">
                            We don't just build websites; we craft digital legacies. Our approach merges aesthetic beauty with robust technical architecture to create platforms that stand the test of time.
                        </p>

                        {/* Features list */}
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex flex-col gap-3 group">
                                    <div className="text-accent mb-2 group-hover:scale-110 transition-transform origin-left">
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-display font-bold text-primary text-lg">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-secondary leading-relaxed opacity-80">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Visual */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Image Frame */}
                        <div className="relative w-[400px] h-[500px] bg-white border border-gray-100 p-4 shadow-2xl skew-y-3 hover:skew-y-0 transition-all duration-700 ease-out">
                            <div className="absolute top-0 left-0 w-full h-full border border-gold/20 -m-4 -z-10 bg-gold/5"></div>

                            <div className="w-full h-full bg-primary relative overflow-hidden flex flex-col items-center justify-center text-center p-8">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                                <span className="font-cursive text-6xl text-gold mb-4 animate-pulse">100%</span>
                                <span className="text-white text-xl font-display tracking-widest uppercase border-t border-white/20 pt-4">Client Satisfaction</span>
                                <p className="text-white/60 text-xs mt-4 max-w-xs font-light">Our commitment to excellence ensures every project exceeds expectations.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
