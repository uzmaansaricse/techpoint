import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Sitemap = () => {
    const links = [
        {
            category: "Main",
            items: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Career", path: "/career" },
            ]
        },
        {
            category: "Services",
            items: [
                { name: "All Services", path: "/services" },
                { name: "E-commerce Solutions", path: "/ecommerce" },
                { name: "App Development", path: "/app-development" },
            ]
        },
        {
            category: "Portfolio",
            items: [
                { name: "Top Projects", path: "/top-projects" },
            ]
        },
        {
            category: "Legal",
            items: [
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
            ]
        }
    ];

    return (
        <div className="pt-32 pb-20 bg-bg-light min-h-screen">
            <SEO title="Sitemap" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-16 text-center">Sitemap</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    {links.map((section, idx) => (
                        <div key={idx} className="bg-white p-8 border border-gray-100 hover:border-gold/30 hover:shadow-gold transition-all duration-300">
                            <h2 className="text-xl font-display font-bold text-primary mb-6 border-b border-gray-100 pb-2">
                                {section.category}
                            </h2>
                            <ul className="space-y-4">
                                {section.items.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            to={link.path}
                                            className="flex items-center gap-2 text-secondary hover:text-gold transition-colors group"
                                        >
                                            <ArrowRight size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
