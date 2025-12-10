import React from 'react';
import { Monitor, ShoppingCart, Smartphone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Static & Dynamic Websites',
        description: 'Fast, responsive, and SEO-friendly websites tailored to your brand.',
        icon: <Monitor size={32} />,
        color: 'bg-blue-500',
        link: '/services'
    },
    {
        title: 'E-commerce Solutions',
        description: 'Full-featured online stores with payment gateways and easy management.',
        icon: <ShoppingCart size={32} />,
        color: 'bg-indigo-500',
        link: '/ecommerce'
    },
    {
        title: 'Mobile App Development',
        description: 'Native Android & iOS apps connecting you with users on the go.',
        icon: <Smartphone size={32} />,
        color: 'bg-purple-500',
        link: '/app-development'
    },
    {
        title: 'SEO Optimization',
        description: 'Boost your visibility on Google with advanced on-page SEO strategies.',
        icon: <Search size={32} />,
        color: 'bg-green-500',
        link: '/services'
    }
];

const ServicesPreview = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">My Services</h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">End-to-end digital solutions for your business growth.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link
                            to={service.link}
                            key={index}
                            className="group glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 block"
                        >
                            <div className={`w-14 h-14 rounded-xl ${service.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed mb-4">{service.description}</p>

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
