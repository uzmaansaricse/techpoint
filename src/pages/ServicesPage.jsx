import React from 'react';
import SEO from '../components/SEO';
import { Monitor, ShoppingCart, Smartphone, Search, Server, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        icon: <Monitor size={40} />,
        title: 'Static & Dynamic Websites',
        description: 'From simple landing pages to complex corporate portals, we build responsive, fast, and secure websites.',
        features: ['Responsive Design', 'Fast Loading', 'SEO Friendly', 'CMS Integration'],
        price: '₹15,000',
        ideal: 'Startups & Small Business'
    },
    {
        icon: <Server size={40} />,
        title: 'Full-Stack Development',
        description: 'Robust web applications using the MERN Stack (MongoDB, Express, React, Node.js).',
        features: ['API Development', 'Database Design', 'Real-time Features', 'Scalable Architecture'],
        price: '₹40,000',
        ideal: 'Custom SaaS & Portals'
    },
    {
        icon: <ShoppingCart size={40} />,
        title: 'E-commerce Solutions',
        description: 'Custom online stores or CMS-based solutions to help you sell more online.',
        features: ['Product Management', 'Payment Gateway', 'Order Tracking', 'Admin Panel'],
        price: '₹35,000',
        ideal: 'Retail & Brands'
    },
    {
        icon: <Smartphone size={40} />,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        features: ['React Native', 'Flutter', 'UI/UX Design', 'App Store Publish'],
        price: '₹50,000',
        ideal: 'Startups & Enterprise'
    },
    {
        icon: <PenTool size={40} />,
        title: 'UI/UX Design',
        description: 'User-centric designs that look great and provide an intuitive experience.',
        features: ['Wireframing', 'Prototyping', 'User Research', 'Brand Identity'],
        price: '₹10,000',
        ideal: 'New Products & Rebrands'
    },
    {
        icon: <Search size={40} />,
        title: 'SEO Optimization',
        description: 'Improve your search rankings and drive more organic traffic to your site.',
        features: ['On-Page SEO', 'Technical SEO', 'Keyword Research', 'Performance Tuning'],
        price: '₹8,000 / mo',
        ideal: 'Growth Focused Business'
    }
];

const ServicesPage = () => {
    return (
        <div className="pt-24 pb-20 bg-bg-light min-h-screen">
            <SEO title="Services" />
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16 animate-fade-in">
                    <span className="text-accent font-semibold tracking-wide text-sm uppercase mb-2 block">What We Do</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                        Comprehensive <span className="text-gradient">Digital Services</span>
                    </h1>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        We provide end-to-end solutions to help your business thrive in the digital landscape.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-slate-100 group relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 bg-accent/5 text-accent text-xs font-bold px-3 py-1 rounded-bl-lg">
                                Ideal for: {service.ideal}
                            </div>

                            <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                            <p className="text-secondary mb-6">{service.description}</p>
                            <ul className="space-y-2 mb-8 flex-1">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-slate-500">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                <div>
                                    <span className="text-xs text-secondary uppercase font-semibold">Starting from</span>
                                    <div className="text-xl font-bold text-primary">{service.price}</div>
                                </div>
                                <Link to="/contact" className="px-4 py-2 bg-slate-50 text-primary font-medium rounded-lg hover:bg-accent hover:text-white transition-colors text-sm">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <div className="glass-panel p-10 rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                        <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
                        <Link to="/contact" className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-full shadow-lg hover:bg-accent transition-colors">
                            Get a Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
