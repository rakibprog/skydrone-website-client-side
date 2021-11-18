import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SliderBanner.css';
const SliderBanner = () => {
    return (
        <div className='slide_banner'>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/ZVJvgkW/drone-3.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                     <Row>
                        <Col md="12">
                          <div className="slideContent">
                            <h2>Mavic Pro Drone</h2>
                            <p>Drones, with their agility and small size, seem perfect for search and rescue operations.</p>
                            <Link to="/shop">
                              <button className="custombtn">Explore Drone</button>
                            </Link>
                          </div>
                        </Col>
                        
                    </Row>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/Zh3gdbf/drone-2.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                     <Row>
                        <Col md="12">
                          <div className="slideContent">
                            <h2>Mavic Pro 4 Drone</h2>
                            <p>Visual artists use drones to capture beautiful new images and camera angles.</p>
                            <Link to="/shop">
                              <button className="custombtn">Explore Drone</button>
                            </Link>
                          </div>
                        </Col>
                        
                    </Row>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/y8PDbSL/drone-6.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                     <Row>
                        <Col md="12">
                          <div className="slideContent">
                            <h2>Holy Stone HS270 2.7K Drone</h2>
                            <p>As a pilot, I can tell you drones may be a lot of things; airplanes they are not.</p>
                            <Link to="/shop">
                              <button className="custombtn">Explore Drone</button>
                            </Link>
                          </div>
                        </Col>
                        
                    </Row>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SliderBanner;