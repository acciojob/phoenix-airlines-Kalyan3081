import React from 'react'
import styles from './PhoenixAirlines.module.css'
import { Link } from 'react-router'

const Landingpage = () => {
    return (
        <>
            <nav className={styles.navBar}>
                <h3>Flight Booking App</h3>
            </nav>
            <h1 className={styles.LandingpageTitle}>Welcome to Flight Booking App</h1>
            <Link to="/flight-search">
                <button className={styles.Landingpagebtn}>Search flights here</button>
            </Link>
        </>
    )
}

export default Landingpage
