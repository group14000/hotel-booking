import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GridComponent from './components/GridComponent';
import Home from './components/Home';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/booking-hotel-list' element={<GridComponent />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
