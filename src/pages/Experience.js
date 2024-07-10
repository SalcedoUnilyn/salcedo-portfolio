import React from 'react';
import './Experience.css';
import { useSpring, animated } from '@react-spring/web';
import certImage1 from '../images/certificate.jpg'; // Import certificate images
import certImage2 from '../images/certificate2.jpg';

const Experience = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="experience-container">
            <div className="certifications-container">
                <h1 className="section-title">Certifications</h1>
                <div className="certification">
                    <div className="certification-item">
                        <h3>GAD GIVE ME YOU </h3>
                        <p> GAD GIVE ME YOU certificate of acknowledgement of sangguniang kabataan.</p>
                        <img src={certImage1} alt="Bookkeeping NC III Certificate" className="cert-image" />
                    </div>
                    <div className="certification-item">
                        <h3>Certificate of Participation</h3>
                        <p>For actively Participating in a Webinar on BUDGETING 101 FOR SK OFFICIALS.</p>
                        <img src={certImage2} alt="Budgeting 101 Certificate" className="cert-image" />
                    </div>
                </div>
            </div>
            <div className="experience-content">
            <h1 className="section-title">Experience</h1>
                <div className="experience-item">
                    <div className="job">
                        <h2>2024</h2>
                        <p>GAD GIVE ME YOU - GAD</p>
                        <p> GAD GIVE ME YOU certificate of acknowledgement of sangguniang kabataan.</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="job">
                        <h2>2024</h2>
                        <h2>Certificate of Participation</h2>
                        <p>NYC February 17, 2024</p>
                        <p>having part in the Participating in organizing of Budgeting 101 Webinar for SK council members.</p>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default Experience;
