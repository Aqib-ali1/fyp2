import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

      <h1>
      A Revolution! That's all <br/>You need for product Searching</h1>
      <p>Now do all product searching work easily throught<br/>
      just one application and without wasting time on<br/>
      doing it manually</p>
      <div className='hero-btns'>
      
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;
