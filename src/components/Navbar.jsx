import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const location = useLocation();

	// In the new Luxury Theme, we use a consistent "Light Glass" look
	// Text is always Charcoal, Accents are Gold.
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{
			name: 'Services',
			path: '/services',
			dropdown: [
				{ name: 'All Services', path: '/services' },
				{ name: 'E-commerce', path: '/ecommerce' },
				{ name: 'App Development', path: '/app-development' },
			],
		},
		{ name: 'Projects', path: '/top-projects' },
		{ name: 'Career', path: '/career' },
		{ name: 'Contact', path: '/contact' },
	];

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-500 ${scrolled
				? 'bg-white/90 backdrop-blur-md shadow-glass py-3'
				: 'bg-transparent py-5'
				}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
						<div className="text-2xl font-display font-bold tracking-widest text-primary transition-colors group-hover:text-gold">
							TECH<span className="text-gold font-serif italic">Point</span>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:block">
						<div className="ml-10 flex items-baseline space-x-10">
							{navLinks.map((link) => (
								<div key={link.name} className="relative group">
									{link.dropdown ? (
										<div
											className="relative"
											onMouseEnter={() => setServicesOpen(true)}
											onMouseLeave={() => setServicesOpen(false)}
										>
											<button
												className="text-primary hover:text-gold px-2 py-2 text-sm font-medium tracking-wide transition-colors flex items-center gap-1 uppercase"
											>
												{link.name}
												<ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
											</button>

											{/* Dropdown Menu */}
											<div
												className={`absolute left-0 top-full pt-4 w-56 transition-all duration-300 transform origin-top ${servicesOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}
											>
												<div className="bg-white rounded-none shadow-gold border-t-2 border-accent overflow-hidden py-2">
													{link.dropdown.map((item) => (
														<NavLink
															key={item.name}
															to={item.path}
															className={({ isActive }) =>
																`block px-6 py-3 text-sm transition-all duration-300 ${isActive
																	? 'bg-gold/10 text-accent font-semibold'
																	: 'text-secondary hover:bg-slate-50 hover:text-primary hover:pl-7'
																}`
															}
														>
															{item.name}
														</NavLink>
													))}
												</div>
											</div>
										</div>
									) : (
										<NavLink
											to={link.path}
											className={({ isActive }) =>
												`text-sm font-medium tracking-wide transition-all duration-300 relative px-2 py-2 uppercase ${isActive ? 'text-accent' : 'text-primary hover:text-accent'
												}`
											}
										>
											{({ isActive }) => (
												<>
													{link.name}
													<span className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent transform origin-left transition-transform duration-500 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
												</>
											)}
										</NavLink>
									)}
								</div>
							))}
						</div>
					</div>

					{/* CTA Button */}
					<div className="hidden lg:block">
						<Link to="/contact" className="relative px-8 py-3 bg-primary text-white text-xs font-bold tracking-widest uppercase overflow-hidden group">
							<span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Get Started</span>
							<div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="lg:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 text-primary hover:text-accent focus:outline-none transition-colors"
						>
							{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
				<div className="absolute top-5 right-5">
					<button onClick={() => setIsOpen(false)} className="p-2 text-primary hover:text-accent">
						<X className="w-8 h-8" />
					</button>
				</div>

				<div className="flex flex-col items-center justify-center h-full space-y-8">
					{navLinks.map((link) => (
						<div key={link.name} className="w-full text-center">
							{link.dropdown ? (
								<div className="flex flex-col items-center gap-4">
									<span className="text-2xl font-display font-bold text-gray-400 uppercase tracking-widest">{link.name}</span>
									{link.dropdown.map(sub => (
										<NavLink
											key={sub.name}
											to={sub.path}
											onClick={() => setIsOpen(false)}
											className={({ isActive }) => `text-lg ${isActive ? 'text-accent font-serif italic' : 'text-primary'}`}
										>
											{sub.name}
										</NavLink>
									))}
								</div>
							) : (
								<NavLink
									to={link.path}
									onClick={() => setIsOpen(false)}
									className={({ isActive }) =>
										`text-3xl font-display font-bold uppercase tracking-widest transition-colors ${isActive
											? 'text-accent'
											: 'text-primary hover:text-accent'
										}`
									}
								>
									{link.name}
								</NavLink>
							)}
						</div>
					))}

					<div className="pt-10">
						<Link to="/contact" onClick={() => setIsOpen(false)} className="px-10 py-4 bg-primary text-white text-sm font-bold tracking-widest uppercase hover:bg-gold transition-colors">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
