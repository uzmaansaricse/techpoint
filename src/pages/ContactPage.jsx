import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactPage = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();

        // Left Content Reveal
        tl.from(".contact-info-item", {
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        });

        // Form Reveal (Slide up)
        gsap.from(".contact-form-container", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5 // Wait slightly for left side
        });

    }, { scope: container });

    return (
        <div ref={container} className="pt-32 pb-24 bg-bg-light min-h-screen relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="100" cy="0" r="50" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                </svg>
            </div>

            <SEO title="Contact" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left: Contact Info */}
                    <div className="pt-8">
                        <span className="contact-info-item font-cursive text-4xl text-accent mb-2 block transform -rotate-2">
                            Get In Touch
                        </span>

                        <h1 className="contact-info-item text-4xl lg:text-6xl font-display font-bold text-primary leading-tight mb-8">
                            Let's Talk About <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Your Vision</span>
                        </h1>

                        <p className="contact-info-item text-xl text-secondary mb-12 max-w-md leading-relaxed font-light">
                            Ready to start your next premium project? We are currently accepting new clients for 2026.
                        </p>

                        <div className="space-y-12">
                            {/* Address */}
                            <div className="contact-info-item">
                                <ContactItem
                                    icon={<MapPin size={24} />}
                                    title="Studio"
                                    text="WorkFlo, Udyog Vihar Phase 4, Gurugram, India 122015"
                                />
                            </div>

                            {/* Email */}
                            <div className="contact-info-item">
                                <ContactItem
                                    icon={<Mail size={24} />}
                                    title="Email"
                                    text="hello@techpoint.in"
                                />
                            </div>

                            {/* Phone */}
                            <div className="contact-info-item">
                                <ContactItem
                                    icon={<Phone size={24} />}
                                    title="Phone"
                                    text="+91 98765 43210"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="contact-form-container bg-white p-10 md:p-14 shadow-2xl border border-gray-100 relative group">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 -z-10 group-hover:scale-150 transition-transform duration-700 rounded-bl-[100px]"></div>

                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <InputField label="Name" placeholder="John Doe" />
                                <InputField label="Email" placeholder="john@example.com" />
                            </div>

                            <InputField label="Subject" placeholder="Project Inquiry" />

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full px-0 py-4 bg-transparent border-b border-gray-200 
                                    focus:border-accent outline-none transition-all text-primary resize-none placeholder:text-gray-300 font-light text-lg"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-primary text-white font-bold uppercase tracking-widest text-sm 
                                hover:bg-accent hover:text-white transition-all duration-300 shadow-xl 
                                flex items-center justify-center gap-3 group mt-4 hover:translate-y-[-2px]"
                            >
                                Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* Reusable Input Component */
const InputField = ({ label, placeholder }) => (
    <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">{label}</label>
        <input
            type="text"
            className="w-full px-0 py-4 bg-transparent border-b border-gray-200 
            focus:border-accent outline-none 
            transition-all text-primary placeholder:text-gray-300 font-light text-lg"
            placeholder={placeholder}
        />
    </div>
);

/* Reusable Contact Info Card */
const ContactItem = ({ icon, title, text }) => (
    <div className="flex items-start gap-6 group cursor-default">
        <div className="w-12 h-12 flex items-center justify-center border border-primary/10 text-primary group-hover:border-gold group-hover:text-gold transition-colors duration-500 rounded-none shadow-sm group-hover:shadow-gold">
            {icon}
        </div>

        <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
                {title}
            </h4>
            <p className="text-secondary font-light text-lg group-hover:text-primary transition-colors">
                {text}
            </p>
        </div>
    </div>
);

export default ContactPage;
