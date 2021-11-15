import React from 'react';
import BannerTwo from '../BannerTwo/BannerTwo';
import HomeProducts from '../HomeProducts/HomeProducts';
import ReviewPage from '../ReviewPage/ReviewPage';
import SliderBanner from '../SliderBanner/SliderBanner';

const Home = () => {
    return (
        <>
            <SliderBanner></SliderBanner>
            <HomeProducts></HomeProducts>
            <BannerTwo></BannerTwo>
            <ReviewPage></ReviewPage>
        </>
    );
};

export default Home;