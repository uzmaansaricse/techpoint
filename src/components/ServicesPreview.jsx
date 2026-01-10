import React from 'react';
import { Monitor, ShoppingCart, Smartphone, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Premium Web Design',
        description: 'Handcrafted digital experiences designed to captivate and convert.',
        icon: <Monitor size={24} />,
        link: '/services'
    },
    {
        title: 'E-commerce Solutions',
        description: 'Seamless shopping platforms tailored for the Indian market.',
        icon: <ShoppingCart size={24} />,
        link: '/ecommerce'
    },
    {
        title: 'Mobile App Development',
        description: 'Native performance for iOS and Android to extend your reach.',
        icon: <Smartphone size={24} />,
        link: '/app-development'
    },
    {
        title: 'SEO & Digital Growth',
        description: 'Data-driven strategies to rank higher on Google India.',
        icon: <Search size={24} />,
        link: '/services'
    }
];

const ServicesPreview = () => {
    return (
        <section className="py-32 bg-bg-light relative overflow-hidden">
            {/* Minimalist Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                    <circle cx="400" cy="0" r="300" fill="none" stroke="#D4AF37" strokeWidth="1" />
                    <circle cx="400" cy="0" r="350" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="10 10" />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="font-cursive text-3xl text-accent mb-2 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                            World-Class Solutions <br />
                            <span className="italic font-serif text-secondary">Global Standards, Indian Soul</span>
                        </h2>
                    </div>
                    <Link to="/services" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors group">
                        View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link
                            to={service.link}
                            key={index}
                            className="group bg-white p-10 h-full flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:border-gold/40 hover:shadow-gold hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-none bg-bg-light border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-gold transition-colors duration-300 mb-8 shadow-sm">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-display font-bold text-primary mb-4 transition-colors duration-300 group-hover:text-primary">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-secondary text-sm leading-relaxed mb-8 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>

                            {/* Learn More */}
                            <div className="relative z-10 flex items-center text-xs font-bold uppercase tracking-widest text-gold transition-all duration-300 group-hover:text-primary">
                                Explore <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
                        View All Services <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
