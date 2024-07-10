import React from 'react';
import './About.css';
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaDatabase, FaUser } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const About = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="about-container">
            <div className="container-title">
                <h1>About Me</h1>
                <div className="right-side">
                    <p> For a junior web developer, even the smallest successes may be very thrilling. Your understanding of web page structure and styling improves after completing your first HTML and CSS project. Making a straightforward JavaScript application, such as a to-do list, shows off your interactive skills.</p>
                    <p>It's evident that you can employ modern frameworks by learning React and creating a simple project, such as a weather forecast app. You can handle state and make reusable components with React. This experience gives you more self-assurance for increasingly difficult tasks.</p>
                    <p> Work on modest assignments that get harder over time if you want to keep getting better. Participate in online forums such as Stack Overflow or GitHub to obtain guidance and assistance. Practice often, adhere to tutorials, and gain knowledge of appropriate coding techniques. Compile your work and create a portfolio to highlight your accomplishments
.</p>
                    
                    <h2>Technologies Stack</h2>
                    <div className="technologies">
                        <div className="tech-icon-container">
                            <FaDatabase className="tech-icon" style={{ color: '#00758f' }} />
                            <span className="tech-name">Database</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaHtml5 className="tech-icon" style={{ color: 'black' }} />
                            <span className="tech-name">HTML5</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaBootstrap className="tech-icon" style={{ color: '#563d7c' }} />
                            <span className="tech-name">Bootstrap</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaCss3Alt className="tech-icon" style={{ color: '#264de4' }} />
                            <span className="tech-name">CSS3</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaReact className="tech-icon" style={{ color: '#61dafb' }} />
                            <span className="tech-name">React</span>
                        </div>
                    </div>
                </div>
                <p className="subtitle">"Hi there! I enjoy creating creative, user-friendly websites as a junior web developer."</p>
            </div>
            <div className="recommendation-container">
                    <h2>Recommendations</h2>
                    <div className="recommendation">
                        <div className="profile">
                            <FaUser className="profile-img" style={{ fontSize: '3rem', color: '#333', border: '2px solid #333', borderRadius: '50%', padding: '5px' }} />
                            <div className="profile-info">
                                <h3>SALCEDO UNILYN R.</h3>
                                <p>Junior Web Developer</p>
                            </div>
                        </div>
                        <p className="comment">"As a young web developer, I've gone far. Her excitement for new technology is encouraging to me as a tech advocate. She regularly writes high-quality code and approaches obstacles in a constructive way."</p>
                    </div>
                </div>
            <div className="about-content">
                <div className="text-block">
                    <h2>Contact</h2>
                    <p>Please email me if you need assistance or have any queries; I'll be happy to help.</p>
                </div>
                <div className="text-block">
                    <h2>Would you like to have young web developers speak at your event?</h2>
                    <p>Software development and emerging technologies are my areas of expertise. I'm excited to share my knowledge at your event.</p>
                </div>
                <div className="text-block">
                    <h2>Would you like to employ me as a junior web developer?</h2>
                    <p> Please schedule a free consultation with me to go over the specifics of your project.</p>
                </div>
            </div>
        </animated.div>
    );
}

export default About;
