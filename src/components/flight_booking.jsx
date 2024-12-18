import React from 'react'
import styles from './PhoenixAirlines.css'
import { Link } from 'react-router'


const Flight_booking = () => {
    return (
        <>
            <nav className='navBar'>
                <h3>Flight Booking App</h3>
            </nav>
            <p>Booking Confirmation for Flight Air India (AI-275)</p>
            <div className='Bookingcontainer'>

                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required />


                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required />


                <label htmlFor="email">Email *</label>
                <input type="text" id="email" name="email" required />


                <label htmlFor="phno">Mobile Number *</label>
                <input type="tel" id="phno" name="phno" required />
            </div>

            <Link to="/confirmation">
                <button className='Flightsearchbtn'>Confirm Booking</button>
            </Link>
        </>
    )
}

export default Flight_booking
