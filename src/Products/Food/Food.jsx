import React, { useEffect } from "react";
import "./Food.scss";
import FoodImg from "../../assets/FoodImg.png";
import PFL from "../../assets/PFL.png";
import GPM from "../../assets/GPM.png";
import UVC from "../../assets/UVC.png";
import ICW from "../../assets/ICW.png";
import VHL from "../../assets/VHL.png";
import FPM from "../../assets/FPM.png";
import { Link } from "react-router-dom";

export default function Food() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Food container m-t m-tb">
      <div className="row">
        {/* Left Content */}
        <div className="col-md-6">
          <div className="brf">
            <h1 align="center">
              Brief About <br /> <b> Food & Baverages Industries </b>
            </h1>
            <p>
              Food and beverage materials refer to the raw ingredients,
              additives, and packaging materials used in the production,
              processing, and distribution of food and drink products. These
              materials are foundational to the manufacturing process and vary
              widely depending on the type of product being produced. In the
              case of food, key raw materials include agricultural products like
              grains, fruits, vegetables, dairy, meat, and fish, as well as
              processed ingredients such as sugars, oils, spices, and
              preservatives. For beverages, materials might include water, fruit
              juices, tea, coffee beans, alcohol, and sweeteners, among others.
              The quality and sourcing of these materials are crucial to
              ensuring the final product's safety, taste, nutritional value, and
              shelf-life.
              <br />
              <br />
              Packaging materials are also a significant component of the food
              and beverage sector, influencing not only product preservation and
              safety but also marketing and consumer appeal. Common packaging
              materials include plastics, glass, metal, and paper, each chosen
              based on the product's requirements such as durability, barrier
              properties (to protect from moisture, oxygen, or light), and
              convenience.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-md-6 justify-content-center align-items-center">
          <div className="brf-img">
            <img src={FoodImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="product-typ row m-t" align="center">
          {/* First Card */}
          <div className="col-md-4">
            <div className="card" style={{ width: "20rem" }}>
              <img src={PFL} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>Paper Foil Lamination</h4>
                <p className="card-text">
                  We develop and design new procedures, tools systems for
                  agricultural products environments.
                </p>
                <div className="plink">
                  <Link to="/Food1">
                    <a href="">
                      <p>Read More</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-md-4">
            <div className="card" style={{ width: "20rem" }}>
              <img src={GPM} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>Gutkha & Panmasala Material</h4>
                <p className="card-text">
                  Chemical Research expertise in producing and manipulating
                  chemicals to energy properties.
                </p>
                <div className="plink">
                  <Link to="/Food2">
                    <a href="">
                      <p>Read More</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-md-4">
            <div className="card" style={{ width: "20rem" }}>
              <img src={UVC} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>UV Coated Paper</h4>
                <p className="card-text">
                  Materials Engineering should include scientific and
                  engineering strength relationships of materials.
                </p>
                <div className="plink">
                  <Link to="/Food3">
                    <a href="">
                      <p>Read More</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="product-typ row m-t" align="center">
          {/* Fourth Card */}
          <div className="col-md-4">
            <div className="card" style={{ width: "20rem" }}>
              <img src={ICW} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>Ice-cream Cone Sleeve Paper with Foil</h4>
                <p className="card-text">
                  Creating a dynamic company for the continuous exploration and
                  develop opportunities.
                </p>
                <div className="plink">
                  <Link to="/Food4">
                    <a href="">
                      <p>Read More</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Fifth Card */}
          <div className="col-md-4">
            <div className="card" style={{ width: "20rem" }}>
              <img src={FPM} className="card-img-top" alt="Card image cap" />
              <div className="card-body">
                <h4>Food Products Packaging Materials</h4>
                <p className="card-text">
                  Ensuring high reliability and optimal performance of rotating
                  power equipment.
                </p>
                <div className="plink">
                  <Link to="/Food5">
                    <a href="">
                      <p>Read More</p>
                    </a>
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
