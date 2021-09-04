import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Yashiki</h1>
      <p>Ristorante giapponese</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo='/pranzo'
        >
          Men&ugrave; pranzo
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          linkTo='/cena'
 
        >
          Men&ugrave; cena
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
