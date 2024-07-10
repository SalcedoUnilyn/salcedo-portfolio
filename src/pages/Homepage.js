import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import profileImage from  '../images/profile.jpg';  // Import the image
import dashboardImage from '../images/project.jpg'; // Importing your project image
import colloquiumImage from '../images/21.png'; // Importing your project image
import './Homepage.css';  // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const Homepage = () => {
    const styles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
        config: { duration: 1000 }  // Adjust the duration as needed
    });

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset the video to the beginning
        }
    };

    return (
        <div className="homepage">
            <div className="intro-section">
                <div className="text-section">
                    <h1>Senior Web Developer</h1>
                    <p>Bachelor of Science in Information Technology</p>
                </div>
                <animated.div style={styles} className="image-section">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </animated.div>
            </div>
            <div className="recent-projects-section">
                <div className="projects-header">
                    <h1 className="recent-projects-title">Recent Projects</h1>
                </div>
                <div className="projects-content">
                    <div className="project-side">
                        <div className="project-card">
                            <div className="project-info">
                                <h2>3D Model</h2>
                            </div>
                            <div className="project-image zoom">
                                <img src={colloquiumImage} alt="Colloquium Project" />
                            </div>
                        </div>
                    </div>
                    <div className="project-side">
                        <div className="project-card dark-bg">
                            <div className="project-info">
                                <h2>Github Project</h2>
                            </div>
                            <div className="project-image zoom">
                                <img src={dashboardImage} alt="Dashboard Project" />
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/projects" className="view-all-button">View All</Link>
            </div>
        </div>
    );
}

export default Homepage;
