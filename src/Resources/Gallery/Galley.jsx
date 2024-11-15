import React, { useEffect } from 'react';
import "./Gallery.scss";
import G1 from "../../assets/G1.png";
import G2 from "../../assets/G2.png";
import G3 from "../../assets/G3.png";
import G4 from "../../assets/G4.png";
import G5 from "../../assets/G5.png";
import G6 from "../../assets/G6.png";
import G7 from "../../assets/G7.png";
import G8 from "../../assets/G8.png";
import G9 from "../../assets/G9.png";
import G10 from "../../assets/G10.png";
import G11 from "../../assets/G11.png";
import G12 from "../../assets/G12.png";
import G13 from "../../assets/G13.png";
import G14 from "../../assets/G14.png";
import G15 from "../../assets/G15.png";
import G16 from "../../assets/G16.png";
import G17 from "../../assets/G17.png";
import G18 from "../../assets/G18.png";
import G19 from "../../assets/G19.png";
import G20 from "../../assets/G20.png";
import G21 from "../../assets/G21.png";
import G22 from "../../assets/G22.png";
import G23 from "../../assets/G23.png";
import G24 from "../../assets/G24.png";
import G25 from "../../assets/G25.png";
import G26 from "../../assets/G26.png";
import G27 from "../../assets/G27.png";
import G28 from "../../assets/G28.png";

export default function Galley() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Gallary container m-t m-tb">
      <div className="Glr-hd" align="center">
        <h1>Gallary</h1>
      </div>

      <div className="Galley-Img mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G1} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G2} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G3} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G4} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G5} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G6} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G7} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G8} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G9} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G10} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G11} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G12} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G13} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G14} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G15} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G16} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G17} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G18} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G19} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G20} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G21} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G22} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G23} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G24} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G25} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img">
              <img src={G26} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G27} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="glr-img img-fluid">
              <img src={G28} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
