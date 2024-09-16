import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const navigate = useNavigate();
    const [hoveredItem, setHoveredItem] = useState(null);
    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };
    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#00ADB5',
            alignItems: 'center',
            height: '10vh',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
        },
        logo: {
            margin: '10px 20px',
        },
        logoImg: {
            marginTop: '4.2vw',
            height: '8vw',
        },
        navbarUl: {
            display: 'flex',
        },
        navbarUlLi: {
            listStyle: 'none',
            fontSize: '1.8rem',
        },
        navbarUlLiA: {
            display: 'block',
            margin: '15px',
            padding: '3px 22px',
            borderRadius: '10px',
            textDecoration: 'none',
            cursor: 'pointer',
        },
        btnContainer: {
            display: 'flex',
        },
        btn: {
            fontSize: '1.8rem',
            padding: '3px 22px',
            margin: '8px',
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
    };

    return (
        <nav style={styles.navbar}>
            <div>
                <img src={require("../images/logo.png")} alt="Roamio Logo" style={styles.logoImg} />
            </div>
            <ul style={styles.navbarUl}>
                <li style={styles.navbarUlLi}>
                    <Link to="/" onMouseEnter={() => handleMouseEnter('home')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'home' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'home' ? '#222831' : '#EEEEEE' }} >Home</Link>
                </li>
                <li style={styles.navbarUlLi}>
                    <Link to="/explore" onMouseEnter={() => handleMouseEnter('explore')}
                        onMouseLeave={handleMouseLeave}
                        style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'explore' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'explore' ? '#222831' : '#EEEEEE' }}>Explore</Link>
                </li>
                <li style={styles.navbarUlLi}>
                    <Link to="/trips" onMouseEnter={() => handleMouseEnter('trips')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'trips' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'trips' ? '#222831' : '#EEEEEE' }} >Trips</Link>
                </li>
                <li style={styles.navbarUlLi}>
                    <Link to="/booknow" onMouseEnter={() => handleMouseEnter('booknow')}
                        onMouseLeave={handleMouseLeave} style={{ ...styles.navbarUlLiA, backgroundColor: hoveredItem === 'booknow' ? '#EEEEEE' : '#00ADB5', color: hoveredItem === 'booknow' ? '#222831' : '#EEEEEE' }} >Book Now</Link>
                </li>
            </ul>
            <div style={styles.btnContainer}>
                <button onClick={() => navigate('/contactus')} onMouseEnter={() => handleMouseEnter('contactus')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'contactus' ? '#222831' : '#EEEEEE', color: hoveredItem === 'contactus' ? '#EEEEEE' : '#222831' }}>
                    Contact Us
                </button>
                <button onClick={() => navigate('/login')} onMouseEnter={() => handleMouseEnter('login')}
                    onMouseLeave={handleMouseLeave} style={{ ...styles.btn, backgroundColor: hoveredItem === 'login' ? '#222831' : '#EEEEEE', color: hoveredItem === 'login' ? '#EEEEEE' : '#222831' }} >
                    Login/Sign Up
                </button>
            </div>
        </nav >
    );
};

export default Navbar;