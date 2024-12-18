import React from 'react'
import './PhoenixAirlines.css'
    import { Link } from 'react-router'

const Landingpage = () => {
    return (
        <>
            <nav className='navBar'>
                <h3>Flight Booking App</h3>
            </nav>
            <h1 className='LandingpageTitle'>Welcome to Flight Booking App</h1>
            <Link to="/flight-search">
                <button className='Landingpagebtn'>Search flights here</button>
            </Link>
        </>
    )
}

export default Landingpage
