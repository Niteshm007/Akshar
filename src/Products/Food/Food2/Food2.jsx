import React, { useEffect } from "react";
import "./Food2.scss";
import GPM1 from "../../../assets/GPM1.png";
import GPM2 from "../../../assets/GPM2.png";
import Tick from "../../../assets/TickLogo.png";

export default function Food2() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Food2 m-tb">
      <div className="mn-br">
        <div className="inner-ply">
          <h1>Gutkha & Panmasala Material</h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              <h3>PAPER FOIL LAMINATES FOR GUTKHA & PANMASALA</h3>
            </div>

            <div className="mn-cont">
              <p>
                We are one of the foremost manufacturers, suppliers and
                exporters of finest quality Paper Foil Laminate for Gutka
                Packing. Our product is manufactured using premium raw material,
                acquired from trustworthy vendors of the market. Owing to its
                high-class, fine finish and non toxicity, its is greatly ordered
                in the market. Paper Foil Laminate For Gutka Packing holds the
                class of product being packed in it and operate as barrier
                against humidity, light and chemicals.
              </p>
            </div>

            <div className="mn-img">
              <div className="row">
                <div className="col-md-6">
                  <div className="mn-im">
                    <img src={GPM1} alt="Ply Image" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Removed motion effect from image */}
                  <div className="mn-im">
                    <img src={GPM2} alt="Triple Ply" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="prd-desc m-t">
          <h4>Other information of Paper Foil Laminate For Gutka Packing</h4>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>
                41 gsm Glassine Paper + 7-9 Micron Aluminium Foil + 6 to 8 gsm
                Special heat seal coating.
              </p>
            </div>
          </div>

          {/* Repeat for other items */}
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>
                42 gsm MG Poster Paper + 7-9 micron Aluminium Foil + 6 to 8 gsm
                Special Heat seal coating.
              </p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>
                50 gsm MG Poster Paper + 7-9 micron Aluminium Foil + 6 to 8 gsm
                Special Heat seal coating.
              </p>
            </div>
          </div>
        </div>

        <div className="mn-cont">
          <p>
            We can furnish credential of No Plastic substance utilized in above
            laminate as per Supreme court notification. WTR & OTR is as per IS
            standard. Laminate tested/ approved with all types of Gutkha
            products.
          </p>
          <p>
            Our flexible packaging materials are plastic less sealable paper
            used for Tobacco packaging, Tobacco packaging paper, paper,
            plasticless paper for Tobacco, also used for packing of aata, abil,
            gulal & kanku, auto parts, beverages, bakery items, bulk drugs,
            cables, chemicals, cloth bags, clothing, garments, cosmetic,
            cutlery, detergents, disposables, distillery, dry fruits, dyes &
            intermediates, fertilizers, filtration, fire crackers, florist, food
            colours, frozen food, gift packaging, grain, gruh udyog, hosiery,
            hygiene and personal care products.
          </p>
          <p>
            You can apply our products for packing ice-cream, industrial items,
            packaging paper for tobacco, incense sticks, instant foods & drinks,
            kirana items, lubricants, machine parts, mehndi, minerals,
            netraceuticals, oil oaint, Tobacco packaging paper, pan masala,
            pesticides, pet foods, photo albums, poultry products, protectives,
            provision items, readymade garments, and even seeds, snacks, spices,
            surgical items, sweets, tobacco packaging paper, vehicle tubes and
            wires.
          </p>
        </div>
      </div>
    </div>
  );
}
