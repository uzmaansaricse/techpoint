import React from 'react';
import { Monitor, ShoppingCart, Smartphone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Static & Dynamic Websites',
        description: 'Fast, responsive, and SEO-friendly websites crafted for your brand.',
        icon: <Monitor size={28} />,
        color: 'from-blue-500 to-blue-600',
        link: '/services'
    },
    {
        title: 'E-commerce Solutions',
        description: 'Complete online store solutions with payments, orders & admin control.',
        icon: <ShoppingCart size={28} />,
        color: 'from-indigo-500 to-indigo-600',
        link: '/ecommerce'
    },
    {
        title: 'Mobile App Development',
        description: 'High-performing Android & iOS apps to grow your digital reach.',
        icon: <Smartphone size={28} />,
        color: 'from-purple-500 to-purple-600',
        link: '/app-development'
    },
    {
        title: 'SEO Optimization',
        description: 'Increase traffic & ranking with advanced SEO and analytics.',
        icon: <Search size={28} />,
        color: 'from-green-500 to-green-600',
        link: '/services'
    }
];

const ServicesPreview = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Blur Elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
                        My Services
                    </h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        End-to-end digital solutions designed to help businesses grow faster.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link
                            to={service.link}
                            key={index}
                            className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl 
                                       hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 block"
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} 
                                            text-white flex items-center justify-center mb-6 shadow-lg 
                                            group-hover:scale-110 transition-transform`}
                            >
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-secondary text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Learn More */}
                            <span className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                Learn More <span>→</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
