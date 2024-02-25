import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GridComponent from './components/GridComponent';
import Home from './components/Home';



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/hotel-list' element={<GridComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
