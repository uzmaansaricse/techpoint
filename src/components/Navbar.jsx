import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setDropdownOpen(false);
    }, [location]);

    const serviceLinks = [
        { name: 'Static & Dynamic Websites', path: '/services' },
        { name: 'Full-Stack Development', path: '/services' },
        { name: 'E-commerce Solutions', path: '/ecommerce' },
        { name: 'Mobile App Development', path: '/app-development' },
        { name: 'UI/UX Design', path: '/services' },
        { name: 'SEO Optimization', path: '/services' },
        { name: 'Hosting & Maintenance', path: '/services' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                    <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg text-white transform transition-transform group-hover:rotate-12">
                        <Code2 size={24} />
                    </div>
                    <span className="text-2xl font-bold font-display tracking-tight text-primary">
                        Agency<span className="text-accent">X</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link to="/" className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === '/' ? 'text-accent' : 'text-secondary'}`}>Home</Link>
                    <Link to="/about" className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === '/about' ? 'text-accent' : 'text-secondary'}`}>About</Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button
                            className={`flex items-center text-sm font-medium transition-colors hover:text-accent ${['/services', '/ecommerce', '/app-development'].includes(location.pathname) ? 'text-accent' : 'text-secondary'
                                }`}
                        >
                            Services <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform" />
                        </button>
                        <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                            <div className="glass-panel rounded-xl p-2 flex flex-col shadow-xl">
                                {serviceLinks.map((service, idx) => (
                                    <Link
                                        key={idx}
                                        to={service.path}
                                        className="px-4 py-3 text-sm text-secondary hover:text-accent hover:bg-slate-50 rounded-lg transition-colors text-left"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/top-projects" className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === '/top-projects' ? 'text-accent' : 'text-secondary'}`}>Top Projects</Link>
                    <Link to="/career" className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === '/career' ? 'text-accent' : 'text-secondary'}`}>Career</Link>

                    <Link
                        to="/contact"
                        className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full shadow-lg hover:bg-accent transition-colors transform hover:-translate-y-0.5"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-gray-100 p-6 flex flex-col space-y-4 shadow-xl animate-slide-up h-screen overflow-y-auto pb-32">
                    <Link to="/" className="text-base font-medium py-2 border-b border-gray-50 text-secondary">Home</Link>
                    <Link to="/about" className="text-base font-medium py-2 border-b border-gray-50 text-secondary">About</Link>

                    <div className="py-2 border-b border-gray-50">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center justify-between w-full text-base font-medium text-secondary"
                        >
                            Services <ChevronDown size={16} className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {dropdownOpen && (
                            <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-slate-100 ml-1">
                                {serviceLinks.map((service, idx) => (
                                    <Link key={idx} to={service.path} className="text-sm text-slate-500 py-1 block">
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/top-projects" className="text-base font-medium py-2 border-b border-gray-50 text-secondary">Top Projects</Link>
                    <Link to="/career" className="text-base font-medium py-2 border-b border-gray-50 text-secondary">Career</Link>
                    <Link to="/contact" className="text-base font-medium py-2 text-secondary">Contact</Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
