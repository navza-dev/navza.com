import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <Link to="/">
                            <h3><span style={{ color: 'black' }}>Nav</span><span className="text-highlight">Za</span></h3>
                        </Link>
                        <p>
                            Designing, building, and growing modern businesses through technology and strategic marketing.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="footer-title" style={{ color: 'black' }}>Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/web-development">Web Development</Link></li>
                            <li><Link to="/services/mobile-app-development">Mobile Apps</Link></li>
                            <li><Link to="/services/custom-software">Custom Software</Link></li>
                            <li><Link to="/services/seo">SEO & Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="footer-title" style={{ color: 'black' }}>Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/case-studies">Portfolio</Link></li>
                            <li><Link to="/process">How We Work</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="footer-title" style={{ color: 'black' }}>Connect</h4>
                        <ul className="footer-links">
                            <li><a href="mailto:navza.developers@gmail.com">navza.developers@gmail.com</a></li>
                            <li><Link to="/contact">Book a Consultation</Link></li>
                        </ul>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', fontSize: '1.2rem' }}>
                            <a href="#" className="text-muted hover:text-white"><FaLinkedin /></a>
                            <a href="#" className="text-muted hover:text-white"><FaTwitter /></a>
                            <a href="#" className="text-muted hover:text-white"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NavZa. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
