import React from 'react';

// internal import
import Style from '../styles/index.module.css';
import { HeroSection, Service } from "../components/components_index"

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
    </div>
  )
}

export default Home;