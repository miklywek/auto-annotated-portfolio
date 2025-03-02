import * as React from 'react';
import Head from 'next/head';

const BaseLayout: React.FC = () => {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: '#f0f0f0' 
        }}>
            <Head>
                <title>My Image</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <img src="/my-image.jpg" alt="Custom Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
};

export default BaseLayout;
