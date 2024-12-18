import React from 'react'
import './PhoenixAirlines.css'
import { Link } from 'react-router'


const Confirmation = () => {
    return (
        <>
            <nav className='navBar'>
                <h3>Flight Booking App</h3>
            </nav>
            <p>Thank you for the booking. Click the below button to return to home page</p>
            <Link to="/">
                <button className='Landingpagebtn'>back to home</button>
            </Link>
        </>
    )
}

export default Confirmation
