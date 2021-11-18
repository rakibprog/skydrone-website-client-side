import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from "../../../Hooks/useAuth";
import Breadcrumb from '../../Share/Breadcrumb/Breadcrumb';
import LoadingPage from '../../Share/LoadingPage/LoadingPage';
import ProductCart from '../../Share/ProductCart/ProductCart';

const Shop = () => {

    const [product, setProduct] = useState([]);
    const { isLoading } = useAuth();
    
    useEffect(() => {
        fetch('https://murmuring-stream-21871.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);

    if(isLoading){return(<><br /><br /><br /><LoadingPage></LoadingPage><br /><br /></>)}

    return (
        <div >
            <Breadcrumb>Explore Drone</Breadcrumb>
            <Container>
                <Row>
                    <Col>
                    <h2 className="text-center">Get Your Drone</h2>
                    <p className="text-center">If you’re buying a drone for the first time, you may want to consider the features, flight time, camera resolution, accessories and easy of use.</p>  
                    </Col>
                </Row>
                <Row>
                    {
                        product.map(products => <ProductCart
                            key={products._id}
                            product={products} >
                        </ProductCart>)
                    }
                </Row>
            </Container>
            <br />
        </div>
    );
};

export default Shop;