import React from 'react';
import styles from './Sidebar.module.css'
import Link from 'next/link'
import { Grid } from '@material-ui/core';

const Sidebar = () => {
    return (
            <nav className={styles.nav}>
                <Grid container>
                    <Grid className={styles.logo} item>
                        <img style={{width: "100%"}} src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                    </Grid>
                    <Grid className={styles.linkItems} item container direction="column">
                        <Link href="/about"><a>About</a></Link>
                        <Link href="/jobs"><a>Jobs</a></Link>
                        <Link href="/contact"><a>Contact</a></Link>
                        <Link href="/colophon"><a>Colophon</a></Link>
                    </Grid>
                </Grid>
            </nav>
    );
};

export default Sidebar;