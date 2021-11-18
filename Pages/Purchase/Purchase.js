import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Purchase = () => {
    const { user , admin} = useAuth();
    const [product, setProduct] = useState({});
    const [disable, setDisable] = React.useState(false);
    const productId = useParams();
    useEffect(() => {
        fetch(`https://murmuring-stream-21871.herokuapp.com/purchase/${productId.id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);

    // user product order
    const productOrderNow = () => {
        alert("Do you want to order?");
        const order = {
            name: product.name,
            img: product.img,
            pd_id:productId,
            salePrice: product.salePrice,
            description: product.description,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        }; 
        fetch('https://murmuring-stream-21871.herokuapp.com/order', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Product Successful Added 🙂. please go to DASHBOARD then check your order page');
                setDisable(true);
            })
            .catch(error => {
                
        });

    }
    
    return (
        <div>
            <br />
            <br />
            <Container>
                <Row>
                    <Col md="4">
                        <Card>
                            <Card.Img
                                variant="top"
                                style={{padding:"20px"}}
                                src={product.img} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="8">
                        <Card >
                            <ListGroup variant="flush">
                                <ListGroup.Item>{product.name}</ListGroup.Item>
                                <ListGroup.Item>{product.description}</ListGroup.Item>
                                <ListGroup.Item>Price: ${product.salePrice} / <del>${product.discountedPrice}</del></ListGroup.Item>
                                <ListGroup.Item>
                                    {!admin &&
                                        <Button
                                        disabled={disable}
                                        onClick={productOrderNow} className="more-btn" >Order Now</Button>
                                    }
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
             <br />
            <br />
        </div>
    );
};

export default Purchase;