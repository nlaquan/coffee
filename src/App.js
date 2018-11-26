import React from 'react';
import './App.scss';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import MainWrapper from './components/layouts/MainWrapper';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <MainWrapper />
      <Footer />
    </React.Fragment>
  );
};

export default App;
