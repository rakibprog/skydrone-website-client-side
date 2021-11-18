import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./BannerTwo.css";

const BannerTwo = () => {
    return (
        <>
            <Container className="bannertwo">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 mb-md-30 mb-sm-30">
                        <div className="full-banner__content">
                          <h2 className="client-heading">Save Your Time,Use Bold Builder!</h2>
                           <p className="dronep">Best practices on the market collected in one easy to use page builder.
Bold Builder is a free WordPress page builder. It integrated with this theme and it features drag and drop interface, many content elements, clipboard functionality and has the fastest user interface around.
</p>
                            <Link className="theme-button theme-button--outline banner-button view-btn" to="/shop">
                                 View Features
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 text-center text-lg-right mb-md-30 mb-sm-30">
                        <div className="full-banner__image">
                        <img src="https://i.ibb.co/C0bSfmJ/inner-product-01-640x384.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div> 
           </Container>
        </>
    );
};

export default BannerTwo;


