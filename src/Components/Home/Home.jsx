import React, { useEffect } from 'react';
import './Home.scss';
import Paper from '../../Carasole/PE Coated Paper/Paper';
import OProduct from './Our Products/OProduct';
import Who from './Who we Are/Who';
import Why from './Why/Why';
import HContact from './HContact/HContact';
import Carasoul from '../../Carasole/Carasoul';


export default function Home() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="Home">
      <div className="row">
        <div className="carasol">
          <Carasoul/>
        </div>
        <div className="row"></div>
        <OProduct />
        <Who />
        <Why />
        <HContact />
      </div>
    </div>
  );
}