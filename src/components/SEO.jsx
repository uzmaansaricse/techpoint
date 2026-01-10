import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title }) => {
    const location = useLocation();

    useEffect(() => {
        const pageTitle = title ? `${title} | TechPoint India` : 'TechPoint India | Best Web Development Agency';
        document.title = pageTitle;

        // Meta Description Update
        let metaDescription = document.querySelector("meta[name='description']");
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = "TechPoint India offers premium web design, SEO, and app development services in India. We build high-performance digital solutions for Indian and global brands.";

        // Meta Keywords Update (Optional but requested)
        let metaKeywords = document.querySelector("meta[name='keywords']");
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = "Web Design India, SEO Company India, Mobile App Development Delhi, Best Web Developer Bangalore, Freelance Web Designer India, Luxury Web Design, TechPoint India";

    }, [location, title]);

    return null;
};

export default SEO;
