import React, { useRef, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../Hooks/useAuth';
import LoadingPage from '../../Share/LoadingPage/LoadingPage';
const Review = () => {
    const { user, isLoading } = useAuth();
    const [review, setReview] = useState('');
    const [reviewSMS,setReviewSMS] = useState(false);
    const userReviewContent = useRef();

    const ratingChanged = (newRating) => {
        setReview(newRating);
    };
   

    const userReviewSubmit = (e) => {
        e.preventDefault();
        if (review != "") {
            const reviewContent = userReviewContent.current.value;
            const userReview = {
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoUrl,
                review: review,
                reviewContent:reviewContent
            }
            fetch("https://murmuring-stream-21871.herokuapp.com/review", {
               method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userReview)
                })
                .then(res => res.json())
                .then(data => {
                    userReviewContent.current.value = "";
                    setReviewSMS(true);
                })
                
        }
        
    }

    if(isLoading){return(<><br /><br /><br /><LoadingPage></LoadingPage><br /><br /></>)}
    return (
        <div>
            <h2>Product Review.</h2>
            <div>------------------------------------</div>
           <Form onSubmit={userReviewSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control disabled type="text" value={user.displayName} />
                    <Form.Label>User Email</Form.Label>
                    <Form.Control disabled type="email" value={user.email} />
                <ReactStars 
                    count={5}
                    onChange={ratingChanged}
                    size={50}
                    activeColor="red"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>User Review Content</Form.Label>
                    <Form.Control ref={userReviewContent} required as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" variant="success" >Submit</Button>
            </Form>
            {
                reviewSMS && <><br /><Alert variant="success">Review successfully Added</Alert></>
            }
            <br />
        </div>
    );
};

export default Review;

// 