import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedSection from '../Featured/Featured';
import ContactUs from '../ContactForm/ContactForm';
import Features from '../Features/Features';
import Review from '../Review/Review';
import FAQ from '../FAQ/FAQ';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
             <Features></Features>
             <Review></Review>
             <FAQ></FAQ>
             <Newsletter></Newsletter>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;