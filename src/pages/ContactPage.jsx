import React from 'react';
import SEO from '../components/SEO';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-24 pb-20 bg-bg-light min-h-screen">
            <SEO title="Contact" />
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <span className="text-accent font-semibold tracking-wide text-sm uppercase mb-2 block">Get In Touch</span>
                        <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-8">
                            Let's Talk About <br /> Your <span className="text-gradient">Project</span>
                        </h1>
                        <p className="text-lg text-secondary mb-12">
                            Have an idea? We'd love to help you bring it to life. Send us a message and we'll get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-accent mr-6 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-1">Our Office</h4>
                                    <p className="text-secondary">123 Business Avenue, Tech City, TC 90210</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-accent mr-6 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-1">Email Us</h4>
                                    <p className="text-secondary">hello@agency.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-accent mr-6 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-1">Call Us</h4>
                                    <p className="text-secondary">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="glass-panel p-8 md:p-10 rounded-3xl">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Subject</label>
                                <input type="text" className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Project Inquiry" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-colors shadow-lg flex items-center justify-center gap-2">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
