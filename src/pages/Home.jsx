import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { servicesData } from '../assets/data';
import heroImage from '../assets/hero.jfif'; // Found actual file is .jfif

const Home = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section" style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)), url(${heroImage})`, /* Much lighter overlay */
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative'
            }}>
                {/* Fallback gradient if image fails/missing handled by CSS usually, but here relying on the dark overlay mostly */}
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        style={{ maxWidth: '800px' }}
                    >
                        <h1 className="hero-title" style={{ fontSize: '3rem', color: '#000', textShadow: '0 2px 4px rgba(255,255,255,0.5)' }}> {/* Reduced size, black text for light theme hero */}
                            We Build <span className="text-gradient">High-Performing</span> Websites, Apps & Marketing Systems That Grow Your Business
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#1f2937', fontWeight: 500 }}>
                            Navza is a full-service digital solutions company. We don’t just build products; we build systems that scale, brands that convert, and experiences that people love.
                        </p>
                        <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Button variant="primary" to="/contact">Get a Free Consultation</Button>
                            <Button variant="secondary" to="/case-studies">View Our Work</Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section services-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <h2 className="section-title">What We Do</h2>
                        <p>Complete digital solutions from idea to launch.</p>
                    </motion.div>

                    <motion.div
                        className="services-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
                    >
                        {servicesData.slice(0, 3).map((service) => (
                            <motion.div
                                key={service.id}
                                variants={fadeIn}
                                className="glass-card"
                            >
                                <service.icon style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                                    {service.details.slice(0, 3).map((item, idx) => (
                                        <li key={idx} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Button variant="secondary" to="/services">View All Services</Button>
                    </div>
                </div>
            </section>

            {/* Why Navza */}
            <section className="section why-navza-section" style={{ background: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Why Choose <span className="text-gradient">Navza</span>?</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                                We understand that a beautiful website means nothing if it doesn’t generate leads, traffic, or revenue. That’s why every project at Navza is built with business outcomes in mind.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'One team for development + marketing',
                                    'Data-driven strategies, not guesswork',
                                    'Transparent communication',
                                    'Results you can measure'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--color-secondary)', fontSize: '1.2rem' }}>✔</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card"
                            style={{ textAlign: 'center', padding: '3rem' }}
                        >
                            <h3 style={{ fontSize: '4rem', color: 'var(--color-primary)', marginBottom: '0' }}>100%</h3>
                            <p>Client Satisfaction</p>
                            <div style={{ margin: '2rem 0', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                            <h3 style={{ fontSize: '4rem', color: 'var(--color-secondary)', marginBottom: '0' }}>5+</h3>
                            <p>Years Experience</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What Our Clients Say</h2>
                    <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                            "Navza helped us get more leads in 30 days than our previous agency did in 6 months."
                        </p>
                        <h4 className="text-gradient">Happy Client</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>CEO, Tech Startup</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ marginBottom: '1.5rem' }}>Let’s build something great together.</h2>
                        <p style={{ marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Ready to transform your digital presence? Get in touch with us today.
                        </p>
                        <Button variant="primary" to="/contact" size="large">Start Your Project</Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
