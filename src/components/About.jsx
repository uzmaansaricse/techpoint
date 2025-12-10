import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-white"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28">

                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">

                    {/* Image Side */}
                    <div className="md:w-1/2 w-full">
                        <div className="relative group">
                            {/* Accent shadow box */}
                            <div className="absolute inset-0 bg-accent/20 rounded-3xl transform translate-x-5 translate-y-5 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-300"></div>

                            {/* Image placeholder */}
                            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-xl aspect-[4/3] flex items-center justify-center border border-slate-200">
                                <svg
                                    className="w-28 h-28 text-slate-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-1/2 w-full">

                        <h4 className="text-accent font-semibold uppercase tracking-wide mb-3">
                            Who We Are
                        </h4>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-8">
                            We Are A Creative Agency <br />
                            Focused on <span className="text-accent">Growth</span>
                        </h2>

                        <p className="text-secondary text-lg mb-6 leading-relaxed">
                            Founded in 2020, we have grown into a leading digital agency with a passion for technology and innovation.
                            Our mission is to empower businesses with digital solutions that drive real results.
                        </p>

                        <p className="text-secondary text-lg mb-10 leading-relaxed">
                            We believe in transparency, collaboration, and excellence. Whether you are a startup looking to make your mark
                            or an established enterprise seeking digital transformation, we are here to help you succeed.
                        </p>

                        {/* Mission / Vision Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h5 className="text-lg font-bold text-primary mb-2">Our Mission</h5>
                                <p className="text-sm text-secondary leading-relaxed">
                                    To deliver innovative digital solutions that create value.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h5 className="text-lg font-bold text-primary mb-2">Our Vision</h5>
                                <p className="text-sm text-secondary leading-relaxed">
                                    To be the most trusted partner in the digital landscape.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
