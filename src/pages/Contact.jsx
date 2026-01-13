import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaWhatsapp, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        alert("Thanks for contacting Navza! We'll get back to you shortly.");
    };

    return (
        <div className="contact-page" style={{ paddingTop: '80px' }}>
            <section className="section">
                <div className="container">
                    <motion.div
                        style={{ textAlign: 'center', marginBottom: '5rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>Get In Touch</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Ready to start your digital transformation? Contact us today for a free consultation.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 style={{ marginBottom: '2rem' }}>Contact Information</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                                    <FaWhatsapp style={{ fontSize: '2rem', color: 'var(--color-secondary)' }} />
                                    <div>
                                        <h4 style={{ marginBottom: '0.2rem' }}>WhatsApp</h4>
                                        <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>+94 78 100 6829</p>
                                    </div>
                                </div>

                                <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                                    <FaEnvelope style={{ fontSize: '2rem', color: 'var(--color-secondary)' }} />
                                    <div>
                                        <h4 style={{ marginBottom: '0.2rem' }}>Email</h4>
                                        <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>navza.developers@gmail.com</p>
                                    </div>
                                </div>

                                <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                                    <FaCalendarAlt style={{ fontSize: '2rem', color: 'var(--color-secondary)' }} />
                                    <div>
                                        <h4 style={{ marginBottom: '0.2rem' }}>Book a Meeting</h4>
                                        <a href="#" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Schedule a Call</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-card"
                        >
                            <h3 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h3>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
                                        <input type="text" placeholder="Your Name" style={{
                                            width: '100%',
                                            padding: '0.8rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '0.5rem',
                                            color: 'var(--color-text-primary)', // Fixed input color for light theme visibility
                                            outline: 'none'
                                        }} required />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                                        <input type="email" placeholder="Your Email" style={{
                                            width: '100%',
                                            padding: '0.8rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '0.5rem',
                                            color: 'var(--color-text-primary)', // Fixed input color for light theme visibility
                                            outline: 'none'
                                        }} required />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Service Interested In</label>
                                    <select style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '0.5rem',
                                        color: 'var(--color-text-primary)', // Fixed input color for light theme visibility
                                        outline: 'none'
                                    }}>
                                        <option value="web">Web Development</option>
                                        <option value="app">Mobile App</option>
                                        <option value="seo">SEO & Marketing</option>
                                        <option value="software">Custom Software</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
                                    <textarea rows="4" placeholder="Tell us about your project..." style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '0.5rem',
                                        color: 'var(--color-text-primary)', // Fixed input color for light theme visibility
                                        outline: 'none',
                                        resize: 'none'
                                    }} required></textarea>
                                </div>

                                <Button variant="primary" type="submit" style={{ justifyContent: 'center' }}>Send Message</Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
