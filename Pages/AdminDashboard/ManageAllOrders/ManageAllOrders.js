import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import LoadingPage from '../../Share/LoadingPage/LoadingPage';

const ManageAllOrders = () => {
    const [order, setOrder] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch(`https://murmuring-stream-21871.herokuapp.com/order`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            })
            .catch(error => {
            
            })
    }, []);

    const adminOrderRemove = (e) => {
        alert("Are you want to Delete!");
        const id = e;
         fetch(`https://arcane-bastion-51676.herokuapp.com/order/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Delete Successful");
                    const remaining = order.filter(pd => pd._id !== id);
                    setOrder(remaining);
                }
            });
    }
if(isLoading){return(<><br /><br /><br /><LoadingPage></LoadingPage><br /><br /></>)}
    return (
        <div>
             <h2>Manage All Orders</h2>
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Order Info</th>
                        <th>Order Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map(orderItem => <tr key={orderItem._id} >
                            <td><img
                                style={{width:"40px",height:"auto"}}
                                src={orderItem.img} alt="" /></td>
                        <td>{orderItem.name}</td>
                        <td>${orderItem.salePrice}</td>
                       
                        <td style={{textAlign:"center"}}>
                            <img
                                style={{width:"40px",height:"auto"}}
                                    src={orderItem.photoURL} alt="" />
                                <h6>{orderItem.displayName}</h6>
                        </td>
                        <td>
                            <Button onClick={()=> adminOrderRemove(orderItem._id)}
                            variant="danger"
                            style={{ color: "#fff" }} >DELETE
                            </Button>
                        </td>
                    </tr> )      
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;