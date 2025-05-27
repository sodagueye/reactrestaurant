import './App.css';
import Authentification from './inscription/Authentification';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil/Accueil';
import Footer from './Footer/Footer';
import Inscrire from './inscription/Inscrire';
import Contact from './Contact/Contact';
import ReservationTable from './Reservation-Table/ReservationTable';
import About from './ABOUT/About'

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Authentification />} />
          <Route path="/inscrire" element={<Inscrire />} />

          <Route path="accueil" element={<Accueil />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="footer" element={<Footer />} />
          <Route path="about" element={<About/>} />

          <Route path="contact" element={<Contact />} />
          <Route path="Reservation" element={<ReservationTable />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
