import React, { useEffect } from "react";
import "./Food4.scss";
import IC1 from "../../../assets/IC1.png";
import IC2 from "../../../assets/ICW.png";
import Tick from "../../../assets/TickLogo.png";

export default function Food4() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  return (
    <div className="Food4 m-tb">
      <div className="mn-br">
        <div className="inner-ply">
          <h1>Ice-cream Cone Sleeve Paper with Foil</h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              <h3>ICE CREAM CONE SLEEVE PAPER WITH FOIL</h3>
            </div>

            <div className="mn-cont">
              <h4>
                Ice Cream Cone Sleeves Paper Structure: ( Maplitho Paper + Al
                foil +Primer )
              </h4>
              <p>
                Non Printed ice cream cone jackets papers in roll form for
                printing, shipping and handling waffle cones, sugar cones,
                frozen ice cream drumsticks, cornettos and pointed cone
                products. With paper lids. Cone sleeves are aluminum covered
                paper and printed for brand promotion.
              </p>
            </div>

            <div className="mn-img">
              <div className="row">
                <div className="col-md-6">
                  <div className="mn-im">
                    <img src={IC1} alt="Ply Image" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Removed motion effect from image */}
                  <div className="mn-im">
                    <img src={IC2} alt="Triple Ply" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="prd-desc mt-3">
          <h4>Key Specifications/Special Features:</h4>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Material: aluminized paper</p>
            </div>
          </div>

          {/* Repeat for other items */}
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Usage: packing paper tube for ice cream</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>
                Printing: roto, offset, flexo, with food rank ink, no poisonous
                and no dangerous to the wellbeing of people
              </p>
            </div>
          </div>

          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>
                Various paper thicknesses, colors, sizes and designs are offered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
