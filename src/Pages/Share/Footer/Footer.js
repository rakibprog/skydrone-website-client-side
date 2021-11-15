import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer py-5" style={{backgroundImage:`url(${'https://i.ibb.co/Zh3gdbf/drone-2.jpg'})`}}>
            <Container>
                <Row className="footer-area">
                    <Col lg={6}>
                        <div className="logo-text">
                            <h2>Sky Drone</h2>
                        </div>
                        <div className="logo-description">
                               <p>The most innovate feature is probably its advanced controls. Using simple hand gestures, you can take off, tell the drone to follow you and fly hi-quality drones.</p>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="list-item">
                            <h3 className="destination-title">CATEGORIES</h3>
                            <ul >
                                <li><a href=".#">DJI Phantom</a></li>
                                <li><a href=".#">U49WF FPV</a></li>
                                <li><a href=".#">Holy Stone </a></li>
                                <li><a href=".#">DJI Mavic 4 Pro</a></li>
                                <li><a href=".#">DJI Mavic 2 Zoom</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                    <div className="list-item">
                            <h3 className="destination-title">Partners</h3>
                            <ul >
                                <li><a href=".#">Tech Gooking</a></li>
                                <li><a href=".#">Mavic Four</a></li>
                                <li><a href=".#">Drone Fifty</a></li>
                                <li><a href=".#">Drone Area</a></li>
                                <li><a href=".#">Tech Amazon</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                    <div className="list-item">
                            <h3 className="destination-title">About</h3>
                            <ul >
                                <li><a href=".#">Contact Us</a></li>
                                <li><a href=".#">Privacy </a></li>
                                <li><a href=".#">About Us</a></li>
                                <li><a href=".#">Terms</a></li>
                                <li><a href=".#">Topic</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="footer-copyright">
                    <Col>
                         <p className="footer-text">© 2021 Sky Drone, All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;