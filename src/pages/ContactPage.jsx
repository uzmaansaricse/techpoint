import React from 'react';
import SEO from '../components/SEO';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-32 pb-24 bg-bg-light min-h-screen relative overflow-hidden">
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
                    <div className="animate-fadeIn pt-8">
                        <span className="font-cursive text-4xl text-accent mb-2 block transform -rotate-2">
                            Get In Touch
                        </span>

                        <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary leading-tight mb-8">
                            Let's Talk About <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Your Vision</span>
                        </h1>

                        <p className="text-xl text-secondary mb-12 max-w-md leading-relaxed font-light">
                            Ready to start your next premium project? We are currently accepting new clients for 2026.
                        </p>

                        <div className="space-y-12">
                            {/* Address */}
                            <ContactItem
                                icon={<MapPin size={24} />}
                                title="Studio"
                                text="WorkFlo, Udyog Vihar Phase 4, Gurugram, India 122015"
                            />

                            {/* Email */}
                            <ContactItem
                                icon={<Mail size={24} />}
                                title="Email"
                                text="hello@techpoint.in"
                            />

                            {/* Phone */}
                            <ContactItem
                                icon={<Phone size={24} />}
                                title="Phone"
                                text="+91 98765 43210"
                            />
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white p-10 md:p-14 shadow-2xl border border-gray-100 relative group">
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
        <div className="w-12 h-12 flex items-center justify-center border border-primary/10 text-primary group-hover:bg-primary group-hover:text-gold transition-colors duration-500 rounded-none">
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
