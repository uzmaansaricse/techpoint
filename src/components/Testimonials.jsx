import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Mehta",
        role: "Director, FinTech Solutions",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "The team delivered our e-commerce platform ahead of schedule. The design is stunning and sales have increased by 40% since launch."
    },
    {
        name: "Ananya Singh",
        role: "Founder, Organic Roots",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "Professional, reliable, and incredibly skilled. They transformed our outdated website into a modern digital asset that we are proud of."
    },
    {
        name: "Vikram Malhotra",
        role: "VP Marketing, TechGiant India",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        text: "Exceptional attention to detail. The SEO optimization services have helped us rank #1 for our key search terms."
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((curr) => (curr + 1) % testimonials.length);
    const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-cursive text-4xl text-accent mb-2 block transform -rotate-3">
                        Client Stories
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary">
                        Committed to <br /> <span className="text-secondary font-serif italic">Excellence</span>
                    </h2>
                </div>

                <div className="max-w-4xl w-full relative">

                    {/* Decorative Quotes */}
                    <Quote className="absolute top-0 left-0 text-gold/10 w-32 h-32 md:w-48 md:h-48 transform -translate-x-10 -translate-y-10" />

                    {/* Testimonial Card */}
                    <div className="relative bg-transparent p-4 md:p-8">
                        <div className="text-center animate-fade-in" key={current}>
                            {/* Stars */}
                            <div className="flex justify-center mb-8 gap-1">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <Star key={s} size={16} className="text-accent fill-accent" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-xl md:text-3xl text-primary mb-12 leading-relaxed font-serif font-light">
                                "{testimonials[current].text}"
                            </p>

                            {/* Avatar + Details */}
                            <div className="flex flex-col items-center justify-center gap-4">
                                <div className="p-1 border border-accent rounded-full">
                                    <img
                                        src={testimonials[current].image}
                                        alt={testimonials[current].name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-primary text-lg tracking-wide uppercase">{testimonials[current].name}</h4>
                                    <p className="text-sm text-secondary font-light tracking-widest uppercase mt-1">{testimonials[current].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-4 text-primary hover:text-accent transition-colors"
                    >
                        <ChevronLeft size={32} strokeWidth={1} />
                    </button>

                    <button
                        onClick={next}
                        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-16 p-4 text-primary hover:text-accent transition-colors"
                    >
                        <ChevronRight size={32} strokeWidth={1} />
                    </button>
                </div>
            </div>
        </section>
    );
};

// Simple pseudo-motion component to avoid adding motion dep if not needed, 
// but since we used it in Hero, we should probably import it or just use CSS key keyframes.
// I'll stick to CSS transition via class key for simplicity or just CSS.
// Actually, let's just make it simple React for now.

export default Testimonials;
