import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import { GlobalProvider } from './Components/utils/GlobalContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Detail from './Routes/Detail';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/dentist/:id" element={<Detail />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;