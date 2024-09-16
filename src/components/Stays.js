import React from 'react';
import { star, starOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";

function Stays() {
    const history = useNavigate();
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };
    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    let [trip, setTrip] = useState("");

    const handleOnSubmit = async (hotel) => {
        try {
            const username = Cookies.get('username');

            const userData = {
                username: username,
                trip: hotel
            };
            await axios.post("http://localhost:5000/writetrip", userData);
            console.log("Data:", userData);
        } catch (error) {
            console.error("Error while saving data:", error.message);
        }
    }

    const handleHotelClick = async (hotel) => {
        setTrip(hotel);
        await handleOnSubmit(hotel);
        history('/trips');
    };

    const styles = {
        container4: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3.5vw',
            padding: '1vw 2vw',
            fontFamily: 'Arial, Helvetica, sans - serif',
            margin: '0px',
            color: '#222831',
        },

        box: {
            borderRadius: '10px',
            boxShadow: '0px 4px 2px #222831',
            padding: '1.2vw',
            textAlign: 'center',
            textDecoration: 'none',
        },

        h2: {
            fontSize: '2vw',
            margin: '1vw 0vw',
        },

        h3: {
            fontSize: '1.5vw',
            margin: '1vw 0vw',
            fontWeight: 'bold',

        },

        img: {
            width: '20vw',
            height: '12vw',
            borderRadius: '10px',
            objectFit: 'cover',
        },

        image: {
            width: '2.5vw',
            height: '2.5vw',
            padding: '10px',
        },

        p: {
            fontSize: '1.2vw',
            textAlign: 'justify',
            margin: '3px',
        },

        stars: {
            color: 'orange',
            fontSize: '24px',
        },

        span: {
            fontSize: '24px',
            margin: '10px',
            color: '#222831',
        },

        h1: {
            fontSize: '4vw',
            textAlign: 'center',
            margin: '0px',
            color: '#222831',
        },

        ai: {
            width: '2vw!important',
            height: '2vw!important',
            borderRadius: '0!important',
            padding: '1vw',
        },

        amenities: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr 1fr',
            gap: '8px',
        },

        div: {
            display: 'flex',
            alignItems: 'center',
        },

        body: {
            backgroundcolor: '#E1F7F5',
        },
    };

    const hotels = [
        {
            city: "Havelock Island",
            name: "Tilar Siro Andamans, CGH Earth",
            image: require("../images/tilar_siro.jpeg"),
            reviews: 3345,
            price: "400",
            roomType: "Deluxe Room",
            meals: "Complementary Breakfast",
            poolAccess: "Pool Access",
            wifi: "Free Wi-Fi",
            rating: 5,
        },
        {
            city: "Paris",
            name: "Grand Hotel Du Palais Royal",
            image: require("../images/du_palais.jpeg"),
            reviews: 4345,
            price: "720",
            roomType: "Private Suite",
            meals: "Complementary Breakfast",
            poolAccess: "Private Access",
            wifi: "Free Wi-Fi",
            rating: 4,
        },
        {
            city: "Queenstown",
            name: "Eichardt's Private Hotel",
            image: require("../images/eichardt.jpeg"),
            reviews: 3315,
            price: "1150",
            roomType: "Deluxe Room",
            meals: "Complementary Meals",
            poolAccess: "Private Access",
            wifi: "Free Wi-Fi",
            rating: 5,
        },
        {
            city: "Rio de Janeiro",
            name: "Ibis Rio de Janeiro Parque Olímpico",
            image: require("../images/ibi_rio.jpeg"),
            reviews: 3455,
            price: "150",
            roomType: "Deluxe Room",
            meals: "NA",
            poolAccess: "NA",
            wifi: "Free Wi-Fi",
            rating: 3,
        },
        {
            city: "Helsinki",
            name: "Hotel Kamp",
            image: require("../images/kamp.jpeg"),
            reviews: 4345,
            price: "615",
            roomType: "Deluxe Room",
            meals: "Complementary Breakfast",
            poolAccess: "NA",
            wifi: "Free Wi-Fi",
            rating: 4,
        },
        {
            city: "Tokyo",
            name: "Kimpton Shinjuku Tokyo",
            image: require("../images/kimpton.jpeg"),
            reviews: 3445,
            price: "500",
            roomType: "Premium Room",
            meals: "Complementary Breakfast",
            poolAccess: "Pool Access",
            wifi: "Free Wi-Fi",
            rating: 4,
        },
        {
            city: "New York City",
            name: "The Plaza New York - A Fairmont Managed Hotel",
            image: require("../images/plaza.jpeg"),
            reviews: 4345,
            price: "2200",
            roomType: "Deluxe Suite",
            meals: "Complementary Food",
            poolAccess: "Pool/Bar Access",
            wifi: "Free Wi-Fi",
            rating: 5,
        },
        {
            city: "Interlaken",
            name: "Victoria-Jungfrau Grand Hotel & Spa",
            image: require("../images/victoria.jpeg"),
            reviews: 3900,
            price: "1400",
            roomType: "Luxury Room",
            meals: "Complementary Breakfast",
            poolAccess: "Pool Access",
            wifi: "Free Wi-Fi",
            rating: 5,
        },
        {
            city: "Istanbul",
            name: "Hilton Istanbul Bomonti Hotel & Conference Center",
            image: require("../images/hilton.jpeg"),
            reviews: 4530,
            price: "370",
            roomType: "Deluxe Room",
            meals: "Complementary Meals",
            poolAccess: "Pool Access",
            wifi: "Free Wi-Fi",
            rating: 4,
        },
        {
            city: "Krabi",
            name: "Golden Hill Hotel",
            image: require("../images/goldenhotel.jpg"),
            reviews: 4345,
            price: "615",
            roomType: "Deluxe Room",
            meals: "Complementary Breakfast",
            poolAccess: "NA",
            wifi: "Free Wi-Fi",
            rating: 5,
        },
        {
            city: "Doha",
            name: "Radisson Blu Hotel",
            image: require("../images/radissonblu.jpg"),
            reviews: 4530,
            price: "370",
            roomType: "Deluxe Room",
            meals: "Complementary Meals",
            poolAccess: "Pool Access",
            wifi: "Free Wi-Fi",
            rating: 4,
        },
        {
            city: "Cape Town",
            name: "StayEasy Cape Town City Bowl",
            image: require("../images/stayeasy.jpg"),
            reviews: 4345,
            price: "2200",
            roomType: "Deluxe Suite",
            meals: "Complementary Food",
            poolAccess: "Pool/Bar Access",
            wifi: "Free Wi-Fi",
            rating: 4,
        },
    ];

    return (
        <>
            <h1 style={styles.h1}>Luxurious Stays</h1>
            <div className="container4" style={styles.container4}>
                {hotels.map((hotel, index) => (
                    <Link to="/trips" onClick={() => handleHotelClick(hotel.city)} className="box" key={index} onMouseEnter={() => handleMouseEnter(hotel.city)}
                        onMouseLeave={handleMouseLeave} style={{
                            ...styles.box, color: hoveredItem === hotel.city ? '#EEEEEE' : '#222831', boxShadow: hoveredItem === hotel.city ? '0 0 10px #222831' : '0 0 0px #EEEEEE', backgroundColor: hoveredItem === hotel.city ? '#0174BE' : 'aliceblue',
                        }}>
                        <h2 style={styles.h2}>{hotel.city}</h2>
                        <img src={hotel.image} className="image" alt={hotel.name} style={styles.img} />
                        <h3 style={styles.h3}>{hotel.name}</h3>
                        <div className="stars" style={styles.stars}>
                            {[...Array(5)].map((_, index) => (
                                <IonIcon
                                    key={index}
                                    icon={index < hotel.rating ? star : starOutline}
                                    className="star"
                                />
                            ))}
                            <span style={styles.span}>({hotel.reviews})</span>
                        </div>
                        <div className="amenities" style={styles.amenities}>
                            <div className="one" style={styles.div}>
                                <img src={require("../images/dollar.png")} className="ai" alt="Price" style={styles.image} />
                                <p style={styles.p}>{hotel.price} USD</p>
                            </div>
                            <div className="two" style={styles.div}>
                                <img src={require("../images/double-bed.png")} className="ai" alt="Room Type" style={styles.image} />
                                <p style={styles.p}>{hotel.roomType}</p>
                            </div>
                            <div className="three" style={styles.div}>
                                <img src={require("../images/restaurant.png")} className="ai" alt="Meals" style={styles.image} />
                                <p style={styles.p}>{hotel.meals}</p>
                            </div>
                            <div className="four" style={styles.div}>
                                <img src={require("../images/swimming-pool.png")} className="ai" alt="Pool Access" style={styles.image} />
                                <p style={styles.p}>{hotel.poolAccess}</p>
                            </div>
                            <div className="five" style={styles.div}>
                                <img src={require("../images/wi-fi.png")} className="ai" alt="Wi-Fi" style={styles.image} />
                                <p style={styles.p}>{hotel.wifi}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div >
        </>
    );
};

export default Stays;