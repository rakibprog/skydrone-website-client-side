import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import './ReviwPage.css';
const ReviewPage = () => {
    const [rvData, setRvData] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-stream-21871.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setRvData(data);
            });
    }, [])
    return (
        <div className='py-5'>
            <Container>
                        <h2 className="client-heading">Excellent Customer Support Reviews</h2>
                        <p className="client-subtitle">Innovative Streaming & Publishing</p>
                <Row>
                    {rvData.map(data => 
                    <Col key={data._id} md="4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                        <ReactStars
                                            value={data.review}
                                            count={5}
                                            edit={false}
                                            size={40}
                                            activeColor="red"
                                        />
                                </Card.Subtitle>
                                <Card.Text>
                                    {data.reviewContent}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ReviewPage;