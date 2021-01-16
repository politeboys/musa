import Head from 'next/head';
import React from 'react';
import Sidebar from '../components/1-Sidebar/Sidebar';

const about = () => {
    return (
        <>
            <Head>
                <title>about</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <p>Los Feliz Engineering (LFE) is a consumer software company and app publisher. We are focused on creating delightful products for mobile.</p>
                <br />
                <p>Our flagship product, Honk, is an entirely new take on messaging.</p>
                <br />
                <p>We are backed by top investors including Naval Ravikant, Elad Gil, Brian Norgard, David Tisch, Jeff Fagnan, Ryan Hoover, Sarah Downey, Ron Rofé, Josh Hannah, Sahil Lavingia, Jason Warner, and others.</p>
            </div>
        </>
    );
};

export default about;