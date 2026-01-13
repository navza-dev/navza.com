import { motion } from 'framer-motion';
import Button from '../components/Button';
import { servicesData } from '../assets/data';

const Services = () => {
    return (
        <div className="services-page" style={{ paddingTop: '80px' }}>
            <div className="container section">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1>Our Services</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        We provide complete digital solutions from idea to launch — and beyond.
                        Whether you need a new website, a mobile app, or a full marketing strategy, we've got you covered.
                    </p>
                </div>

                <div style={{ display: 'grid', gap: '4rem' }}>
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{ display: 'grid', md: { gridTemplateColumns: '1fr 2fr' }, gap: '2rem', padding: '3rem' }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <service.icon style={{ fontSize: '3rem', color: 'var(--color-primary)' }} />
                                    <h2 style={{ marginBottom: 0 }}>{service.title}</h2>
                                </div>
                                <p style={{ fontSize: '1.1rem', color: 'white' }}>{service.description}</p>
                                <div style={{ marginTop: 'auto' }}>
                                    <Button variant="secondary" to={`/contact`}>Get Started</Button>
                                </div>
                            </div>

                            <div>
                                <h4 style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }}>What We Offer:</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                    {service.details.map((detail, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                                            <span style={{ color: 'var(--color-primary)' }}>•</span> {detail}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                    <h3>Ready to grow your business?</h3>
                    <div style={{ marginTop: '2rem' }}>
                        <Button variant="primary" to="/contact">Book a Free Consultation</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
