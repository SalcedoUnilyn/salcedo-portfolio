import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const Contact = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="contact-container">
            <h1>Contact Me</h1>
            <p className="contact-description">Please contact me using any of the ways listed below:</p>
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <p>salcedounilyn2@gmail.com</p>
                </div>
                <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <p>(63) 9319123697</p>
                </div>
                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <p>Pandanon, Mabinay, Negros Oriental</p>
                </div>
        </animated.div>
    );
}

export default Contact;
