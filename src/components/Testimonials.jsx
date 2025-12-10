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
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-wide text-sm uppercase mb-2 block">Testimonials</span>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">What Our Clients Say</h2>
                </div>

                <div className="max-w-4xl mx-auto relative group">
                    <div className="overflow-hidden glass-panel rounded-3xl p-8 md:p-12 text-center transition-all bg-white/60">
                        <div className="flex justify-center mb-6">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} className="text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <p className="text-xl md:text-2xl text-secondary mb-8 leading-relaxed italic">
                            "{testimonials[current].text}"
                        </p>

                        <div className="flex items-center justify-center gap-4">
                            <img src={testimonials[current].image} alt={testimonials[current].name} className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                            <div className="text-left">
                                <h4 className="font-bold text-primary">{testimonials[current].name}</h4>
                                <p className="text-sm text-secondary">{testimonials[current].role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 bg-white rounded-full shadow-lg text-primary hover:text-accent transition-colors opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 bg-white rounded-full shadow-lg text-primary hover:text-accent transition-colors opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${current === i ? 'bg-accent w-6' : 'bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
