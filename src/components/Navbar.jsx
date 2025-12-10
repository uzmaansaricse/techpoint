import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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

	// Small presentational subcomponents
	const Brand = () => (
		// Use logo from public folder; show compact label on md+
		<Link to="/" className="flex items-center gap-3 group">
			<div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center shadow-lg bg-white/5 transform transition-transform group-hover:scale-105">
				{/* Main logo file (logo.jpeg) */}
				<img src="/logo.jpeg" alt="AgencyX logo" loading="lazy" className="w-full h-full object-contain" />
			</div>
			{/* <span className="hidden md:inline-block text-lg font-semibold tracking-tight text-primary">AgencyX</span> */}
		</Link>
	);

	const ServicesDropdown = () => (
		<div className="relative">
			<button
				type="button"
				aria-haspopup="menu"
				aria-expanded={['/services', '/ecommerce', '/app-development'].includes(location.pathname)}
				className={`flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${['/services', '/ecommerce', '/app-development'].includes(location.pathname) ? 'text-accent bg-white/10' : 'text-secondary hover:text-accent hover:bg-white/5'}`}
			>
				<span>Services</span>
				<ChevronDown size={14} className="ml-1 transition-transform" />
			</button>

			{/* Hover + focus friendly panel: show on group hover OR when focused (group-focus-within). removed pointer-events-none to allow keyboard access */}
			<div className="absolute top-full left-0 mt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-focus-within:opacity-100 group-hover:visible group-focus-within:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
				<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-gray-100">
					{/* grouped list with subtle dividers */}
					{serviceLinks.map((service, idx) => (
						<React.Fragment key={idx}>
							<Link
								to={service.path}
								className="flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-accent hover:bg-white/5 rounded-md transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
							>
								{/* placeholder dot to give a visual anchor */}
								<span className="w-2 h-2 bg-slate-300 rounded-full" />
								<span>{service.name}</span>
							</Link>
							{idx < serviceLinks.length - 1 && <div className="mx-3 my-1 border-t border-gray-100" />}
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);

	const DesktopNav = () => (
		<nav className="hidden md:flex items-center gap-3">
			<Link to="/" className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${location.pathname === '/' ? 'text-accent bg-white/10' : 'text-secondary hover:text-accent hover:bg-white/5'}`}>Home</Link>

			<Link to="/about" className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${location.pathname === '/about' ? 'text-accent bg-white/10' : 'text-secondary hover:text-accent hover:bg-white/5'}`}>About</Link>

			{/* Wrap ServicesDropdown in a group to enable hover reveal */}
			<div className="group">
				<ServicesDropdown />
			</div>

			<Link to="/top-projects" className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${location.pathname === '/top-projects' ? 'text-accent bg-white/10' : 'text-secondary hover:text-accent hover:bg-white/5'}`}>Top Projects</Link>

			<Link to="/career" className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${location.pathname === '/career' ? 'text-accent bg-white/10' : 'text-secondary hover:text-accent hover:bg-white/5'}`}>Career</Link>

			<Link to="/contact" className="ml-3 px-4 py-2 bg-primary text-white text-sm font-medium rounded-full shadow-md hover:bg-accent transition-transform hover:-translate-y-0.5">Contact</Link>
		</nav>
	);

	const MobileMenu = () => (
		// modal-like overlay
		<div className="md:hidden">
			<div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity" />
			<div className="fixed inset-0 flex items-start justify-center pt-20 z-50 px-4">
				<div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-6">
					<div className="flex items-center justify-between mb-4">
						<Brand />
						<button className="p-2 rounded-md text-primary hover:bg-white/5" onClick={() => setIsOpen(false)} aria-label="Close menu">
							<X size={20} />
						</button>
					</div>

					<div className="flex flex-col gap-2">
						<Link to="/" className="text-base font-medium py-3 rounded-md text-secondary hover:bg-white/5">Home</Link>
						<Link to="/about" className="text-base font-medium py-3 rounded-md text-secondary hover:bg-white/5">About</Link>

						<div className="py-2">
							<button
								onClick={() => setDropdownOpen(!dropdownOpen)}
								className="flex items-center justify-between w-full text-base font-medium text-secondary px-2 py-2 rounded-md hover:bg-white/5 transition-colors"
								aria-expanded={dropdownOpen}
							>
								<span>Services</span>
								<ChevronDown size={16} className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
							</button>

							{dropdownOpen && (
								<div className="mt-3 grid gap-2">
									{serviceLinks.map((service, idx) => (
										<Link key={idx} to={service.path} className="text-sm text-slate-600 py-2 block rounded-md hover:bg-white/5 px-3">
											{service.name}
										</Link>
									))}
								</div>
							)}
						</div>

						<Link to="/top-projects" className="text-base font-medium py-3 rounded-md text-secondary hover:bg-white/5">Top Projects</Link>
						<Link to="/career" className="text-base font-medium py-3 rounded-md text-secondary hover:bg-white/5">Career</Link>
						<Link to="/contact" className="text-base font-medium py-3 rounded-md bg-primary/95 text-white text-center">Contact</Link>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-sm bg-white/60 border-b border-gray-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
			<div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 flex items-center justify-between gap-6">
				<Brand />

				{/* Desktop Menu */}
				<DesktopNav />

				{/* Mobile Toggle */}
				<button className="md:hidden p-2 rounded-md text-primary hover:bg-white/5 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
					{isOpen ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			{/* Mobile Menu Modal */}
			{isOpen && <MobileMenu />}
		</header>
	);
};

export default Navbar;
