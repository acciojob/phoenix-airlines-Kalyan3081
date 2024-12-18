import React from 'react';
import { connect } from 'react-redux';
import './PhoenixAirlines.css'
    import { Link } from 'react-router-dom';

const Flightsearch = ({
    tripType,
    sourceCity,
    destinationCity,
    journeyDate,
    returnDate,
    setTripType,
    setSourceCity,
    setDestinationCity,
    setJourneyDate,
    setReturnDate,
}) => {
    return (
        <>
            <nav className='navBar'>
                <h3>Flight Booking App</h3>
            </nav>
            <div className='FlightsearchContainer'>
                <input
                    type="radio"
                    id="oneway"
                    checked={tripType === 'oneway'}
                    onChange={() => setTripType('oneway')}
                />
                <label htmlFor="oneway">One Way</label>
                <input
                    type="radio"
                    id="roundTrip"
                    checked={tripType === 'roundtrip'}
                    onChange={() => setTripType('roundtrip')}
                />
                <label htmlFor="roundTrip">Round Trip</label>
            </div>
            <div className='FlightsearchSubContainer'>
                <div>
                    <label htmlFor="sourcecity">Source City</label>
                    <select
                        id="sourcecity"
                        className={styles.city}
                        value={sourceCity}
                        onChange={(e) => setSourceCity(e.target.value)}
                    >
                        <option value="">Source City</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="chennai">Chennai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="hyderabad">Hyderabad</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="destcity">Destination City</label>
                    <select
                        id="destcity"
                        className='city'
                        value={destinationCity}
                        onChange={(e) => setDestinationCity(e.target.value)}
                    >
                        <option value="">Destination City</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="chennai">Chennai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="hyderabad">Hyderabad</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="journeyDate">Journey Date</label>
                    <input
                        type="date"
                        id="journeyDate"
                        className='city'
                        value={journeyDate}
                        onChange={(e) => setJourneyDate(e.target.value)}
                    />
                </div>
                {tripType === 'roundtrip' && (
                    <div>
                        <label htmlFor="returnDate">Return Date</label>
                        <input
                            type="date"
                            id="returnDate"
                            className='city'
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                    </div>
                )}
            </div>
            <Link to="/flight-booking">
                <button className='Flightsearchbtn book-flight'>Search flight</button>
            </Link>
        </>
    );
};

// Map state to props
const mapStateToProps = (state) => ({
    tripType: state.tripType,
    sourceCity: state.sourceCity,
    destinationCity: state.destinationCity,
    journeyDate: state.journeyDate,
    returnDate: state.returnDate,
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
    setTripType: (tripType) => dispatch({ type: 'SET_TRIP_TYPE', payload: tripType }),
    setSourceCity: (city) => dispatch({ type: 'SET_SOURCE_CITY', payload: city }),
    setDestinationCity: (city) => dispatch({ type: 'SET_DESTINATION_CITY', payload: city }),
    setJourneyDate: (date) => dispatch({ type: 'SET_JOURNEY_DATE', payload: date }),
    setReturnDate: (date) => dispatch({ type: 'SET_RETURN_DATE', payload: date }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flightsearch);
