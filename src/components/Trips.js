import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";

function Trips() {
    const username = Cookies.get('username');
    const [userTrips, setUserTrips] = useState([]);

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await axios.get("http://localhost:5000/readtrip");
                const userTrips = response.data.filter(trip => trip.username === username);
                setUserTrips(userTrips);
            } catch (error) {
                console.error("Error while saving data:", error.message);
            }
        };
        fetchTrips();
    }, [username]);

    const styles = {
        div: {
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '70vh',
            marginTop: '20px',
            textAlign: 'center',
        },
        h1: {
            fontSize: '3vw',
            marginBottom: '20px',
        },
        h2: {
            fontSize: '2vw',
            marginTop: '20px',
        },
        ul: {
            padding: '0',
            margin: '0',
        },
        li: {
            fontSize: '1.5vw',
            marginBottom: '10px',
        },
    };

    return (
        <div style={styles.div}>
            <h1 style={styles.h1}>Welcome, {username}!</h1>
            <h2 style={styles.h2}>Plan your next trip.....</h2>
            <h2 style={styles.h2}>Wishlist : </h2>
            <ul style={styles.ul}>
                {userTrips.map((trip, index) => (
                    <li key={index} style={styles.li}>
                        {trip.trip}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Trips;