import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ProductCart.css";

const ProductCart = ({ product }) => {
    const { _id, name, img, discountedPrice, rating, review, salePrice, description } = product;
    return (
        <Col className="g-4"  md="4">
            <Link style={{textDecoration:"none"}} to="/shop">
            <Card className="productCart">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h5>{name}</h5>
                        <p>
                            {description.slice(0,80)} ...
                        </p>
                        <Row>
                            <Col>
                                <p className="product-price">
                                    <span className="money">${salePrice}
                                        <del className="main-price discounted">${discountedPrice}</del>
                                    </span>
                                </p>
                            </Col>
                            <Col>
                                <Link style={{textDecoration:"none"}} to={`/purchase/${_id}`}>
                                    <button className="custombtn">Purchase Now</button>
                                </Link>
                            </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default ProductCart;






