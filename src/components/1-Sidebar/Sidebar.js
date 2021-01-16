import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.css'
import Link from 'next/link'
import { Grid, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Sidebar = () => {

    if(true){
        var openNav = () => {
            const bar = document.getElementById('bar')
            bar.classList.add('openNav')
        }
        var closeNav = () => {
            const bar = document.getElementById('bar')
            bar.classList.remove('openNav')
        }}

    // const [bar, setBar] = useState({openNav})
    // if(openNav){
    //     setBar(closeNav)
    // }


    return (
            <nav className={styles.nav}>
                <Grid container>
                    <Grid className={styles.mobileBar} item container justify="space-between" alignItems="center">
                        <div className={styles.logo}><img style={{width: "100%"}} src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /></div>
                        <IconButton onClick={openNav} className={styles.bar}>
                            <MenuIcon/>
                        </IconButton>
                    </Grid>
                    <Grid id="bar" className={styles.linkItems} item container direction="column">
                        <Link href="/about"><a onClick={closeNav}>About</a></Link>
                        <Link href="/jobs"><a onClick={closeNav}>Jobs</a></Link>
                        <Link href="/contact"><a onClick={closeNav}>Contact</a></Link>
                        <Link href="/colophon"><a onClick={closeNav}>Colophon</a></Link>
                    </Grid>
                </Grid>
            </nav>
    );
};

export default Sidebar;