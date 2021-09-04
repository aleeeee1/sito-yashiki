import React from 'react';
import '../../App.css';
import News from '../News' 
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <News />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
