import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	const isDarkBg = scrolled || isHomePage;
	const linkColor = isDarkBg ? 'text-gray-300 hover:text-white' : 'text-secondary hover:text-primary';
	const logoColor = isDarkBg ? 'text-white' : 'text-primary';
	const toggleColor = isDarkBg ? 'text-gray-300 hover:text-white' : 'text-primary hover:text-accent';
	const accentColor = isDarkBg ? 'text-accent' : 'text-blue-600';

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
			className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
				}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
						<div className={`text-2xl font-display font-bold tracking-widest group-hover:text-accent transition-colors ${logoColor}`}>
							TECH<span className={accentColor}>POINT</span>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{navLinks.map((link) => (
								<div key={link.name} className="relative group">
									{link.dropdown ? (
										<div
											className="relative"
											onMouseEnter={() => setServicesOpen(true)}
											onMouseLeave={() => setServicesOpen(false)}
										>
											<button
												className={`${isDarkBg ? 'text-gray-300 hover:text-accent' : 'text-secondary hover:text-accent'} px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1`}
											>
												{link.name}
												<ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
											</button>

											{/* Dropdown Menu */}
											<div
												className={`absolute left-0 mt-0 w-48 bg-primary/95 backdrop-blur-xl rounded-b-lg shadow-xl border-t-2 border-accent overflow-hidden transition-all duration-300 origin-top ${servicesOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
													}`}
											>
												<div className="py-2">
													{link.dropdown.map((item) => (
														<NavLink
															key={item.name}
															to={item.path}
															className={({ isActive }) =>
																`block px-4 py-3 text-sm transition-colors border-l-2 ${isActive
																	? 'border-accent bg-white/5 text-accent'
																	: 'border-transparent text-gray-300 hover:bg-white/5 hover:text-white'
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
												`text-sm font-medium transition-all duration-300 relative px-3 py-2 ${isActive ? accentColor : linkColor
												}`
											}
										>
											{({ isActive }) => (
												<>
													{link.name}
													<span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
												</>
											)}
										</NavLink>
									)}
								</div>
							))}
						</div>
					</div>

					{/* CTA Button */}
					<div className="hidden md:block">
						<Link to="/contact" className="bg-accent hover:bg-opacity-90 text-primary font-bold py-2 px-6 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transform hover:-translate-y-0.5 text-sm">
							Get Started
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${toggleColor} ${isDarkBg ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
						>
							{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary/95 backdrop-blur-xl border-t border-white/10 shadow-xl">
					{navLinks.map((link) => (
						<div key={link.name}>
							{link.dropdown ? (
								<>
									<div className="px-3 py-2 text-base font-medium text-gray-300">{link.name}</div>
									<div className="pl-4 space-y-1 border-l-2 border-white/10 ml-3">
										{link.dropdown.map((subLink) => (
											<NavLink
												key={subLink.name}
												to={subLink.path}
												onClick={() => setIsOpen(false)}
												className={({ isActive }) =>
													`block px-3 py-2 rounded-md text-sm font-medium ${isActive
														? 'text-accent bg-white/5'
														: 'text-gray-400 hover:text-white hover:bg-white/5'
													}`
												}
											>
												{subLink.name}
											</NavLink>
										))}
									</div>
								</>
							) : (
								<NavLink
									to={link.path}
									onClick={() => setIsOpen(false)}
									className={({ isActive }) =>
										`block px-3 py-2 rounded-md text-base font-medium ${isActive
											? 'text-accent bg-white/5'
											: 'text-gray-300 hover:text-white hover:bg-white/5'
										}`
									}
								>
									{link.name}
								</NavLink>
							)}
						</div>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
