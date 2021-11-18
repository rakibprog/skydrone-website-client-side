import React, { useRef } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import LoadingPage from '../../Share/LoadingPage/LoadingPage';
import "./Login.css";
const Login = () => {
    const { user, loginInUser, isLoading, smsError } = useAuth();
     const userEmail        = useRef();
    const userPassword = useRef();

    const location = useLocation();
    const history  = useHistory();
    
    const onLoginUser = (e) => {
        e.preventDefault();
        const email    = userEmail.current.value;
        const password = userPassword.current.value;
        if (email) {
            loginInUser(email,password,location,history);
        }
    }
    return (
        <div className="loginPage">
            <br />
            <br />
            <Container>
                <Row>
                    <Col style={{ margin: "auto", maxWidth:"500px" }}>
                        {!isLoading && <Form onSubmit={onLoginUser} className="createFrom">
                            <div className="login-text">
                                <h2>Login</h2>
                                <p>Please login using account detail bellow.</p>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Control required ref={userEmail} type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control required ref={userPassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <Row>
                                <Col sm="6">
                                    <Button variant="primary" className="more-btn"  type="submit">
                                         Sign In
                                    </Button>
                                </Col>
                                <Col sm="6">
                                    <p style={{textAlign:"right"}}>
                                        <Link to="/forget">
                                            Forgot your password?
                                        </Link>
                                    </p>
                                </Col>
                            </Row>
                            <div className="loginTextBox">
                                <p>Have you a Create Account? <br /> <Link to="/register">Please register new Account.</Link> </p>
                            </div>
                            {
                                smsError && <>
                                    {
                                        !user.email && <>
                                            <br/> <Alert  variant="warning"> {smsError} </Alert>
                                        </>
                                            }
                                        </>
                            }
                            {
                                user.email && <>
                                        <br/> <Alert  variant="success">Your Are Success Fully Login </Alert>
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

export default Login;