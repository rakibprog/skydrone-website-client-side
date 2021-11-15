import React, { useRef } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import LoadingPage from '../../Share/LoadingPage/LoadingPage';
import "./SignUp.css";

const SignUp = () => {
    const { user, createNewUser, isLoading, smsError } = useAuth();

    const userName              = useRef();
    const userEmail             = useRef();
    const userPassword          = useRef();
    const userConfirmPassword   = useRef();
    
    const SingUpNewFrom = (e) => {
        e.preventDefault();

        const name              = userName.current.value;
        const email             = userEmail.current.value;
        const password          = userPassword.current.value;
        const confirmPassword   = userConfirmPassword.current.value;

        if (password === confirmPassword) {
            createNewUser(email, password, name);
        } else {
            alert("Your password did not match");
        }
    }

    return (
        <div>
            <br />
            <br />
            <Container>
                <Row>
                    <Col style={{ margin: "auto", maxWidth:"500px" }}>
                        { !isLoading &&
                        <Form onSubmit={SingUpNewFrom} className="createFrom">
                            { user?.email ? <Alert variant="success">
                                    <Alert.Heading>SUCCESS</Alert.Heading>
                                        <p>
                                            you are successfully registered
                                        </p>
                                        <hr />
                                        <div className="d-flex justify-content-end">
                                            you're welcome 🙂 
                                        </div>
                                    </Alert> :
                                <>
                                    <div className="login-text">
                                        <h2>Create Account</h2>
                                        <p>Please Register using account detail bellow.</p>
                                    </div>
                                    <Form.Group className="mb-3">
                                        <Form.Control required ref={userName} type="text" placeholder="Full Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control required  ref={userEmail} type="email" placeholder="Email" />
                                    </Form.Group>
                                
                                    <Form.Group className="mb-3">
                                        <Form.Control required  ref={userPassword} type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control required  ref={userConfirmPassword} type="password" placeholder="Confirm Password" />
                                    </Form.Group>

                                    <Button variant="primary" className="more-btn"  type="submit">
                                        Create
                                    </Button>
                                    <div className="loginTextBox">
                                        <p>Are you already registered? <Link to="/login">Please Login.</Link></p>
                                    </div>
                                   
                                    {
                                        smsError && <>
                                        <br/> <Alert  variant="warning"> {smsError} </Alert>
                                        </>
                                    }
                               </>
                            }
                        </Form>
                        }
                        {
                            isLoading && <><LoadingPage/> <br/> <br/> </>
                        }
                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;



