import React, { useEffect } from 'react';
import './About.scss';
import AboutImg from '../../assets/About.png';
import AbWho from './AbWho/AbWho';
import Skills from './Skills/Skills';
import OCompany from './OCompany/OCompany';

export default function About() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='About Ovr-hd m-tb'>
      <div className="row">
        <div className="col-ms-12">
          <div className="about-img">
            <img src={AboutImg} alt="About Us" className='img-fluid' />
          </div>
        </div>
      </div>
      <AbWho />
      <Skills />
      <OCompany />
    </div>
  );
}
