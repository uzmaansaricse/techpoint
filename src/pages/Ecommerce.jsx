import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { ShoppingBag, CreditCard, BarChart2, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const features = [
    {
        icon: <ShoppingBag size={24} />,
        title: "Custom Storefronts",
        desc: "Tailored designs that reflect your brand identity and provide unique shopping experiences."
    },
    {
        icon: <CreditCard size={24} />,
        title: "Seamless Payments",
        desc: "Integration with all major Indian and international payment gateways (Razorpay, Stripe, UPI)."
    },
    {
        icon: <BarChart2 size={24} />,
        title: "Analytics & Insights",
        desc: "Deep integration with Google Analytics and custom dashboards to track sales and growth."
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Secure Infrastructure",
        desc: "SSL certification, secure checkout flows, and regular security audits to protect customer data."
    }
];

const Ecommerce = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();

        // Header Reveal
        tl.fromTo(".ecom-header-item",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }
        );

        // Features Stagger
        gsap.fromTo(".feature-card",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".features-grid",
                    start: "top 80%"
                }
            }
        );

        // Tech Stack Reveal
        gsap.fromTo(".tech-stack-section",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".tech-stack-section",
                    start: "top 75%"
                }
            }
        );

    }, { scope: container });

    return (
        <div ref={container} className="pt-32 pb-20 bg-bg-light min-h-screen overflow-x-hidden">
            <SEO title="E-commerce Solutions" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Hero Section */}
                <div className="text-center mb-24 max-w-4xl mx-auto relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -z-10"></div>
                    <span className="ecom-header-item font-cursive text-4xl text-accent mb-4 block transform -rotate-3">
                        Online Growth
                    </span>
                    <h1 className="ecom-header-item text-5xl md:text-7xl font-display font-bold text-primary mb-8 leading-[1.1]">
                        Digital Stores That <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Sell & Scale</span>
                    </h1>
                    <p className="ecom-header-item text-xl text-secondary leading-relaxed max-w-3xl mx-auto font-light">
                        We build robust, scalable, and high-converting e-commerce platforms.
                        Whether you need a custom MERN stack solution or a powered Shopify store, we deliver excellence.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="features-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {features.map((feature, idx) => (
                        <div key={idx} className="feature-card bg-white p-8 border border-gray-100 group hover:border-gold/30 hover:shadow-gold transition-all duration-500">
                            <div className="w-14 h-14 bg-bg-light border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:border-gold group-hover:text-gold transition-all duration-500 shadow-sm group-hover:shadow-md">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-primary mb-3">{feature.title}</h3>
                            <p className="text-secondary text-sm font-light leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Tech Stack / Platforms */}
                <div className="tech-stack-section bg-white border border-gray-100 p-12 lg:p-16 mb-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Built on Proven Technology</h2>
                            <p className="text-secondary text-lg font-light leading-relaxed mb-8">
                                We choose the right tools for your specific business needs. From lightweight headless CMS to full-scale enterprise architectures.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Shopify & Shopify Plus', 'WooCommerce', 'Custom MERN Stack', 'Headless Commerce', 'Payment Gateway Integration', 'Inventory Systems'].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm font-bold text-primary">
                                        <Check size={16} className="text-accent mr-2" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-bg-light p-8 border border-gray-100">
                            <h4 className="font-display font-bold text-lg mb-6 text-center">Our Development Process</h4>
                            <div className="space-y-6">
                                {[
                                    { step: "01", text: "Requirement Analysis & Planning" },
                                    { step: "02", text: "UI/UX Design & Prototyping" },
                                    { step: "03", text: "Development & Integration" },
                                    { step: "04", text: "Testing & Launch" }
                                ].map((s, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-accent font-bold font-display text-xl">{s.step}</span>
                                        <div className="h-[1px] bg-gray-200 flex-1"></div>
                                        <span className="text-sm text-secondary font-medium">{s.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary text-white p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 !text-white">Ready to start selling?</h2>
                        <p className="text-slate-300 mb-8 max-w-xl mx-auto font-light">Let's build an online store that drives revenue and builds customer loyalty.</p>
                        <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-all duration-300 group">
                            Get A Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ecommerce;
