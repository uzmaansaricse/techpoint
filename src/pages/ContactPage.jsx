import React from 'react';
import SEO from '../components/SEO';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-28 pb-24 bg-bg-light min-h-screen">
            <SEO title="Contact" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Contact Info */}
                    <div className="animate-fadeIn">
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">
                            Get In Touch
                        </span>

                        <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary leading-tight mb-6">
                            Let's Talk About <br />
                            Your <span className="text-gradient">Project</span>
                        </h1>

                        <p className="text-lg text-secondary mb-12 max-w-md leading-relaxed">
                            Got an idea? We’d love to help you bring it to life.
                            Drop us a message and we’ll get back within **24 hours.**
                        </p>

                        <div className="space-y-10">
                            {/* Address */}
                            <ContactItem
                                icon={<MapPin size={26} />}
                                title="Our Office"
                                text="123 Business Avenue, Tech City, TC 90210"
                            />

                            {/* Email */}
                            <ContactItem
                                icon={<Mail size={26} />}
                                title="Email Us"
                                text="hello@agency.com"
                            />

                            {/* Phone */}
                            <ContactItem
                                icon={<Phone size={26} />}
                                title="Call Us"
                                text="+1 (555) 123-4567"
                            />
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="glass-panel p-10 rounded-3xl shadow-xl backdrop-blur-lg border border-white/20 animate-slideUp">
                        <form className="space-y-7">

                            <div className="grid md:grid-cols-2 gap-6">
                                <InputField label="Name" placeholder="John Doe" />
                                <InputField label="Email" placeholder="john@example.com" />
                            </div>

                            <InputField label="Subject" placeholder="Project Inquiry" />

                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white/50 border border-slate-300/60 
                                    rounded-xl focus:border-accent focus:ring-2 focus:ring-blue-100 
                                    outline-none transition-all text-primary"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-primary text-white font-semibold text-lg 
                                rounded-xl hover:bg-accent transition-all shadow-lg shadow-primary/20 
                                flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={20} />
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
        <label className="block text-sm font-medium text-primary mb-2">{label}</label>
        <input
            type="text"
            className="w-full px-4 py-3 bg-white/50 border border-slate-300/60 rounded-xl 
            focus:border-accent focus:ring-2 focus:ring-blue-100 outline-none 
            transition-all text-primary"
            placeholder={placeholder}
        />
    </div>
);

/* Reusable Contact Info Card */
const ContactItem = ({ icon, title, text }) => (
    <div className="flex items-start gap-4 group">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/40 shadow-md 
        text-accent border border-white/30 group-hover:scale-110 transition-transform">
            {icon}
        </div>

        <div>
            <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                {title}
            </h4>
            <p className="text-secondary mt-1">
                {text}
            </p>
        </div>
    </div>
);

export default ContactPage;
