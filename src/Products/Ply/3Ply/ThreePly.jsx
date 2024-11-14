import React, { useEffect } from "react";
import "./ThreePly.scss";
import Plyimg from "../../../assets/Ply .png";
import TriplePly from "../../../assets/TriplePly.png";
import Tick from "../../../assets/TickLogo.png";

export default function ThreePly() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="ThreePly">
      <div className="mn-br">
        <div className="inner-ply">
          <h1>Triple Laminate for Packing</h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              <h3>TRIPLE LAMINATE FOR PACKAGING</h3>
            </div>

            <div className="mn-cont">
              <p>
                <span>Foilam Global</span> produces three ply having the
                following structure: Polyester / Foil / Poly
              </p>
              <p>
                This 3 ply is appropriate for packing conservative products
                like confectionery, tea, consumables etc. The final product
                specifications are made as per agreed pact with the customers
                based on the type of products that are to be packed. Polyester
                to foil and foil to poly lamination is done by dry lamination.
                These foils are usually used for packing pouches.
              </p>
            </div>

            <div className="mn-img">
              <div className="row">
                <div className="col-md-6">
                  <div className="mn-im">
                    <img src={Plyimg} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Removed motion effect from image */}
                  <div className="mn-im">
                    <img src={TriplePly} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="hd m-t">
              <h3>FOIL MATERIAL</h3>
            </div>
            <div className="mn-cont mt-4">
              <p>
                Soft Aluminium foil made from alloy AA 1200 / AA 1235 / AA 8011
                conforming to Aluminium Association specification.
              </p>
            </div>

            <div className="mtr-tbl">
              <table className="table table-bordered table-responsive">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="bg-dark text-white">
                      Std Foil Gauge Options
                    </th>
                    <th className="bg-dark text-white">Tolerance ( +/-8% )</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">0.009</td>
                    <td className="">± 0.00072</td>
                  </tr>
                  <tr>
                    <td className="">0.012</td>
                    <td className="">± 0.00096</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="p-txt">
              Note: The quality of foil is as per our light gauge foil
              specification.
            </p>

            <div className="hd mt-3">
              <h3>POLYESTER</h3>
            </div>
            <div className="mtr-tbl2">
              <table className="table table-bordered table-responsive">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="bg-dark text-white">
                      Standard Thickness (micron)
                    </th>
                    <th className="bg-dark text-white">Tolerance (± 10%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">10</td>
                    <td className="">± 1</td>
                  </tr>
                  <tr>
                    <td className="">12</td>
                    <td className="">± 1.2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="hd mt-3">
              <h3>POLY:</h3>
            </div>

            <p className="p-txt mt-3">
              Colorless poly conforming to the applicable Government regulations
              as a sealant layer.
            </p>

            <div className="mtr-tbl3">
              <table className="table table-bordered table-responsive">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="bg-dark text-white">
                      Standard Thickness (micron)
                    </th>
                    <th className="bg-dark text-white">Tolerance (± 15%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">37.5 (150 gauge)</td>
                    <td className="">± 5.625</td>
                  </tr>
                  <tr>
                    <td className="">25 (100 gauge)</td>
                    <td className="">± 3.750</td>
                  </tr>
                  <tr>
                    <td className="">45 (180 gauge)</td>
                    <td className="">± 6.750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="prd-desc">
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>
                PEEL STRENGTH :
                <br /> Between PET / Foil : 150 g / 15 mm minimum <br />
                Between Foil / Poly : 200 g / 15 mm minimum
              </p>
            </div>
          </div>

          {/* Repeat for other items */}
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>
                PRINTING : Reverse printed up to eight colours on polyester as
                per text, layout and shade approved by customer.
              </p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>CONFIGURATION : un-printed 3 Ply available in the reel</p>
            </div>
          </div>

          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>
                WINDING
                <br />
                DIRECTION : Generally printed or clear polyester side is out
                with poly film inside.
              </p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>CORE : Material options: (a) Plastic (b) Card board</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>Core ID : 76 mm or 70 mm ± 1 mm</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>
                SPLICES : Butt type made with 25 mm pressure sensitive tape.
              </p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>REEL OUTER DIAMETER : 275 ± 5 mm maximum</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>REEL WANDER : Within ± 1 mm</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>REEL WIDTH : Minimum 40 mm ± 1 mm</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>JOINTS PER REEL : Maximum 2. Average less than 1.</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>
                IDENTIFICATION : Each reel shall be identified with a sticker
                pasted inside the centre with Reel number, Specification, Net
                weight, Gross weight & Date of manufacture.
              </p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="" />
            </div>
            <div className="prd-txt">
              <p>
                PACKING : Slit size reels are packed in cardboard
                carton.Relevant markings are provided in each outer package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
