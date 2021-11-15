import { faFacebookF, faGooglePlusG, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';
const mail = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhoneAlt} />
const facebook = <FontAwesomeIcon icon={faFacebookF} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const googlePlus = <FontAwesomeIcon icon={faGooglePlusG} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="Main_header">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <NavLink className='navbar-brand' to='/'>
                        <h2>Sky Drone</h2>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto main_mane"></Nav>
                        <Nav className='main_mane navbar-right'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/shop'>Explore Drone</NavLink>
                            {
                                user.email && <NavLink to='/dashboard'>Dashboard</NavLink>
                            }
                            {
                                !user?.email && <NavLink to='/login'>Login</NavLink>
                            }
                            <ul className='social_icons admin'>
                                {
                                    user?.email && <li>{user?.displayName}</li>
                                }
                                {
                                    user?.photoURL && <li><img src={user?.photoURL} alt="" /></li> 
                                }
                            </ul>
                            {
                                user?.email && <Button onClick={logOut} variant="danger">Logout</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;