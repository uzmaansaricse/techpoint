import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "The team delivered our e-commerce platform ahead of schedule. The design is stunning and sales have increased by 40% since launch."
    },
    {
        name: "Michael Chen",
        role: "Founder, GreenLeaf",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Professional, reliable, and incredibly skilled. They transformed our outdated website into a modern digital asset that we are proud of."
    },
    {
        name: "Emily Davis",
        role: "Marketing Director, OmniCorp",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Exceptional attention to detail. The SEO optimization services have helped us rank #1 for our key search terms."
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((curr) => (curr + 1) % testimonials.length);
    const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">

            {/* Soft Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-widest text-sm uppercase mb-2 block">
                        Testimonials
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto relative group">

                    {/* Testimonial Card */}
                    <div className="overflow-hidden glass-panel p-10 md:p-14 rounded-3xl bg-white/70 shadow-xl backdrop-blur-xl border border-white/40 transition-all">
                        
                        {/* Stars */}
                        <div className="flex justify-center mb-6">
                            {[1, 2, 3, 4, 5].map(s => (
                                <Star key={s} size={20} className="text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>

                        {/* Text */}
                        <p className="text-xl md:text-2xl text-secondary mb-10 leading-relaxed italic">
                            "{testimonials[current].text}"
                        </p>

                        {/* Avatar + Details */}
                        <div className="flex items-center justify-center gap-4">
                            <img
                                src={testimonials[current].image}
                                alt={testimonials[current].name}
                                className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                            />
                            <div className="text-left">
                                <h4 className="font-bold text-primary text-lg">{testimonials[current].name}</h4>
                                <p className="text-sm text-secondary">{testimonials[current].role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 md:-translate-x-14 p-3 bg-white rounded-full shadow-lg text-primary hover:text-accent hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={next}
                        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 md:translate-x-14 p-3 bg-white rounded-full shadow-lg text-primary hover:text-accent hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    current === i ? 'bg-accent w-7' : 'bg-gray-300 w-2.5'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
