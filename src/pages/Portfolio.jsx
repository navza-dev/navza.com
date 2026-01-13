import { motion } from 'framer-motion';
import Button from '../components/Button';

import proj1 from '../assets/pro1.jpeg';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.jpeg';
import placeholderImg from '../assets/hero.jfif'; // Fallback for missing images

const projects = [
    {
        id: 1,
        title: 'Ceylon Journey',
        category: 'Travel Agency Website',
        description: 'A visually rich and easy-to-navigate travel website designed to showcase tour packages, destinations, and booking inquiries. Built to attract tourists and convert visitors into travel leads.',
        image: proj1
    },
    {
        id: 2,
        title: 'Glory Salon',
        category: 'Personal Salon Website',
        description: 'A modern, elegant website created for a beauty salon brand. Designed to highlight services, pricing, and appointments while strengthening the salon’s professional online presence.',
        image: proj2
    },
    {
        id: 3,
        title: 'Closed Wand',
        category: 'Brand & Business Website',
        description: 'A sleek and minimalist website developed to represent a premium brand. Focused on clean UI, smooth navigation, and strong brand storytelling.',
        image: proj3
    },
    {
        id: 4,
        title: 'JRacct Accountants',
        category: 'Accounting Firm Website',
        description: 'A professional corporate website built for an accounting firm to establish trust, present services clearly, and allow potential clients to make inquiries easily.',
        image: proj4
    },
    {
        id: 5,
        title: 'ISell Lanka',
        category: 'E-commerce Platform',
        description: 'A full online store built to sell products, manage orders, and process payments. Designed for performance, usability, and scalability to support business growth.',
        image: proj5
    }
];

const Portfolio = () => {
    return (
        <div className="portfolio-page" style={{ paddingTop: '80px' }}>
            <section className="section">
                <div className="container">
                    <motion.div
                        style={{ textAlign: 'center', marginBottom: '5rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>Our Work</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Below are some of the digital platforms designed and developed by Navza. Each project was built with a clear business goal.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}
                            >
                                {/* Project Image Area */}
                                <div style={{
                                    height: '250px',
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundColor: 'var(--color-bg-secondary)',
                                    position: 'relative'
                                }}>
                                </div>

                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <span style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--color-secondary)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            fontWeight: 600
                                        }}>
                                            {project.category}
                                        </span>
                                        <h3 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                    </div>

                                    <p style={{ marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{project.description}</p>

                                    <Button variant="outline" to="#" style={{ width: '100%', justifyContent: 'center' }}>
                                        View Project
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                        <p style={{ marginBottom: '1.5rem' }}>Have a project in mind?</p>
                        <Button variant="primary" to="/contact">Let's Discuss Your Project</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
