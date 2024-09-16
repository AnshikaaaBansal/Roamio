import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/background.jpg';
import { IonIcon } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';
import { useState } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };
    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const styles = {
        home: {
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 200px',
            height: '500px',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
        },
        heading: {
            color: '#222831',
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: 'bolder',
            margin: '0px',
        },
        paragraph: {
            color: '#222831',
            textAlign: 'center',
            fontSize: '1.5rem',
            margin: '0px',
        },
        paragraph1: {
            color: '#222831',
            margin: '0px',
        },
        subHeading: {
            color: '#222831',
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 'bolder',
            margin: '0px',
        },
        btn1: {
            display: 'flex',
        },
        button: {
            fontSize: '1.8rem',
            padding: '3px 22px',
            margin: '15px',
            borderRadius: '10px',
            fontWeight: 'bold',
            backgroundColor: '#EEEEEE',
            color: '#222831',
            cursor: 'pointer',
        },
        background: {
            content: '""',
            position: 'absolute',
            background: `url(${backgroundImage}) no-repeat center center/cover`,
            height: '550px',
            top: '0px',
            left: '0px',
            width: '100%',
            zIndex: '-1',
            opacity: '0.5',
        },
        section: {
            marginTop: '75px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
        },
        section1: {
            marginTop: '30px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        heading1: {
            marginTop: '0px',
            marginLeft: '100px',
            color: '#222831',
            fontSize: 'xx-large',
            marginBottom: '10px',
        },
        container: {
            display: 'grid',
            gridGap: '10px',
            width: '90%',
            margin: '0 auto',
            gridTemplateColumns: 'repeat(5, 1fr)',
        },
        container1: {
            display: 'grid',
            gridGap: '10px',
            width: '90%',
            margin: '0 auto',
            gridTemplateColumns: 'repeat(4, 1fr)',
        },
        box: {
            padding: '12px',
            border: '1px solid #EEEEEE',
            textAlign: 'justify',
            borderRadius: '7px',
            backgroundColor: 'aliceblue',
            color: '#222831',
            textDecoration: 'none',
        },
        image: {
            width: '100%',
            borderRadius: '7px',
            height: '60%',
            objectFit: 'cover',
        },
        image1: {
            width: '100%',
            borderRadius: '7px',
            height: '45%',
            objectFit: 'cover',
        },
        content: {
            color: '#222831',
        },
        h2: {
            margin: '10px 0px 0px 0px',
        },
        cardWrapper: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '20px',
        },
        cardPrice: {
            background: '#00ADB5',
            color: '#EEEEEE',
            fontSize: '1rem',
            padding: '5px 8px',
            borderRadius: '6px',
        },
        cardRating: {
            background: 'rgb(255, 196, 12)',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            color: '#EEEEEE',
            fontSize: '1rem',
            padding: '5px 8px',
            borderRadius: '6px',
        },
        starIcon: {
            fontSize: '17px',
            display: 'block',
        },
    };
    return (
        <>
            <section style={styles.home}>
                <div style={styles.background}></div>
                <h1 style={styles.heading}>Welcome to Roamio - Your Passport to Boundless Adventures!</h1>
                <br />
                <p style={styles.paragraph}>Embark on a journey of discovery with our travel website, where every
                    click unveils a world of endless
                    possibilities. From exotic destinations to hidden gems, we're your gateway to unforgettable adventures,
                    tailored experiences, and lifelong memories. Explore, dream, and wander with us as we ignite your wanderlust
                    and inspire your next great escape.</p>
                <br />
                <p style={styles.subHeading}>Welcome to our travel community!</p>
                <div style={styles.btn1}>
                    <button onClick={() => navigate('/booknow')} onMouseEnter={() => handleMouseEnter('booknow')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.button, backgroundColor: hoveredItem === 'booknow' ? '#222831' : '#EEEEEE', color: hoveredItem === 'booknow' ? '#EEEEEE' : '#222831' }}>
                        Book Now
                    </button>
                </div>
            </section>

            <section style={styles.section}>
                <h1 style={styles.heading1}>Trending Destinations</h1>
                <div style={styles.container}>
                    <div onMouseEnter={() => handleMouseEnter('havelock')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'havelock' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                        <Link to="/havelock"><img src={require("../images/havelock.jpg")} style={styles.image} alt="Havelock Island" /></Link>
                        <div style={styles.content}>
                            <div style={styles.cardWrapper}>
                                <div style={styles.cardPrice}>From $50.00</div>
                                <div style={styles.cardRating}>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <data value="5">(5)</data>
                                </div> </div>
                            <h2 style={styles.h2}>Havelock Island</h2>
                        </div>
                    </div>
                    <div onMouseEnter={() => handleMouseEnter('paris')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'paris' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                        <Link to="/paris"><img src={require("../images/paris.jpg")} style={styles.image} alt="Paris" /></Link>
                        <div style={styles.content}>
                            <div style={styles.cardWrapper}>
                                <div style={styles.cardPrice}>From $55.00</div>
                                <div style={styles.cardRating}>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <data value="5">(5)</data>
                                </div>
                            </div>
                            <h2 style={styles.h2}>Paris</h2>
                        </div>
                    </div>

                    <div onMouseEnter={() => handleMouseEnter('queenstown')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'queenstown' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                        <Link to="/queenstown"><img src={require("../images/queenstown.jpg")} style={styles.image} alt="Queenstown" /></Link>
                        <div style={styles.content}>
                            <div style={styles.cardWrapper}>
                                <div style={styles.cardPrice}>From $53.00</div>
                                <div style={styles.cardRating}>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={starOutline} style={styles.starIcon}></IonIcon>
                                    <data value="4">(4)</data>
                                </div>
                            </div>
                            <h2 style={styles.h2}>Queenstown</h2>
                        </div>
                    </div>

                    <div onMouseEnter={() => handleMouseEnter('rio')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'rio' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                        <Link to="/rio"><img src={require("../images/rio.jpg")} style={styles.image} alt="Rio de Janeiro" /></Link>
                        <div style={styles.content}>
                            <div style={styles.cardWrapper}>
                                <div style={styles.cardPrice}>From $57.00</div>
                                <div style={styles.cardRating}>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={starOutline} style={styles.starIcon}></IonIcon>
                                    <data value="4">(4)</data>
                                </div>
                            </div>
                            <h2 style={styles.h2}>Rio de Janeiro</h2>
                        </div>
                    </div>

                    <div onMouseEnter={() => handleMouseEnter('helsinki')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'helsinki' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                        <Link to="/helsinki"><img src={require("../images/helsinki.jpg")} style={styles.image} alt="Helsinki" /></Link>
                        <div style={styles.content}>
                            <div style={styles.cardWrapper}>
                                <div style={styles.cardPrice}>From $52.00</div>
                                <div style={styles.cardRating}>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={star} style={styles.starIcon}></IonIcon>
                                    <IonIcon icon={starOutline} style={styles.starIcon}></IonIcon>
                                    <data value="4">(4)</data>
                                </div>
                            </div>
                            <h2 style={styles.h2}>Helsinki</h2>
                        </div>
                    </div>
                </div>
            </section >

            <section style={styles.section1}>
                <h1 style={styles.heading1}>Let our customers guide your next adventure!</h1>
                <div style={styles.container1}>
                    <div onMouseEnter={() => handleMouseEnter('doha')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'doha' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                        <Link to="/doha"><img src={require("../images/doha.jpg")} style={styles.image1} alt="Doha" /></Link>
                        <div classNameName="content">
                            <h2 style={styles.h2}>Doha</h2><br />
                            <p style={styles.paragraph1}><i>"Amazing Smells"</i></p><br />
                            <p style={styles.paragraph1}>
                                I visited Doha last month. I had a friend take me there. It was very easy to
                                find my way around. Worth a visit, but make sure you have plenty of sunscreen on as well as a
                                hat. As you pass through the market, some areas are exposed to the sun, but most are under
                                cover. Great prices for fresh spices.
                            </p>
                        </div>
                    </div>
                    <div onMouseEnter={() => handleMouseEnter('nyc')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'nyc' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                        <Link to="/nyc"><img src={require("../images/nyc.jpg")} style={styles.image1} alt="New York" /></Link>
                        <div className="content">
                            <h2 style={styles.h2}>New York</h2><br />
                            <p style={styles.paragraph1}><i>"Just Great"</i></p><br />
                            <p style={styles.paragraph1}>Well, what can I say about New York...It's just brillant. It is the city that never sleeps. It
                                has loads of things to do and go shopping. Take a trip up the Emipre State and witness
                                the wonderful views of the city. Take a ride round the Central Park in a horse and carriage.
                                It's a lovely way to see the park. Great meal in hard rock cafe.
                            </p>
                        </div>
                    </div>

                    <div onMouseEnter={() => handleMouseEnter('istanbul')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'istanbul' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                        <Link to="/istanbul"><img src={require("../images/istanbul.jpg")} style={styles.image1} alt="Istanbul" /></Link>
                        <div className="content">
                            <h2 style={styles.h2}>Istanbul</h2><br />
                            <p style={styles.paragraph1}><i>"So many places to visit"</i></p><br />
                            <p style={styles.paragraph1}>Istanbul was the capital city of 3 Empires and because of that there are too many places to
                                visit like Sultanahmet Square( Blue Mosque, Hagia Sophia), Topkapı Palace, Dolmabahçe
                                Palace, Basilica Cistern, Galata Tower, Maiden's Tower, Kariye Museum etc.</p>
                        </div>
                    </div>

                    <div onMouseEnter={() => handleMouseEnter('havelock1')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'havelock1' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                        <Link to="/havelock"><img src={require("../images/havelock1.webp")} style={styles.image1} alt="Havelock Island" /></Link>
                        <div className="content">
                            <h2 style={styles.h2}>Havelock Island</h2><br />
                            <p style={styles.paragraph1}><i>"Best beach in India"</i></p><br />
                            <p style={styles.paragraph1}>It is one of the best beaches I have seen in India. Cool, calm and clear blue water with high
                                waves
                                are its features. A very good place to relax and spend some quality time with friends and
                                family. Climate was good and people were very friendly and helpful. A must visit place.
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Home;