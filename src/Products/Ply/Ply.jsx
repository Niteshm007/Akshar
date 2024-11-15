import React, { useEffect } from 'react';
import "./Ply.scss";
import Plyimg from "../../assets/Ply .png";
import FourPly from "../../assets/4Ply.png";
import MultiPly from "../../assets/MultiPly.png";
import { Link } from "react-router-dom";

export default function Ply() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="Ply container m-t m-tb">
      <div className="row">
        {/* Left Content */}
        <div className="col-md-6">
          <div className="brf">
            <h1 align="center">
              Brief About <br /> <b> Ply Laminated Foil </b>
            </h1>
            <p>
              Ply Laminated Foil is a versatile and durable insulation material
              made by bonding multiple layers of aluminum foil to a substrate,
              such as fabric or plastic. The resulting multi-layer structure
              enhances both strength and thermal performance. This material is
              primarily used for reflecting radiant heat and improving thermal
              insulation in a variety of applications, including construction,
              HVAC systems, and packaging.
              <br />
              <br />
              The multiple layers of foil in ply laminated foil help improve
              heat reflection and moisture resistance, making it effective in
              controlling temperature and reducing energy loss. The material is
              often lightweight, flexible, and easy to install, offering
              excellent protection against heat and cold. Additionally, its
              durability ensures it can withstand environmental wear and tear
              while maintaining its insulating properties over time.
              <br />
              <br />
              Ply laminated foil is a cost-effective, high-performance
              alternative to other types of insulation, such as traditional
              radiant barriers, due to its enhanced durability and thermal
              efficiency.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-md-6 justify-content-center align-items-center">
          <div className="brf-img">
            <img src={Plyimg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="product-typ row m-t" align="center">
          {/* First Card */}
          <div className="col-md-4">
            <div className="card" style={{ width: "20rem" }}>
              <img src={Plyimg} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>Triple Laminate for Packing</h4>
                <p className="card-text">
                  We develop and design new procedures, tools systems for agricultural products environments.
                </p>
                <div className="plink">
                  <Link to="/ThreePly">
                    <a href=""><p>Read More</p></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-4">
            <div className="card" style={{ width: "20rem" }}>
              <img src={FourPly} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>Four Ply Laminate for Packaging</h4>
                <p className="card-text">
                Chemical Research expertise in producing and manipulating chemicals to energy properties.
                </p>
                <div className="plink">
                <Link to="/FourPly">
                    <a href=""><p>Read More</p></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-md-4">
            <div className="card" style={{ width: "20rem" }}>
              <img src={MultiPly} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>Multy Ply Laminate For Packaging</h4>
                <p className="card-text">
                  Materials Engineering should include scientific and engineering strength relationships of materials.
                </p>
                <div className="plink">
                <Link to="/MultiPly">
                    <a href=""><p>Read More</p></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
