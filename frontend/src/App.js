import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home/home';
import Error from './pages/error/error';

import SignIn from './pages/signIn/signIn';
import Footer from './components/footer/footer';
import User from './pages/user/user';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}



export default App;

