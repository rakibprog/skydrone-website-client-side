import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import LoadingPage from '../../Share/LoadingPage/LoadingPage';

const ManageProducts = () => {
    const { isLoading } = useAuth();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("https://murmuring-stream-21871.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);
    
    // admin product remove
    const adminProductRemove = (e) => {
       alert("Are you want to Delete!");
        const id = e;

        fetch(`https://murmuring-stream-21871.herokuapp.com/products/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Delete Successful");
                    const remaining = product.filter(pd => pd._id !== id);
                    setProduct(remaining);
                }
            });
        
    
    }
    // product Edit
    const adminProductEdit = () => {
        alert('Product EDIT system coming soon');
    }
    if(isLoading){return(<><br /><br /><br /><LoadingPage></LoadingPage><br /><br /></>)}
    return (
        <div>
            <h2>Manage All Products</h2>
            <h6>Total Product : {product.length} </h6>
             <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Photo</th>
                        <th>Product Title</th>
                        <th>Product Price</th>
                        <th>Product Edit</th>
                        <th>Product Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(Item => <tr key={Item._id} >
                            <td><img
                                style={{width:"40px",height:"auto"}}
                                src={Item.img} alt="" /></td>
                        <td>{Item.name}</td>
                        <td>${Item.salePrice}</td>
                        <td> 
                            <Button onClick={adminProductEdit}
                                variant="info"
                                style={{ color: "#fff" }} >
                                EDIT
                            </Button> 
                        </td>
                            <td><Button
                            onClick={()=> adminProductRemove(Item._id)}
                            variant="danger"
                            style={{ color: "#fff" }} >Remove
                            </Button>
                        </td>
                    </tr> )      
                    }
                </tbody>
            </Table>
        </div>
        
    );
};

export default ManageProducts;