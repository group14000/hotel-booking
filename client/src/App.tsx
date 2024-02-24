import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignupForm from './components/Auth/SignupForm';
import LoginForm from './components/Auth/LoginForm';
import GridComponent from './components/GridComponent';
import Home from './components/Home';



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/hotel-list' element={<GridComponent />} />
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
