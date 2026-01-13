import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    to,
    className = '',
    onClick,
    ...props
}) => {
    const baseClasses = "btn";
    const variants = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        outline: "btn-outline", // Define btn-outline in CSS if needed, or use secondary style
    };

    const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <motion.button
            className={combinedClasses}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
