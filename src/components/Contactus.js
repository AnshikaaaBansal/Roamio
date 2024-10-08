import backgroundImage from '../images/background2.jpg';

function Contactus() {
    const styles = {
        hero: {
            margin: 0,
            backgroundImage: `url(${backgroundImage})`,
            height: '120vh',
            width: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
            color: '#222831',
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
            marginLeft: '2%',
        },
        h1: {
            fontSize: '6vw',
            color: '#222831',
            textShadow: '3px 3px 0px #EEEEEE',
            marginTop: '4%',
            marginBottom: '1%',
        },
        subtitle: {
            margin: '0px',
            fontSize: '2.5vw',
        },
        subtitle1: {
            marginTop: '4px',
            fontSize: '2.0vw',
        },
        general: {
            padding: '1%',
            width: '38vw',
            height: '14vw',
            backgroundColor: '#EEEEEE',
            borderRadius: '5px',
            boxShadow: '-10px 10px #222831',
        },
        h2: {
            fontSize: '2vw',
            padding: '0px 40px',
            margin: '5px',
        },
        p: {
            marginLeft: '60px',
            fontSize: '1.5vw',
        },
        gc: {
            marginLeft: '1vw',
            display: 'flex',
            alignItems: 'center',
        },
        contact: {
            marginTop: '-160px',
            textAlign: 'center',
            fontSize: '5vw',
            color: '#222831',
            textShadow: '3px 3px 0px #EEEEEE',
            marginBottom: '40px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
        },
        contactImg: {
            marginTop: '7px',
            borderRadius: '5px',
            width: '5vw',
        },
        support1: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: '20px',
            color: '#222831',
        },
        support2: {
            padding: '20px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'baseline',
            width: '19vw',
            height: '20vw',
            backgroundColor: 'aliceblue',
            boxShadow: '3px 3px #222831',
        },
        supporth3: {
            fontSize: '2vw',
            margin: '5px 0px',
        },
        supportSpan: {
            fontSize: '1.2vw',
            margin: '5px 0px',
            textDecoration: 'underline',
            fontWeight: '600',
        },
        office: {
            display: 'flex',
            justifyContent: 'space-evenly',
            backgroundColor: 'aliceblue',
            margin: '0px 100px',
            padding: '20px 0px',
            borderRadius: '100px',
            marginBottom: '50px',
            boxShadow: '10px 10px #222831',
        },
        supportP: {
            fontSize: '1.25vw',
        },
        officeP: {
            fontSize: '1.5vw',
            margin: '5px 0px',
            color: '#222831',
        },
        officeh3: {
            margin: '15px 0px',
            fontSize: '2.5vw',
            textDecoration: 'underline',
            color: '#222831',
        },
        officeh2: {
            margin: '0',
            textAlign: 'center',
            fontSize: '5vw',
            color: '#222831',
            textShadow: '3px 3px 0px #EEEEEE',
            marginBottom: '20px',
        },
    };

    return (
        <>
            <section style={styles.hero}>
                <div style={styles.title}>
                    <h1 style={styles.h1}>Reach Out To Us!</h1>
                    <div>
                        <p style={styles.subtitle}>Get in touch with us for any queries.</p>
                        <p style={styles.subtitle1}>&emsp; &emsp; &emsp; &emsp; &ensp; We're here for you :)</p>
                    </div>
                    <div style={styles.general}>
                        <h2 style={styles.h2}>For General Queries:</h2>
                        <div style={styles.gc}>
                            <img src={require("../images/email.gif")} alt="Email Icon" style={styles.contactImg} />
                            <p style={styles.p}>roamio.io@gmail.com</p>
                        </div>
                        <div style={styles.gc}>
                            <img src={require("../images/phone-contact.gif")} alt="Phone Icon" style={styles.contactImg} />
                            <p style={styles.p}>0123-456-789</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 style={styles.contact}>Connect With Us</h2>
                <div style={styles.support1}>
                    <div style={styles.support2}>
                        <img src={require("../images/helpdesk.gif")} alt="Help Center Icon" style={styles.contactImg} />
                        <h3 style={styles.supporth3}>Help Center</h3>
                        <p style={styles.supportP}>Need assistance? Find answers and connect with our help desk here.</p>
                        <span style={styles.supportSpan}>roamio.helpio@gmail.com</span>
                    </div>
                    <div style={styles.support2}>
                        <img src={require("../images/customer-support.gif")} alt="Customer Support Icon" style={styles.contactImg} />
                        <h3 style={styles.supporth3}>Customer Support</h3>
                        <p style={styles.supportP}>Having Trouble? We're here to help! Get support and find solutions.</p>
                        <span style={styles.supportSpan}>roamio.customerio@gmail.com</span>
                    </div>
                    <div style={styles.support2}>
                        <img src={require("../images/travel.gif")} alt="Travel Icon" style={styles.contactImg} />
                        <h3 style={styles.supporth3}>Travel Guidance</h3>
                        <p style={styles.supportP}>Chart your course! Explore travel tips and connect with our travel experts here.</p>
                        <span style={styles.supportSpan}>roamio.travelio@gmail.com</span>
                    </div>
                    <div style={styles.support2}>
                        <img src={require("../images/payment.gif")} alt="Payment Icon" style={styles.contactImg} />
                        <h3 style={styles.supporth3}>Payment Team</h3>
                        <p style={styles.supportP}>Having payment related queries? Our team is ready to guide you.</p>
                        <span style={styles.supportSpan}>roamio.paymentio@gmail.com</span>
                    </div>
                </div>
                <div style={styles.support1}>
                    <div style={styles.support2}>
                        <img src={require("../images/booking.gif")} alt="Booking Icon" style={styles.contactImg} />
                        <h3 style={styles.supporth3}>Booking Assistance</h3>
                        <p style={styles.supportP}>Secure your trip with ease! Get booking assistance here.</p>
                        <span style={styles.supportSpan}>roamio.bookingio@gmail.com</span>
                    </div>
                    <div style={styles.support2}>
                        <img src={require("../images/server.gif")} alt="Server con" style={styles.contactImg} />
                        <h3 style={styles.supporth3}>Technical Support</h3>
                        <p style={styles.supportP}>For technical issues, reach out to our support center</p>
                        <span style={styles.supportSpan}>roamio.techio@gmail.com</span>
                    </div>
                    <div style={styles.support2}>
                        <img src={require("../images/airplane.gif")} alt="Airplane Icon" style={styles.contactImg} />
                        <h3 style={styles.supporth3}>International Relations</h3>
                        <p style={styles.supportP}>Navigating the World: Get Support with International Issues.</p>
                        <span style={styles.supportSpan}>roamio.irio@gmail.com</span>
                    </div>
                    <div style={styles.support2}>
                        <img src={require("../images/reception.gif")} alt="Reception Icon" style={styles.contactImg} />
                        <h3 style={styles.supporth3}>Other Requests</h3>
                        <p style={styles.supportP}>Didn't find what you need? Let us know.</p>
                        <span style={styles.supportSpan}>roamio.io@gmail.com</span>
                    </div>
                </div>
            </section >

            <section>
                <h2 style={styles.officeh2}>Roamio Offices</h2>
                <div style={styles.office}>
                    <div>
                        <h3 style={styles.officeh3}>San Diego, United States</h3>
                        <p style={styles.officeP}>Roamio Corporation</p>
                        <p style={styles.officeP}>1234 Me Esta Avenue, #0008</p>
                        <p style={styles.officeP}>San Diego, CA 5678</p>
                        <p style={styles.officeP}>United States</p>
                    </div>
                    <div>
                        <h3 style={styles.officeh3}>Hyderabad, India</h3>
                        <p style={styles.officeP}>Roamio HQ</p>
                        <p style={styles.officeP}>24, Whites Road, Gandhi Marg</p>
                        <p style={styles.officeP}>Hyderabad 012-120</p>
                        <p style={styles.officeP}>India</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contactus;