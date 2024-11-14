import React, { useState } from 'react';
import { motion } from 'framer-motion';  // Importing framer-motion
import './Carasoul.scss';
import Paper from './PE Coated Paper/Paper';
import Insulation from './Insulation Material/Insulation';

export default function Carasoul() {
  // Track the active index of the carousel to trigger animations
  const [activeIndex, setActiveIndex] = useState(0);

  // Variants for tearing animation effect
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Hidden (teared state)
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',  // Fully visible, intact
      transition: { duration: 1, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Exit (teared state)
      transition: { duration: 0.5, ease: 'easeIn' },
    },
  };

  // Handling the carousel slide event to track active index
  const handleSlide = (direction) => {
    if (direction === 'next') {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 2); // Assuming 2 items
    } else {
      setActiveIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
    }
  };

  return (
    <div 
      id="carouselExampleControls" 
      className="carousel slide m-t" 
      data-bs-ride="carousel" 
      data-bs-interval="3000" // Auto-slide every 3 seconds
    >
      <div className="carousel-inner">
        {/* Paper Component */}
        <motion.div
          className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`} // Mark active item
          key={activeIndex}  // This ensures the component re-mounts on each change
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Paper />
        </motion.div>

        {/* Insulation Component */}
        <motion.div
          className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`} // Mark active item
          key={activeIndex}  // This ensures the component re-mounts on each change
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Insulation />
        </motion.div>
      </div>

      {/* Carousel Controls */}
      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselExampleControls" 
        data-bs-slide="prev"
        onClick={() => handleSlide('prev')}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExampleControls" 
        data-bs-slide="next"
        onClick={() => handleSlide('next')}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
