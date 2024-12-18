import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Landingpage from './Landingpage'
import Flightsearch from './flight-search'
import Flight_booking from './flight_booking'
import Confirmation from './Confirmation'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landingpage />}></Route>
                    <Route path='/flight-search' element={<Flightsearch />}></Route>
                    <Route path='/flight-booking' element={<Flight_booking />}></Route>
                    <Route path='/confirmation' element={<Confirmation />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
