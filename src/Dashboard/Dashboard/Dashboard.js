import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import AddAProduct from '../../Pages/AdminDashboard/AddAProduct/AddAProduct';
import MakeAdmin from '../../Pages/AdminDashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../../Pages/AdminDashboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../../Pages/AdminDashboard/ManageProducts/ManageProducts';
import LoadingPage from '../../Pages/Share/LoadingPage/LoadingPage';
import MyOrder from '../../Pages/UserDashboard/MyOrder/MyOrder';
import PayPage from '../../Pages/UserDashboard/PayPage/PayPage';
import Review from '../../Pages/UserDashboard/Review/Review';
import "./Dashboard.css";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    
    const { logOut, admin, isLoading } = useAuth();
    if(isLoading){return(<LoadingPage></LoadingPage>)}
    return (
        <div>
            <br />
            <br />
            <Container>
                <h1 className="dashboardUpHeading">
                    {admin && <> Admin </>}
                    {!admin && <> User </>}
                     Dashboard
                </h1>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="tabs" >
                        <Col sm={3} style={{
                            border: "1px solid green",
                            backgroundColor:"#F3F0D7"
                        }}>
                            <Nav variant="pills" className="flex-column">
                                <br />
                             {!admin && <>
                                <NavLink to={url}>
                                    <Button className="btnbtn">My Orders</Button>
                                </NavLink>
                                <NavLink to={`${url}/pay`}>
                                    <Button className="btnbtn">Pay Now</Button>
                                </NavLink>
                                <NavLink to={`${url}/review`}>
                                    <Button className="btnbtn">Review</Button>
                                </NavLink>
                            </>}
                                
                            {/* //admin showing */}

                            {admin && <>
                                <NavLink to={url}>
                                    <Button className="btnbtn">Manage All Orders</Button>
                                </NavLink>
                                <NavLink to={`${url}/addAProduct`}>
                                    <Button className="btnbtn">Add A Product</Button>
                                </NavLink>
                                <NavLink to={`${url}/makeAdmin`}>
                                    <Button className="btnbtn">Make Admin</Button>
                                </NavLink>
                                <NavLink to={`${url}/manageProducts`}>
                                    <Button className="btnbtn">Manage Products</Button>
                                </NavLink>
                            </>} 
                                <NavLink
                                    onClick={logOut}
                                    to="/dashboard"><Button className="btnbtn">Logout</Button>
                                </NavLink>
                            <br />
                        </Nav>
                        </Col>
                        <Col sm={9} style={{
                            border: "1px solid green",
                        }}>
                        <Tab.Content>
                                <br />
                                {!admin && <>
                            <Switch>
                                <Route exact path={path}>
                                    <MyOrder></MyOrder>
                                </Route>
                                <Route path={`${path}/pay`}>
                                    <PayPage></PayPage>
                                </Route>
                                <Route path={`${path}/review`}>
                                     <Review></Review>
                                </Route>
                                <Route path={`/dashboard/review/:id`}>
                                     <Review></Review>
                                </Route>
                            </Switch> 

                             </>}     
                                {admin && <>
                            <Switch>
                                <Route exact path={path}>
                                   <ManageAllOrders></ManageAllOrders>
                                </Route>
                                <Route path={`${path}/addAProduct`}>
                                     <AddAProduct></AddAProduct>
                                </Route>
                                <Route path={`${path}/makeAdmin`}>
                                     <MakeAdmin></MakeAdmin>
                                </Route>
                                <Route path={`${path}/manageProducts`}>
                                   <ManageProducts></ManageProducts>
                                </Route>
                            </Switch>
                              </>}   
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
            </Container>
            <br />
            <br />
        </div>
    );
};

export default Dashboard;
