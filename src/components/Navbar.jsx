import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Button from './Button';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/case-studies' }, // Adjusted to match user request seeing it as "Portfolio" tab but linking to case-studies
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    // Force "scrolled" style (solid bg) on non-home pages to ensure visibility
    const navbarClass = `navbar ${scrolled || !isHome ? 'scrolled' : ''}`;

    return (
        <nav className={navbarClass}>
            <div className="container navbar-container">
                <NavLink to="/" className="navbar-logo">
                    <img src={logo} alt="NavZa" style={{ height: '70px', borderRadius: '5px' }} />
                </NavLink>

                {/* Desktop Menu */}
                <div className="navbar-links desktop">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="navbar-actions desktop">
                    <Button variant="primary" to="/contact">Get a Quote</Button>
                </div>

                {/* Mobile Toggle */}
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className="mobile-nav-link"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="mobile-actions">
                            <Button variant="primary" to="/contact" style={{ width: '100%', justifyContent: 'center' }}>Get a Quote</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
