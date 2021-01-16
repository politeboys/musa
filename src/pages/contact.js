import Head from 'next/head';
import React from 'react';

const contact = () => {
    return (
        <>
            <Head>
                <title>contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div>
                    <p>General</p>
                    <p><span>lfe@lfe.org</span></p>
                </div>
                <br />
                <div>
                    <p>Press</p>
                    <p><span>press@lfe.org</span></p>
                </div>
                <br />
                <div>
                    <p>Jobs</p>
                    <p><span>jobs@lfe.org</span></p>
                </div>
            </div>
        </>
    );
};

export default contact;