import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseMe from '../components/WhyChooseMe';
import ProcessFlow from '../components/ProcessFlow';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO title="Home" />
            <main>
                <Hero />
                <ServicesPreview />
                <WhyChooseMe />
                <ProcessFlow />
                <Testimonials />
            </main>
        </>
    );
};

export default Home;
