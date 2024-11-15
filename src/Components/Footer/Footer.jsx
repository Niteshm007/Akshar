import React from "react";
import "./Footer.scss";
import { IoMdTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing

export default function Footer() {
  const tasks1 = ["Insulation Material", "Coated Paper", "Woven Materials"];

  return (
    <div className="Footer">
      <div className="container">
        <div className="row w-f">
          {/* About Us section */}
          <div className="col-md-4">
            <div className="left-f">
              <h3>About Us</h3>
              <p>
                Foilam Global is a top-notched and renowned company based in
                Ahmedabad with an enormous consideration of quality and
                solution-based Manufacturing, Exporting and supplying insulation
                material, Coated paper, Woven and Non-woven based extrusion
                laminated materials. Foilam Global is committed to providing
                timely and high-quality products at affordable prices to benefit
                our customers.
              </p>
            </div>
          </div>

          {/* Products section */}
          <div className="col-md-4">
            <div className="mid-f">
              <h3>Our Products</h3>
              <ul>
                <li>
                  <Link to="/products/Ply">Ply Laminated Foil</Link>{" "}
                  {/* Link to PInsulation page */}
                </li>
                <li>
                  <Link to="/products/Insulation">Insulation Industries</Link>{" "}
                  {/* Link to PInsulation page */}
                </li>
                <li>
                  <Link to="/products/MetFilm">Metalized Film Laminated Material</Link>{" "}
                  {/* Link to PInsulation page */}
                </li>
                <li>
                  <Link to="/products/Barrier">Barrier Film Insulation Material</Link>{" "}
                  {/* Link to PInsulation page */}
                </li>
                <li>
                  <Link to="/products/Food">Food & Baverages Industries</Link>{" "}
                  {/* Link to PInsulation page */}
                </li>
                {/* <li>
                  <Link to="/products/PE">PE Coated Paper</Link>{" "}
                </li> */}
              </ul>
            </div>
          </div>

          {/* Contact section */}
          <div className="col-md-4">
            <div className="rgt-f">
              <h3>Contact</h3>
              <div className="r-cont d-flex">
                <div className="logo">
                  <IoMdTime className="f-icon" />
                </div>
                <div className="txt">
                  <p>Mon - Sun: 8.00 AM - 8.00 PM</p>
                </div>
              </div>
              <div className="r-cont d-flex">
                <div className="logo">
                  <FaLocationDot className="f-icon" />
                </div>
                <div className="txt">
                  <p>
                    Plot No 69 Vivekanand Industrial Park, Nr. Shivbhumi Ind.
                    Park, Kubadthal, Ahmedabad Indore Highway, Ahmedabad -
                    Gujarat - India - 382430
                  </p>
                </div>
              </div>
              <div className="r-cont d-flex">
                <div className="logo">
                  <FaPhone className="f-icon" />
                </div>
                <div className="txt">
                  <p>90234 07993</p>
                </div>
              </div>
              <div className="r-cont d-flex">
                <div className="logo">
                  <FiMail className="f-icon" />
                </div>
                <div className="txt">
                  <p>foilamglobal@gmail.com</p>
                </div>
              </div>
              <div className="ftr-social">
                <a href="" target="_blank">
                  <FaFacebook className="ftr-icn" />
                </a>
                <a href="" target="_blank">
                  <FaLinkedin className="ftr-icn" />
                </a>
                <a href="" target="_blank">
                  <FaInstagram className="ftr-icn" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
