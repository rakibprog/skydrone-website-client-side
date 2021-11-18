import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import LoadingPage from '../../Share/LoadingPage/LoadingPage';
import "./MyOrder.css";

const MyOrder = () => {
    const { user, isLoading } = useAuth();
    const [orderUser, setOrderUser] = useState([]);

    useEffect(() => {
        fetch(`https://murmuring-stream-21871.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrderUser(data);
            })
            .catch(error => {
            
            })
    }, []);


    const userOrderDelete = (e) => {
        alert("Are you want to Delete!");
        const id = e;
        fetch(`https://murmuring-stream-21871.herokuapp.com/order/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Delete Successful");
                    const remaining = orderUser.filter(pd => pd._id !== id);
                    setOrderUser(remaining);
                }
            });
    }

 if(isLoading){return(<><br /><br /><br /><LoadingPage></LoadingPage><br /><br /></>)}
    return (
        <div>
            <h2>My Orders</h2>
            <div>----------------------</div>
            {
                !orderUser && <h5>Please going to shopping 🙂</h5>
            }
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Order Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderUser.map(orderItem => <tr key={orderItem._id} >
                            <td><img
                                style={{width:"40px",height:"auto"}}
                                src={orderItem.img} alt="" /></td>
                        <td>{orderItem.name}</td>
                        <td>${orderItem.salePrice}</td>
                            <td><Button
                                onClick={()=> userOrderDelete(orderItem._id)}
                            variant="danger"
                            style={{ color: "#fff" }} >Cancel
                            </Button>
                        </td>
                    </tr> )      
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;