import Head from 'next/head';
import React from 'react';

const colophon = () => {
    return (
        <>
            <Head>
                <title>colophon</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div>
                    <p>This website is statically generated through Next.js and deployed with Netlify. Content modeling is set up through Prismic. Text set in Plain Thin by Optimo.</p>
                    <br />
                    <p>The design of this website is copyrighted. If you'd like to reuse any of the content outside the typical bounds of fair use, please reach out to us directly.</p>
                    <br />
                    <p>This site is served without ads. Any analytics collected are fully GDPR compliant.</p>
                    <br />
                    <br />
                </div>
                <hr />
                <footer>
                    <br />
                    <br />
                    <p><small>LFE, Inc. (“LFE”) maintains a single website–– www.lfe.org–– and does not solicit, offer, or sell securities via the internet. Any representations to the contrary and any websites other than www.lfe.org are not endorsed by LFE.</small></p>
                </footer>
            </div>
        </>
    );
};

export default colophon;