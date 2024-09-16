import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Contactus from './components/Contactus';
import Booknow from './components/Booknow';
import Login from './components/Login';
import Trips from './components/Trips';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Flights from "./components/Flights";
import Stays from "./components/Stays";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/stays" element={<Stays />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;