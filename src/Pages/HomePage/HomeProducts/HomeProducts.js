import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCart from '../../Share/ProductCart/ProductCart';
import "./HomeProducts.css";

const HomeProducts = () => {
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        fetch('https://murmuring-stream-21871.herokuapp.com/products/limit')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);

    return (
        <div className="productHome">
            <Container>
                <div className="sectionHeading" >
                    <h2 className="text-center fs-2">Get Your Drone</h2>
                    <p className="text-center f2-2">If you’re buying a drone for the first time, you may want to consider the features, flight time, camera resolution, accessories and easy of use.</p>
                </div>
                <Row>
                    {
                        product.map(products => <ProductCart
                            key={products._id}
                            product={products} >
                        </ProductCart>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeProducts;


