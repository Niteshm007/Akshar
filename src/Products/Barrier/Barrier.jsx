import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import "./Barrier.scss";
import BarrierImg from '../../assets/Barrier.png';
import ScrLm from "../../assets/SctLm.png";
import { Link } from "react-router-dom";

export default function Barrier() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="Barrier container m-t m-tb">
      <div className="row">
        {/* Left Content with sliding animation */}
        <motion.div 
          className="col-md-6" 
          initial={{ x: '-100vw', opacity: 0 }} // Start off-screen to the left
          animate={{ x: 0, opacity: 1 }} // Slide in and fade in
          transition={{ type: 'spring', stiffness: 100, damping: 25 }} // Add smooth spring effect
        >
          <div className="brf">
            <h1 align="center">
              Brief About <br /> <b> Barrier Film Insulation </b>
            </h1>
            <p>
              Barrier firm insulation materials are designed to provide thermal
              resistance and minimize heat transfer in a variety of
              applications, including building construction, industrial
              settings, and HVAC systems. These materials typically consist of a
              combination of high-performance insulative properties and
              reflective barriers that reduce both heat conduction and radiant
              heat flow. By incorporating a reflective surface, barrier firm
              insulation helps to prevent heat from entering or escaping through
              walls, roofs, and ceilings, improving the overall energy
              efficiency of a structure.
              <br />
              <br />
              The materials often used in barrier firm insulation include foam,
              and reflective films, each chosen for their unique ability to
              resist heat flow. Fiberglass and foam provide bulk insulation that
              slows down the conduction of heat, while reflective barriers, such
              as aluminum or metallized films, reflect radiant heat back into
              the space, further enhancing thermal protection. This combination
              of materials is especially effective in climates with extreme
              temperature variations, where both heat gain and heat loss need to
              be controlled.
            </p>
          </div>
        </motion.div>

        {/* Right Content with sliding animation */}
        <motion.div 
          className="col-md-6 justify-content-center align-items-center" 
          initial={{ x: '100vw', opacity: 0 }} // Start off-screen to the right
          animate={{ x: 0, opacity: 1 }} // Slide in and fade in
          transition={{ type: 'spring', stiffness: 100, damping: 25 }} // Add smooth spring effect
        >
          <div className="brf-img">
            <img src={BarrierImg} alt="" className="img-fluid" />
          </div>
        </motion.div>
      </div>

      <div className="row">
        <div className="product-typ row m-t" align="center">
          <div className="col-md-12">
            <motion.div
              className="card"
              style={{ width: "20rem" }}
              initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
              animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
              transition={{ duration: 0.5 }} // Smooth animation for the card
            >
              <img
                src={ScrLm}
                className="card-img-top"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4>Woven Scrim Laminated Film</h4>
                <p className="card-text">
                  Chemical Research expertise in producing and manipulating
                  chemicals to energy properties.
                </p>
                <div className="plink">
                  <Link to="/Barrier1">
                    <a href="">
                      <p>Read More</p>
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
