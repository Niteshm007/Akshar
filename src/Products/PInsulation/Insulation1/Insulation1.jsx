import React, { useEffect } from "react";
import "./Insulation.scss";
import PEFilm1 from "../../../assets/PEFilm1.png";
import PEFilm2 from "../../../assets/PEFilm2.png";
import Tick from "../../../assets/TickLogo.png";
export default function Insulation1() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Insulation1">
      <div className="mnins1-br">
        <div className="inner-ply">
          {/* Removed motion effect from header */}
          <h1>PE Film Laminated Aluminium Foil</h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              {/* Removed motion effect from subheader */}
              <h3>PE FILM LAMINETED ALUMINIUM FOIL ( AL+PE )</h3>
            </div>

            <div className="mn-cont">
              <p>
                At <span>Foilam Global</span> we offer a wide-ranging range of
                Industrial PE Laminated Aluminium Foil and Aluminium Foil
                Laminated Materials,, which is widely insisted by many
                industries and printing company owing to their greater quality
                as below.
              </p>
            </div>

            <div className="mn-img">
              <div className="row">
                <div className="col-md-6">
                  {/* Removed motion effect from image */}
                  <div className="mn-im">
                    <img src={PEFilm1} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Removed motion effect from image */}
                  <div className="mn-im">
                    <img src={PEFilm2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="prd-desc m-t">
              {/* Removed motion effect from the list items */}
              <h4>PolyFilm Laminated Al Foil Application:</h4>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    PE Coated Foil for Foam Insulations Materials Manufacturing
                  </p>
                </div>
              </div>

              {/* Repeat for other items */}
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Poly Coated Al foil For Heat Lamination with Foam</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>PE coated Al foil For Thermal Insulations Materials</p>
                </div>
              </div>

              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Plastic coated Al foil For Reflective Insulations Barrier
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Reinforced Scrim Laminated Aluminium Foil For Insulation
                    Industries
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Coated Pure Reflective Al foil For Reflective Insulations
                    Industries..
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Foil Laminated Paper and Paper Board For Multi Colour
                    Printing Industries.
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Heat insulation material</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Al foil for Protective Packaging Material</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Laminated Foil for Plastic flexible laminates</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Soap and detergent industries</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Pharmaceuticals</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Food</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Paper cup industries</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Ice Cream</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Multi wall paper bags industries</p>
                </div>
              </div>
              <h4>Benefits:</h4>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Hot melting offers good outside adhesion for other
                    materials.
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Can be pasted or laminated using methods appropriate for hot
                    melting treated polyester
                  </p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>Excellent handling characteristics</p>
                </div>
              </div>
              <div className="prd-dsc d-flex">
                <div className="prd-lg">
                  <img src={Tick} alt="" />
                </div>
                <div className="prd-txt">
                  <p>
                    Accessible in particular grade appropriate for lamination
                  </p>
                </div>
              </div>
            </div>

            <div className="mtr-tbl mt-3">
              <table className="table table-bordered table-responsive">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="bg-dark text-white">PROPERTIES</th>
                    <th className="bg-dark text-white">UNIT</th>
                    <th className="bg-dark text-white">TYPICAL VALUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle">Thickness</td>
                    <td className="">micron</td>
                    <td className="">
                      12 for AL foil <br /> 20 for LDPE
                    </td>
                  </tr>
                  <tr>
                    <td className="">Density</td>
                    <td className="">gr/cm3</td>
                    <td className="">2.71 for AL foil 0.92 for PE</td>
                  </tr>
                  <tr>
                    <td className="">Weight</td>
                    <td className="">grs/sqm</td>
                    <td className="">50.92</td>
                  </tr>
                  <tr>
                    <td className="">Yield</td>
                    <td className="">sqm/Kg</td>
                    <td className="">19.638</td>
                  </tr>
                  <tr>
                    <td className="">Reflectivity</td>
                    <td className="">%</td>
                    <td className="">95 ~ 97</td>
                  </tr>
                  <tr>
                    <td className="">Emissivity</td>
                    <td className="">%</td>
                    <td className="">0.03 ~ 0.05</td>
                  </tr>
                  <tr>
                    <td className="">Flammability</td>
                    <td className="">-</td>
                    <td className="">nonflammable</td>
                  </tr>
                  <tr>
                    <td className="">Elongation</td>
                    <td className="">%</td>
                    <td className="">6</td>
                  </tr>
                  <tr>
                    <td className="">Lamination Temperature</td>
                    <td className="">C</td>
                    <td className="">200 ~ 250</td>
                  </tr>
                  <tr>
                    <td className="">Lamination Pressure</td>
                    <td className="">kg/cm2</td>
                    <td className="">8</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mtr-tbl2">
              <table className="table table-bordered table-responsive">
                <thead className="bg-dark text-white">
                  <tr>
                    <th className="bg-dark text-white">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      -Core ID : 76mm (3inch) Standard <br />
                      -length : 5,000mtrs, Other lengths available On request{" "}
                      <br />
                      -Thickness Tolerance : +/-7% Maximum <br />
                      -Width : Up to 1520mm
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
