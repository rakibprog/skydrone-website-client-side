import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [sms,setSms] = useState(false);
    const getAdminEmail = (e) => {
        setEmail(e.target.value);
    }
    const makeAdminSubmit = (e) => {
        e.preventDefault();
        const user = { email };
        console.log(email)
        fetch('https://murmuring-stream-21871.herokuapp.com/user/admin', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    setSms(true)
                }
            })
        setEmail("");
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2>Make Admin</h2>
                        <Form onSubmit={makeAdminSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    onChange={getAdminEmail}
                                    required
                                    type="email"
                                    placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                  Which Email you want to make the admin ?
                                </Form.Text>
                            </Form.Group>
                            <Button type="submit" className="more-btn" >Submit</Button>
                        </Form>
                        {
                            sms && <><br /><Alert variant="success">Admin Request successfully</Alert></>
                        }
                    </Col>
                </Row>
                <br />
           </Container>
        </div>
    );
};

export default MakeAdmin;