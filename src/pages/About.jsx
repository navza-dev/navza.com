import { motion } from 'framer-motion';
import Button from '../components/Button';

const About = () => {
    return (
        <div className="about-page" style={{ paddingTop: '80px' }}>
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                    >
                        <h1 style={{ marginBottom: '2rem' }}>About <span className="text-highlight">Navza</span></h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '4rem', color: 'var(--color-text-secondary)' }}>
                            Navza is a full-service digital solutions company that designs, builds, and grows modern businesses through technology and strategic marketing.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', md: { gridTemplateColumns: '1fr 1fr' }, gap: '4rem', marginBottom: '6rem' }}>
                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-gradient">Our Vision</h3>
                            <p>
                                To become a globally trusted digital transformation partner, empowering businesses of all sizes to grow through innovative technology and data-driven marketing.
                            </p>
                        </motion.div>

                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-gradient">Our Mission</h3>
                            <p>
                                To help businesses succeed online by delivering high-quality software solutions, intelligent digital marketing, and performance-focused strategies that generate real, measurable results.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'var(--color-bg-secondary)', padding: '3rem', borderRadius: 'var(--border-radius-lg)' }}
                    >
                        <h2 style={{ marginBottom: '1.5rem' }}>Who We Are</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-text-secondary)' }}>
                            <p>
                                We specialize in web development, mobile applications, custom software, SEO, and digital marketing — delivering everything a brand needs to succeed in today’s digital world under one roof.
                            </p>
                            <p>
                                We don’t just build products. We build <strong>systems that scale</strong>, <strong>brands that convert</strong>, and <strong>experiences that people love</strong>.
                            </p>
                            <p>
                                From startups to growing enterprises, Navza partners with businesses to transform ideas into powerful digital platforms that drive growth, engagement, and revenue.
                            </p>
                        </div>
                        <div style={{ marginTop: '2.5rem' }}>
                            <Button variant="primary" to="/contact">Work With Us</Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
