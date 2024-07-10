import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaBars } from 'react-icons/fa';
import './Layout.css';

function Layout() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            <header>
                <div className="left-section">
                    <NavLink to="/" className="name-link">
                        <h1>Unilyn Salcedo</h1> {/* Replace 'Your Name' with your actual name */}
                        <p className="navbar-text">Senior Programmer</p> {/* Additional text below the name */}
                    </NavLink>
                </div>
                <nav className="navbar">
                    <FaBars className="hamburger" onClick={toggleNav} />
                    <ul className={isNavVisible ? 'show' : ''}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/experience"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="right-section">
                    <ul className="social-icons">
                        <li>
                            <a href="https://www.facebook.com/marilyn.reposo.1" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/salcedounilyn/?igsh=bGkzZDkyMnV6cjB0&fbclid=IwZXh0bgNhZW0CMTAAAR3J62Gk0_gFdryhC-xRIppDjwTmgBx1K_a5wUWPzN2OHw5z3xvzTM07x_k_aem_TgbkyhwRaw7bH26NOqwgPQ" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="fa-instagram" />
                            </a>
                       
                            <a href="https://www.tiktok.com/@unilab2002?_r=1&_d=defmk9aaa772a2&sec_uid=MS4wLjABAAAAXtXOdz5zA6nt1rQ_3OibO-QSkIpSDgMyhHw9ZiaBL6lnrxUo31Vbi1JoDXtkwT02&share_author_id=6793272620357239810&sharer_language=en&source=h5_t&u_code=damgg2ggf930c6&timestamp=1720529797&user_id=6793272620357239810&sec_user_id=MS4wLjABAAAAXtXOdz5zA6nt1rQ_3OibO-QSkIpSDgMyhHw9ZiaBL6lnrxUo31Vbi1JoDXtkwT02&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7389618279322765062&share_link_id=0fd4da29-e151-4d85-9771-f39264fa30ab&share_app_id=1180&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb4907&social_share_type=5&enable_checksum=1&fbclid=IwZXh0bgNhZW0CMTAAAR25sHoQMJr-EwEjCB4FWQDeSZ5hXwwzKiLafRBtYOL--BQXWO33Aobs4tE_aem_iMnmO7Rn3zOd_2M45yGAGg" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="fa-tiktok" />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

            <div className="content">
                <Outlet />
            </div>

            <footer>
                <ul className="social-icons">
                    <li>
                        <a href="https://www.facebook.com/marilyn.reposo.1" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="fa-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/salcedounilyn/?igsh=bGkzZDkyMnV6cjB0&fbclid=IwZXh0bgNhZW0CMTAAAR3J62Gk0_gFdryhC-xRIppDjwTmgBx1K_a5wUWPzN2OHw5z3xvzTM07x_k_aem_TgbkyhwRaw7bH26NOqwgPQ">
                            <FaInstagram className="fa-instagram" />
                        </a>
                    
                        <a href="https://www.tiktok.com/@unilab2002?_r=1&_d=defmk9aaa772a2&sec_uid=MS4wLjABAAAAXtXOdz5zA6nt1rQ_3OibO-QSkIpSDgMyhHw9ZiaBL6lnrxUo31Vbi1JoDXtkwT02&share_author_id=6793272620357239810&sharer_language=en&source=h5_t&u_code=damgg2ggf930c6&timestamp=1720529797&user_id=6793272620357239810&sec_user_id=MS4wLjABAAAAXtXOdz5zA6nt1rQ_3OibO-QSkIpSDgMyhHw9ZiaBL6lnrxUo31Vbi1JoDXtkwT02&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7389618279322765062&share_link_id=0fd4da29-e151-4d85-9771-f39264fa30ab&share_app_id=1180&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb4907&social_share_type=5&enable_checksum=1&fbclid=IwZXh0bgNhZW0CMTAAAR25sHoQMJr-EwEjCB4FWQDeSZ5hXwwzKiLafRBtYOL--BQXWO33Aobs4tE_aem_iMnmO7Rn3zOd_2M45yGAGg" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="fa-tiktok" />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Layout;
