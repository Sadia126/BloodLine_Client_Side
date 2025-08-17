import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedSection from '../Featured/Featured';
import ContactUs from '../ContactForm/ContactForm';
import Features from '../Features/Features';
import Review from '../Review/Review';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
             <Features></Features>
             <Review></Review>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;