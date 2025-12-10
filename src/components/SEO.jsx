import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title }) => {
    const location = useLocation();

    useEffect(() => {
        document.title = title ? `${title} | Digital Agency` : 'Digital Agency';

        // You can add favicon logic here if you want dynamic favicons, 
        // but usually a static one in index.html is enough. 
        // If strict requirement implies changing valid favicon per page:
        // const link = document.querySelector("link[rel~='icon']");
        // if (link) link.href = '/favicon-specific.ico'; 

    }, [location, title]);

    return null;
};

export default SEO;
