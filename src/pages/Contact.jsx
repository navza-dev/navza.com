import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { FaWhatsapp, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// REPLACE THESE WITH YOUR EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
// Sign up at https://www.emailjs.com/
const SERVICE_ID = 'service_1p464o7';
const TEMPLATE_ID = 'template_8afysdb';
const PUBLIC_KEY = '_NajHpwWTG1qPzV1f';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // Check if keys are set (simple validation for the user)
        if (SERVICE_ID === 'YOUR_SERVICE_ID') {
            alert('Please configure your EmailJS keys in src/pages/Contact.jsx to send emails.');
            setLoading(false);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus('error');
            });
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

                            {status === 'success' && (
                                <div style={{ padding: '1rem', marginBottom: '1rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: '0.5rem', textAlign: 'center' }}>
                                    Message sent successfully! We'll be in touch soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div style={{ padding: '1rem', marginBottom: '1rem', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '0.5rem', textAlign: 'center' }}>
                                    Something went wrong. Please try again or email us directly.
                                </div>
                            )}

                            <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
                                        <input type="text" name="user_name" placeholder="Your Name" style={{
                                            width: '100%',
                                            padding: '0.8rem',
                                            background: 'rgba(255,255,255,1)', // Changed to white/opaque for better readability
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            borderRadius: '0.5rem',
                                            color: 'var(--color-text-primary)',
                                            outline: 'none'
                                        }} required />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                                        <input type="email" name="user_email" placeholder="Your Email" style={{
                                            width: '100%',
                                            padding: '0.8rem',
                                            background: 'rgba(255,255,255,1)',
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            borderRadius: '0.5rem',
                                            color: 'var(--color-text-primary)',
                                            outline: 'none'
                                        }} required />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Service Interested In</label>
                                    <select name="service" style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255,255,255,1)',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderRadius: '0.5rem',
                                        color: 'var(--color-text-primary)',
                                        outline: 'none'
                                    }}>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Mobile App">Mobile App</option>
                                        <option value="SEO & Marketing">SEO & Marketing</option>
                                        <option value="Custom Software">Custom Software</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
                                    <textarea name="message" rows="4" placeholder="Tell us about your project..." style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255,255,255,1)',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        borderRadius: '0.5rem',
                                        color: 'var(--color-text-primary)',
                                        outline: 'none',
                                        resize: 'none'
                                    }} required></textarea>
                                </div>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={loading}
                                    style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
