import { Link } from 'react-router-dom';
import backgroundImage from '../images/background1.jpg';
import { useState } from 'react';

function Explore() {
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };
    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const styles = {
        middleContainer: {
            height: '70vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            fontSize: 'x-large',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
        },
        middleBackground: {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '80vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            zIndex: -1,
        },
        middleTitle: {
            marginTop: '5%',
            color: '#222831',
        },
        middleText: {
            color: '#222831',
        },
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '10px',
            width: '90%',
            margin: '10px auto',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
        },
        box: {
            padding: '10px',
            border: '1px solid #EEEEEE',
            textAlign: 'justify',
            borderRadius: '7px',
            backgroundColor: 'aliceblue',
            color: '#222831',
            textDecoration: 'none',
        },
        boxImage: {
            width: '100%',
            height: '60%',
            borderRadius: '7px',
        },
        content: {
            padding: '10px',
        },
        title: {
            margin: 0,
            textAlign: 'center',
            fontSize: 'xx-large',
        },
        description: {
            fontSize: 'large',
        },
    };

    return (
        <>
            <div style={styles.middleBackground}></div>
            <div style={styles.middleContainer}>
                <h1 style={styles.middleTitle}>Explore Your Dream Destinations With Ease</h1>
                <p style={styles.middleText}>Discover all the essential information you need for a memorable trip</p>
            </div>
            <hr />
            <div style={styles.container}>
                <div onMouseEnter={() => handleMouseEnter('havelock')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'havelock' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/havelock"><img src={require("../images/havelock.jpg")} alt="Havelock Island" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Havelock Island</h2>
                        <p style={styles.description}>Havelock Island, also known as Swaraj Deep of the Andaman Islands, India, is covered with dense forests having tall, lush trees and outlined with white sandy beaches and coral reefs. It's loved for its picturesque views and its laid-back vibes.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('paris')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'paris' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/paris"><img src={require("../images/paris.jpg")} alt="Paris" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Paris</h2>
                        <p style={styles.description}>Paris, the capital of France, has been designed specifically for the enjoyment of tourists. It's a city with amazing food and rich cultural heritage such as historic sites, art museums, and parks with stunning views everywhere we turn.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('queenstown')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'queenstown' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/queenstown"><img src={require("../images/queenstown.jpg")} alt="Queenstown" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Queenstown</h2>
                        <p style={styles.description}>Queenstown, a town in New Zealand, sits on the shore of South Island's Lake Wakatipu and towering mountains. It's an adventure hub bursting with outdoor activities. There's also skiing from winter through spring, walking, and hiking trails with beautiful sightseeing places.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('rio')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'rio' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/rio"><img src={require("../images/rio.jpg")} alt="Rio de Janeiro" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Rio de Janeiro</h2>
                        <p style={styles.description}>Rio de Janeiro is a huge seaside city in Brazil with pretty beaches dramatic mountains and abundant natural beauty. Explore its numerous museums and art galleries with impressive architecture rich in culture, football stadiums, and a buzzing food scene.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('helsinki')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'helsinki' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/helsinki"><img src={require("../images/helsinki.jpg")} alt="Helsinki" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Helsinki</h2>
                        <p style={styles.description}>Finland's capital city, Helsinki is called the pearl of the Baltic Sea and is surrounded by one of the world's largest archipelagos. It is a cultural hotspot with unique architecture, natural reserves, wildlife parks, sauna places, swimming beaches, and live music festivals. It has some picturesque villages and towns.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('newyork')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'newyork' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/newyork"><img src={require("../images/nyc.jpg")} alt="New York" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>New York</h2>
                        <p style={styles.description}>New York City, USA also known as the Big Apple is an iconic global center that has inspired the world with brilliant architecture, movies, and art. It's a fast-paced city known for its magnificent skyscrapers, Broadway theatres, and beautiful landmarks making it a perfect destination for travellers.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('tokyo')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'tokyo' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/tokyo"><img src={require("../images/tokyo.jpg")} alt="Tokyo" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Tokyo</h2>
                        <p style={styles.description}>Tokyo, Japan is chosen as the world's most satisfying city for travel. It has diverse offerings including spiritual sites, vintage teahouses, and peaceful gardens. It is enriched with cultural experiences, scenic beauty, an unrivaled food scene, and wild nightlife.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('interlaken')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'interlaken' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/interlaken"><img src={require("../images/interlaken.jpg")} alt="Interlaken" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Interlaken</h2>
                        <p style={styles.description}>Interlaken is a popular Swiss resort town in the Bernese Oberland on an alluvial plain, between Lake Thun and Lake Brienz.It has striking views of mountains, and natural and wildlife areas, and is a point for numerous adventure activities. This includes skiing, hiking trails, snowboarding, and toboggan rides.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('istanbul')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'istanbul' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/istanbul"><img src={require("../images/istanbul.jpg")} alt="Istanbul" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Istanbul</h2>
                        <p style={styles.description}>Istanbul, Turkey, is a spectacular city at the crossroads of two continents - Europe and Asia. This city is where the past goes hand in hand with the present with its beautiful historic landmarks, rich culture celebrating their faith, vibrant nightlife with marketplaces and shopping arcades, and delightful cuisine.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('capetown')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'capetown' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/capetown"><img src={require("../images/cape-town.jpg")} alt="Cape Town" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Cape Town</h2>
                        <p style={styles.description}>Cape Town, South Africa, is a modern cosmopolitan city surrounded by nature. From flat-topped Table Mountain down to the blue waters of Table Bay, it is a city known for scenic beaches and stunning biodiversity. Wine farms, wildlife safaris, flourishing arts, dining, and nightlife make it the perfect spot for tourists.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('doha')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'doha' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/doha"><img src={require("../images/doha.jpg")} alt="Doha" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Doha</h2>
                        <p style={styles.description}>Doha, the capital city of Qatar, is a small country located in the Middle East on the north-eastern coast of the Arabian Peninsula. It is a multicultural city known for its modern architecture, high-rise buildings, luxurious shopping malls, and dazzling views of the harbor.</p>
                    </div>
                </div>
                <div onMouseEnter={() => handleMouseEnter('krabi')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.box, boxShadow: hoveredItem === 'krabi' ? '0 0 10px #222831' : '0 0 0px #EEEEEE' }}>
                    <Link to="/krabi"><img src={require("../images/krabi.jpg")} alt="Krabi" style={styles.boxImage} /></Link>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Krabi</h2>
                        <p style={styles.description}>Krabi, Thailand is famous for its lush tropical greenery and stunning coastline with breathtaking beaches and islands. Its coral reef vistas are also one of the world’s most beautiful, which makes the City a great spot for coral diving. It is also abundant in limestone cliffs, meandering caves, hot springs, and a wildlife sanctuary.</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Explore;