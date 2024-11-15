import React, { useEffect } from "react";
import "./Food5.scss";
import FP1 from "../../../assets/FP1.png";
import FP2 from "../../../assets/FP2.png";
import Tick from "../../../assets/TickLogo.png";

export default function Food5() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  return (
    <div className="Food5 m-tb">
      <div className="mn-br">
        <div className="inner-ply">
          <h1>FOOD PRODUCTS PACKAGING Material</h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              <h3>FOOD PRODUCTS PACKAGING MATERIALS</h3>
            </div>

            <div className="mn-cont">
              <p>
                Food product packaging materials are designed to protect,
                preserve, and promote food while ensuring safety and convenience
                for consumers. These materials include a variety of options such
                as plastic, glass, metal, paper, and biodegradable materials,
                each offering different benefits like moisture resistance,
                durability, and ease of handling. Packaging also plays a
                critical role in maintaining product freshness, extending shelf
                life, and providing important labeling information for
                consumers. Additionally, there is a growing emphasis on
                sustainable packaging solutions to reduce environmental impact.
              </p>
            </div>

            <div className="mn-img">
              <div className="row">
                <div className="col-md-6">
                  <div className="mn-im">
                    <img src={FP1} alt="Ply Image" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Removed motion effect from image */}
                  <div className="mn-im">
                    <img src={FP2} alt="Triple Ply" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="prd-desc mt-3">
              <h4>Key Specifications</h4>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="Tick Logo" />
                </div>
                <div className="prd-txt">
                  <p>Polyester Film - Metallised Polyester Film - LDPE</p>
                </div>
              </div>

              {/* Repeat for other items */}
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="Tick Logo" />
                </div>
                <div className="prd-txt">
                  <p>Polyester Film - Aluminium Foil - LDPE</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="Tick Logo" />
                </div>
                <div className="prd-txt">
                  <p>
                    BOPP - Metallised Pet - LDPEPolyester Film - Metallised
                    Polyester Film - LDPE
                  </p>
                </div>
              </div>

              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="Tick Logo" />
                </div>
                <div className="prd-txt">
                  <p>Polyester Film - Aluminium Foil - LDPE</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="Tick Logo" />
                </div>
                <div className="prd-txt">
                  <p>BOPP - Metallised Pet - LDPE</p>
                </div>
              </div>
            </div>
            <div className="prd-desc mt-3">
              <h4>Product Features</h4>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="Tick Logo" />
                </div>
                <div className="prd-txt">
                  <p>Excellent Mach inability</p>
                </div>
              </div>

              {/* Repeat for other items */}
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="Tick Logo" />
                </div>
                <div className="prd-txt">
                  <p>Seal Strength</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="Tick Logo" />
                </div>
                <div className="prd-txt">
                  <p>Impact Strength</p>
                </div>
              </div>

              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="Tick Logo" />
                </div>
                <div className="prd-txt">
                  <p>Good Mach inability,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
