import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                            <div className="bg-slate-200 rounded-2xl overflow-hidden shadow-lg aspect-[4/3] flex items-center justify-center">
                                {/* Placeholder for About Image */}
                                <svg className="w-24 h-24 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-1/2">
                        <h4 className="text-accent font-bold uppercase tracking-wider mb-2">Who We Are</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            We Are A Creative Agency <br />
                            Focused on <span className="text-accent">Growth</span>
                        </h2>
                        <p className="text-secondary mb-6 leading-relaxed">
                            Founded in 2020, we have grown into a leading digital agency with a passion for technology and innovation.
                            Our mission is to empower businesses with digital solutions that drive real results.
                        </p>
                        <p className="text-secondary mb-8 leading-relaxed">
                            We believe in transparency, collaboration, and excellence. Whether you are a startup looking to make your mark
                            or an established enterprise seeking digital transformation, we are here to help you succeed.
                        </p>

                        <div className="flex gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 w-1/2">
                                <h5 className="font-bold text-primary mb-1">Our Mission</h5>
                                <p className="text-sm text-secondary">To deliver innovative digital solutions that create value.</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 w-1/2">
                                <h5 className="font-bold text-primary mb-1">Our Vision</h5>
                                <p className="text-sm text-secondary">To be the most trusted partner in the digital landscape.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
