import React from 'react';
import SEO from '../components/SEO';
import { Monitor, ShoppingCart, Smartphone, Search, Server, PenTool, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        icon: <Monitor size={32} />,
        title: 'Bespoke Web Design',
        description: 'From elegance to function, we craft websites that serve as the digital ambassador of your brand.',
        features: ['Responsive Architecture', 'Lightning Fast', 'SEO Optimized', 'CMS Integration'],
        price: '₹25,000',
        ideal: 'Brands & Startups'
    },
    {
        icon: <Server size={32} />,
        title: 'Full-Stack Solutions',
        description: 'Scalable, robust web applications built on the cutting-edge MERN stack.',
        features: ['API Development', 'Secure Database', 'Real-time capability', 'Cloud Deployment'],
        price: '₹45,000',
        ideal: 'SaaS & Enterprise'
    },
    {
        icon: <ShoppingCart size={32} />,
        title: 'E-commerce Suites',
        description: 'Complete digital storefronts tailored to maximize your sales and streamline operations.',
        features: ['Inventory Management', 'Payment Gateways', 'Admin Dashboard', 'Analytics'],
        price: '₹40,000',
        ideal: 'Retailers'
    },
    {
        icon: <Smartphone size={32} />,
        title: 'Mobile Applications',
        description: 'High-fidelity mobile apps that put your business in your customer’s hands.',
        features: ['iOS & Android', 'React Native', 'Smooth UX', 'App Store Launch'],
        price: '₹60,000',
        ideal: 'Growth Ventures'
    },
    {
        icon: <PenTool size={32} />,
        title: 'UI/UX Design',
        description: 'Crafting intuitive journeys and stunning visuals that keep users engaged.',
        features: ['Wireframing', 'Prototyping', 'User Research', 'Brand Guidelines'],
        price: '₹15,000',
        ideal: 'Product Teams'
    },
    {
        icon: <Search size={32} />,
        title: 'SEO & Growth',
        description: 'Data-driven strategies to ensure your brand is seen by the right audience.',
        features: ['On-Page Optimization', 'Content Strategy', 'Technical Audit', 'Ranking Reports'],
        price: '₹10,000 / mo',
        ideal: 'All Businesses'
    }
];

const ServicesPage = () => {
    return (
        <div className="pt-32 pb-24 bg-bg-light min-h-screen">
            <SEO title="Services" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in max-w-3xl mx-auto">
                    <span className="font-cursive text-4xl text-accent mb-4 block transform -rotate-2">
                        What We Offer
                    </span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
                        Excellence in Every <br />
                        <span className="font-serif italic text-secondary">Pixel & Line of Code</span>
                    </h1>
                    <p className="text-lg text-secondary mx-auto leading-relaxed font-light">
                        We provide end-to-end digital solutions, meticulously crafted to help your business thrive in the modern landscape.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <div key={index} className="bg-white p-8 border border-gray-100 hover:border-gold/30 hover:shadow-gold transition-all duration-500 group relative flex flex-col">
                            {/* Top Badge */}
                            <div className="absolute top-0 right-0 bg-primary text-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {service.ideal}
                            </div>

                            <div className="w-14 h-14 bg-bg-light border border-gray-100 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-gold transition-colors duration-500">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-display font-bold text-primary mb-4">{service.title}</h3>
                            <p className="text-secondary mb-8 leading-relaxed text-sm font-light min-h-[80px]">
                                {service.description}
                            </p>

                            <ul className="space-y-4 mb-10 flex-1">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-secondary font-medium">
                                        <Check size={14} className="text-accent mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-gray-50 flex items-end justify-between">
                                <div>
                                    <span className="text-[10px] text-secondary uppercase tracking-widest block mb-1">Starting At</span>
                                    <div className="text-xl font-bold text-primary font-display">{service.price}</div>
                                </div>
                                <Link to="/contact" className="w-10 h-10 border border-primary/20 flex items-center justify-center rounded-full text-primary hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-32 text-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

                    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8">Ready to Elevate Your Brand?</h2>

                    <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-accent hover:translate-y-[-2px] transition-all duration-300 group">
                        Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
