import React from 'react';
import { Spinner } from 'react-bootstrap';
import "./LoadingPage.css";
const LoadingPage = () => {
    return (
        <div className="loadingPage">
            <Spinner className='reload' animation="border" variant="primary" />
        </div>
    );
};

export default LoadingPage;