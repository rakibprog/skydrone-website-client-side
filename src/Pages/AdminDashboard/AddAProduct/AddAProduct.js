import React, { useRef, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

const AddAProduct = () => {
     const [sms,setSms] = useState(false);

    const productName           = useRef('');
    const productImgUrl         = useRef('');
    const productSalePrice      = useRef('');
    const productDisPrice       = useRef('');
    const productDescription    = useRef('');
    
    const addNewProduct = (e) => {
        e.preventDefault();

        const product = {
            name:productName.current.value,
            salePrice:productSalePrice.current.value,
            discountedPrice: productDisPrice.current.value,
            img: productImgUrl.current.value,
            description: productDescription.current.value
        };

        if (product.name !== "") {
            console.log(product.name)
            fetch("https://murmuring-stream-21871.herokuapp.com/products", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                //get the data
                    if (data) {
                        setSms(true);
                    }
                })
                .catch(error => {
                // get the error
            })

        } else {
            alert("Please Fill Up To All Field");
        }

        productName.current.value = "";
        productImgUrl.current.value = "";
        productSalePrice.current.value = "";
        productDisPrice.current.value = "";
        productDescription.current.value = "";
    }
    return (
        <div>
            <h2>Add a New Product</h2>
            <div>-------------------------------</div>
           <Form onSubmit={addNewProduct}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Product Name:</Form.Label>
                    <Form.Control required ref={productName} type="text" placeholder="Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Product img URL:</Form.Label>
                    <Form.Control required ref={productImgUrl} type="url" placeholder="Product Image URL" />
                </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Product Sale Price:</Form.Label>
                    <Form.Control required ref={productSalePrice} type="text" placeholder="Sale Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Product Discounted Price:</Form.Label>
                    <Form.Control ref={productDisPrice} type="text" placeholder="Discounted Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Product Description:</Form.Label>
                    <Form.Control ref={productDescription} as="textarea" rows={3} placeholder="Product Description" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Product Add
                </Button>
            </Form>
            {
                sms && <><br /><Alert variant="success">product successfully added</Alert></>
            }
            <br/>
        </div>
    );
};

export default AddAProduct;