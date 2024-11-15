import React, { useEffect } from "react";
import "./Food3.scss";
import UVC1 from "../../../assets/UVC1.png";
import UVC2 from "../../../assets/UVC2.png";
import Tick from "../../../assets/TickLogo.png";

export default function Food3() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  return (
    <div className="Food3 m-tb">
      <div className="mn-br">
        <div className="inner-ply">
          <h1>UV Coated Paper</h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              <h3>UV Coated Paper</h3>
            </div>

            <div className="mn-cont">
              <p>
                Ultra-violet cured coatings can be applied over ink printed on
                paper and dried by exposure to UV radiation. UV coatings can be
                devised up to 100% solids so that they have no impulsive module
                that gives to pollution. This elevated solids level also
                allocates for the coating to be related in awfully thin films.
                UV coatings can be originated to a extensive assortment of gloss
                ranges. UV coating can be applied via most conformist industrial
                coating applications as well as by silkscreen.
              </p>
            </div>

            <div className="mn-img">
              <div className="row">
                <div className="col-md-6">
                  <div className="mn-im">
                    <img src={UVC1} alt="Ply Image" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Removed motion effect from image */}
                  <div className="mn-im">
                    <img src={UVC2} alt="Triple Ply" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mn-cont mt-3">
          <p>
            Due to the usually towering solids content of UV coating/varnish the
            facade of the cured film can be tremendously pensive and glossy. 80
            lb text and heavier weights of paper can be UV coated; however,
            cover weights are favoured.
          </p>
          <p>
            UV can be pertained on spot locations of the paper or by flooding
            the page. This coating function can intensify the color of the
            printed area. Drying is nearly immediate when depiction to the exact
            level of UV light so projects can shift rapidly into the bindery.
          </p>
          <p>
            A printed page with UV coating applied can be incredibly glossy or
            compressed to a matte finish. A good instance of UV coated paper is
            photo paper sold for home printing projects. UV coatings that are
            not completely healed can have a somewhat sticky feeling.
          </p>
        </div>

        <div className="prd-desc mt-3">
          <h4>Benefits of UV Coatings:</h4>
          <div className="mn-cont">
            <p>
              Ultraviolet coating has numerous benefits over other coating
              methods such as aqueous coating or varnish. They include:
            </p>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Very elevated glow finish</p>
            </div>
          </div>

          {/* Repeat for other items */}
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Fine abrasion confrontation</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Soaring simplicity</p>
            </div>
          </div>

          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Environmentally affable</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Immediate drying time with UV light spotlight</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
