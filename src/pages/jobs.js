import Head from 'next/head';
import React from 'react';
import Sidebar from '../components/1-Sidebar/Sidebar';

const about = () => {
    return (
        <>
            <Head>
                <title>jobs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <p>We are a small team spread across 4 time zones and have been fully remote since day one. We have a culture of transparent knowledge sharing and asynchronous decision making–– taking advantage of the latest tools and software to make great things, regardless of location.</p>
                <br />
                <p>As one of our earliest team members, you'll have a significant impact on our roadmap and will get to work closely with an incredibly talented, tight-knit group of designers and engineers.</p>
                <br />
                <br />

                <h4>What We Offer</h4>
                <br />
                <li>Healthy work life balance</li>
                <li>Competitive salary and equity</li>
                <li>Work remotely, no commuting to an office</li>
                <li>Health, dental and vision insurance (US)</li>
                <li>Unlimited paid time off</li>
                <li>Macbook Pro, 5K display and accessories</li>
                <li>Latest productivity software like Notion, Linear, etc.</li>
                <br />
                <br />

                <h4>Open Positions</h4>
                <br />
                <li>Backend Engineer</li>
                <li>iOS Engineer</li>
                <br />
                <br />

                <hr />

                <br />
                <br />
                <footer>
                    <p><small>If there isn’t an open position for you, you can also send an open application to jobs@lfe.org with a link to your website and/or resumé.</small></p>
                </footer>
            </div>
        </>
    );
};

export default about;