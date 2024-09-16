import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/travel.webp';
import { useState } from 'react';

function Booknow() {
    const navigate = useNavigate();
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };
    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const styles = {
        heading: {
            backgroundImage: `url(${backgroundImage})`,
            height: "45vw",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
            color: "#222831",
        },
        headtext: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "55vw",
            marginLeft: "22.5vw",
            paddingTop: "17vw",
        },
        headtextH1: {
            fontSize: "4vw",
            margin: "0px",
        },
        headtextP: {
            fontSize: "2vw",
            textAlign: "justify",
        },
        transport: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "3vw",
            gap: "3vw",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
        },
        transportH2: {
            marginTop: "0px",
            fontSize: "3.5vw",
            textDecoration: "underline",
        },
        transportDiv: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2vw',
            backgroundColor: 'rgb(0, 140, 220)',
            height: '20vw',
            color: '#EEEEEE',
            borderRadius: '20px',
            width: '80vw',
        },
        transportImg: {
            width: '40vw',
            height: '20vw',
            borderRadius: '20px',
        },
        text: {
            padding: "3.5vw",
            display: "flex",
            flexDirection: "column",
            gap: "1vw",
        },
        textH3: {
            fontSize: "2vw",
            margin: "0",
        },
        textP: {
            fontSize: "1.2vw",
        },
        button: {
            width: "10vw",
            height: "3vw",
            borderRadius: "10px",
            fontSize: "1vw",
            fontWeight: "600",
            cursor: 'pointer',
        },
        headquote: {
            backgroundColor: "aliceblue",
            color: "#222831",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "80vw",
            padding: "55px",
            borderRadius: "15px",
        },
        travel: {
            marginLeft: "8.5vw",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
        },
        travelH2: {
            fontSize: "2vw",
            textDecoration: "underline",
            margin: "0px",
        },
        travelH3: {
            margin: "10px 0px",
            fontSize: "1.5vw",
        },
        travelP: {
            marginBottom: "10px",
            marginTop: "0px",
            fontSize: "1.2vw",
        },
        contact: {
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
            color: "#222831",
            marginBottom: '5px',
        },
    };
    return (
        <div>
            <section className="heading" style={styles.heading}>
                <div className="headtext" style={styles.headtext}>
                    <h1 style={styles.headtextH1}>Your Journey Starts Here</h1>
                    <p style={styles.headtextP}>Plan your dream adventure with confidence! At Roamio, we offer a one-stop shop for booking all your transportation needs. Search, compare, and book flights, trains, and more - all in one place. We prioritize your safety so that you can focus on creating unforgettable memories!</p>
                </div>
            </section>

            <section className="transport" style={styles.transport}>
                <div className="headquote" style={styles.headquote}>
                    <h2 style={styles.transportH2}>Book Your Needs For The Trip</h2>
                    <p style={styles.textH3}>"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover." - Mark Twain</p>
                </div>

                <div className="flights" style={styles.transportDiv}>
                    <img src={require("../images/flight.jpeg")} alt="Flight" style={styles.transportImg} />
                    <div className="text" style={styles.text}>
                        <h3 style={styles.textH3}>FLIGHTS</h3>
                        <p style={styles.textP}>Let's get you soaring! Book your flight and take off!</p>
                        <button onClick={() => navigate('/flights')} onMouseEnter={() => handleMouseEnter('bookflights')}
                            onMouseLeave={handleMouseLeave} style={{ ...styles.button, backgroundColor: hoveredItem === 'bookflights' ? '#222831' : '#EEEEEE', color: hoveredItem === 'bookflights' ? '#EEEEEE' : '#222831' }}>
                            Book Flights
                        </button>
                    </div>
                </div>

                <div className="trains" style={styles.transportDiv}>
                    <div className="text" style={styles.text}>
                        <h3 style={styles.textH3}>TRAINS</h3>
                        <p style={styles.textP}>Your scenic journey awaits! Book your train ticket and chug along!</p>
                        <button onClick={() => navigate('/trains')} onMouseEnter={() => handleMouseEnter('booktrains')}
                            onMouseLeave={handleMouseLeave} style={{ ...styles.button, backgroundColor: hoveredItem === 'booktrains' ? '#222831' : '#EEEEEE', color: hoveredItem === 'booktrains' ? '#EEEEEE' : '#222831' }}>
                            Book Trains
                        </button>
                    </div>
                    <img src={require("../images/local.jpeg")} alt="Trains" style={styles.transportImg} />
                </div>

                <div className="local" style={styles.transportDiv}>
                    <img src={require("../images/stays.jpeg")} alt="stays" style={styles.transportImg} />
                    <div className="text" style={styles.text}>
                        <h3 style={styles.textH3}>STAYS</h3>
                        <p style={styles.textP}>Navigate the city with ease! Book your stay at central with comfort!</p>
                        <button onClick={() => navigate('/stays')} onMouseEnter={() => handleMouseEnter('bookstays')}
                            onMouseLeave={handleMouseLeave} style={{ ...styles.button, backgroundColor: hoveredItem === 'bookstays' ? '#222831' : '#EEEEEE', color: hoveredItem === 'bookstays' ? '#EEEEEE' : '#222831' }}>
                            Book Stays
                        </button>
                    </div>
                </div>
            </section>

            <section className="contact" style={styles.contact}>
                <div className="travel" style={styles.travel}>
                    <h2 style={styles.travelH2}>For any queries:</h2>
                    <h3 style={styles.travelH3}>Travel Guidance</h3>
                    <p style={styles.travelP}>Chart your course! Explore travel tips and connect with our travel experts here.</p>
                    <span style={styles.travelP}>roamio.travelio@gmail.com</span>
                </div>
            </section>
        </div>
    );
}

export default Booknow;
