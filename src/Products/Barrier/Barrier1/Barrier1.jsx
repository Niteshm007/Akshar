import React, { useEffect } from "react";
import "./Barrier1.scss";
import WS1 from "../../../assets/WS1.png";
import WS2 from "../../../assets/WS2.png";
import Tick from "../../../assets/TickLogo.png";

export default function Barrier1() {
    useEffect(() => {
        // Smoothly scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="Barrier1 m-tb">
      <div className="mn-br">
        <div className="inner-ply">
          <h1>Woven Scrim Laminated Film</h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              <h3>Woven Scrim Laminated Film</h3>
            </div>

            <div className="mn-cont">
              <p>
                Radiant barriers or reflective barriers inhibit heat transfer by
                thermal radiation. Thermal energy may also be transferred via
                conduction or convection, however, and radiant barriers do not
                necessarily protect against heat transfer via conduction or
                convection
              </p>
            </div>

            <div className="mn-img">
              <div className="row">
                <div className="col-md-6">
                  <div className="mn-im">
                    <img src={WS1} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Removed motion effect from image */}
                  <div className="mn-im">
                    <img src={WS2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="prd-desc mt-3">
              <h4>Woven Scrim Laminated Film Types:</h4>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Metalized PET with PE woven fabric</p>
                </div>
              </div>

              {/* Repeat for other items */}
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>MBOPP with PE woven fabric</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Al Foil with PE woven fabric</p>
                </div>
              </div>
            </div>

            <div className="mtr-tbl mt-3">
              <table className="table table-bordered table-responsive">
                <thead className="text-white hd-clr">
                  <tr>
                    <th className="text-white hd-clr align-middle">Property <br />(Grammage)</th>
                    <th className="text-white hd-clr align-middle">Test Method <br />(ISO 536)</th>
                    <th className="text-white hd-clr align-middle">Unit <br />(g/sqm)</th>
                    <th className="text-white hd-clr align-middle">
                      Results <br />(140–160 (+/-5%))
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">Tensile–MD and CD</td>
                    <td className="">ASTM D828</td>
                    <td className="">N/25 mm</td>
                    <td className="">350 – 400 and100 – 200</td>
                  </tr>
                  <tr>
                    <td className="">Elongation– MD and CD</td>
                    <td className="">AS 4200.1</td>
                    <td className="">%</td>
                    <td className="">15±5</td>
                  </tr>
                  <tr>
                    <td className="">Force at break – MD and CD</td>
                    <td className="">ASTM D 2261</td>
                    <td className="">N</td>
                    <td className="">100±20</td>
                  </tr>
                  <tr>
                    <td className="">Water Vapour Transmission</td>
                    <td className="">ASTM F 1249</td>
                    <td className="">N</td>
                    <td className="">&lt;1</td>
                  </tr>
                  <tr>
                    <td className="">Emittance of surface Aluminium foil</td>
                    <td className="">ASTM E408</td>
                    <td className="">%</td>
                    <td className="">97±2 </td>
                  </tr>
                  <tr>
                    <td className="">Working Tempreture</td>
                    <td className="">-</td>
                    <td className="">Celsius</td>
                    <td className="">-50 to 110’C</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="prd-desc mt-3">
              <h4>Roll size:</h4>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Roll Width: 1000mm to 1550mm</p>
                </div>
              </div>

              {/* Repeat for other items */}
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Roll Length: 60m to 1500m</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Core I.D.: 76mm</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Note: Special dimension on request</p>
                </div>
              </div>
            </div>
            <div className="prd-desc mt-3">
              <h4>Usage:</h4>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Reinforced ⁄ Lamination For Air Bubble Insulation Materials
                    Manufacturing
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
                    Reinforced ⁄ Lamination For Foam Based Insulations Materials
                    Manufacturing
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Reinforced ⁄ Lamination For any Type of Thermal Insulations
                    Materials Manufacturing
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>For Manufacturing Insulation⁄Barrier Bags</p>
                </div>
              </div>
            </div>
            <div className="prd-desc mt-3">
              <h4>Available Roll Width:</h4>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>1.26 m and 1.52 m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
