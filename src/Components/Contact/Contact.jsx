import React, { useEffect } from 'react';
import "./Contact.scss";
import CLogo from "./CLogo/CLogo";
import CMap from "./CMap/CMap";
import CForm from "./CForm/CForm";

export default function Contact() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="Contact">
    <CLogo/>
    <CMap/>
    <CForm/>
    </div>
  );
}
