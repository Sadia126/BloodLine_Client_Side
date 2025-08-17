import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedSection from '../Featured/Featured';
import ContactUs from '../ContactForm/ContactForm';
import Features from '../Features/Features';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
             <Features></Features>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;