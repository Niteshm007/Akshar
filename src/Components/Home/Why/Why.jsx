import React, { useState, useEffect, useRef } from "react";
import "./Why.scss";
import Img from '../../../assets/Coated Paper.png';
import CountUp from 'react-countup';
import { Link } from "react-router-dom";

export default function Why() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="Why m-t" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="w-left">
              <div className="up-txt">
                <h1>
                  <b>Why Choose</b> Foilam Global
                </h1>
                <p>
                  At Foilam Global, our goal is to offer you top-class
                  manufacture, export and supply of insulation material, coated
                  paper, woven and non-woven laminated extrusion materials that
                  show you that we really care about it! Not only have we got the
                  trendiest products, but we can also guarantee that they are of
                  the finest quality.
                </p>
              </div>

              <div className="dn-txt">
                <div className="row">
                  <div className="col-md-6">
                    <h1>
                      {startCount ? (
                        <CountUp start={0} end={10} duration={2} />
                      ) : (
                        0
                      )}
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div className="col-md-6">
                    <h1>
                      {startCount ? (
                        <CountUp start={0} end={100} duration={2} />
                      ) : (
                        0
                      )}+
                    </h1>
                    <p>Extrusion Coated Products</p>
                  </div>
                </div>
              </div>
              <div className="wbtn" align="center">
              <Link to="/about">
                <button className="wh-btn"><b>Read More</b></button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="w-right m-t">
              <div className="image-container">
                <img src={Img} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
