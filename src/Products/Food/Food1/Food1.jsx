import React, { useEffect } from "react";
import "./Food1.scss";
import PFL1 from "../../../assets/PFL1.png";
import PFL2 from "../../../assets/PFL2.png";
import Tick from "../../../assets/TickLogo.png";

export default function Food1() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  return (
    <div className="Food1 m-tb">
      <div className="mn-br">
        <div className="inner-ply">
          <h1>Paper Foil Lamination</h1>
        </div>
      </div>
      <div className="container m-t">
        <div className="row">
          <div className="main-cont">
            <div className="hd">
              <h3>Paper Foil Lamination</h3>
            </div>

            <div className="mn-cont">
              <p>
                We will make a mark in the field of manufacturing and exporting
                the best value Paper Foils. The Paper Foils offered with us can
                be acquired in a preference of 2 ply, 3 ply and 4 ply. Our Paper
                Foils are soaring on demand in different industries for packing
                products like Chocolates, Chewing gum, Biscuits etc. We
                formulate use of the supreme ranking raw materials for
                developing these Paper Foils. Thus, our Paper Foils have superb
                quality. We proffer these Paper Foils, at affordable prices in
                the MARKETS.
              </p>
            </div>

            <div className="mn-img">
              <div className="row">
                <div className="col-md-6">
                  <div className="mn-im">
                    <img src={PFL1} alt="Ply Image" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* Removed motion effect from image */}
                  <div className="mn-im">
                    <img src={PFL2} alt="Triple Ply" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="prd-desc m-t">
          <h4>Used For Packing:</h4>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Ice Cream Cone Sleeve</p>
            </div>
          </div>

          {/* Repeat for other items */}
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Chocolates</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Chewing gum</p>
            </div>
          </div>

          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Biscuits</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Tea coffee</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Breakfast cereals</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>For Cigarette,</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>ORS</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Pan Masala</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Wet Tissues</p>
            </div>
          </div>
        </div>
        <div className="prd-desc mt-3">
          <h4>Common Structures:</h4>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Aluminium Foils - Poster Paper</p>
            </div>
          </div>

          {/* Repeat for other items */}
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Aluminium Foils - Poster Paper - LDPE</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>
                50/55 GSM Chromo Paper - 6.5/7/8/9 Micron Aluminium Foils - VMCH
              </p>
            </div>
          </div>

          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>50/55 GSM Chromo Paper - 9 Micron Aluminium Foil -LDPE</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>40 GSM Glassine Paper - 6.5 Micron Aluminium Foils - VMCH</p>
            </div>
          </div>
        </div>
        <div className="prd-desc mt-3">
          <h4>Product Features:</h4>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Gold Foils</p>
            </div>
          </div>

          {/* Repeat for other items */}
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Excellent Mach inability</p>
            </div>
          </div>
          <div className="prd-dsc d-flex">
            <div className="prd-lg">
              <img src={Tick} alt="Tick Logo" />
            </div>
            <div className="prd-txt">
              <p>Available in 510mm/550mm/610mm/1000mm/1500mm Rolls</p>
            </div>
          </div>
        </div>
        <div className="mn-cont">
          <p>
            We <span>Foilam Global</span> focused in specialized coating and
            laminating obligatory for flexible packaging and industrial
            lamination requirements. With our in-house laboratory services we
            can also endow with personalized laminating solutions for your
            exclusive applications.
          </p>

          <div className="prd-desc mt-4">
            <div className="prd-dsc d-flex">
              <div className="prd-lg">
                <img src={Tick} alt="Tick Logo" />
              </div>
              <div className="prd-txt">
                <p>Laminated Foil</p>
              </div>
            </div>

            {/* Repeat for other items */}
            <div className="prd-dsc d-flex">
              <div className="prd-lg">
                <img src={Tick} alt="Tick Logo" />
              </div>
              <div className="prd-txt">
                <p>Laminated Paper</p>
              </div>
            </div>
            <div className="prd-dsc d-flex">
              <div className="prd-lg">
                <img src={Tick} alt="Tick Logo" />
              </div>
              <div className="prd-txt">
                <p>Laminated Film</p>
              </div>
            </div>
          </div>
        </div>

        <h4>Learn more about each of these products below:</h4>

        <div className="hd mt-3">
          <h3>Paper Foil Lamination</h3>
        </div>
        <div className="prd-txt">
          <p>
            Laminated foil is a multipurpose product employ for many consumer
            and industrial applications. For example, laminated foil is used in
            flexible packaging, ID tags, ham wrap, and point of purchase (POP)
            display. Laminated to a variety of substrates, such as polyester,
            polypropylene, and polyethylene, this product enhances product
            reliability. Plus, it gives vapour barrier characteristics.
          </p>
          <p>
            All Foils’ laminated foil options are enormously different meaning
            you can obtain the laminated product you require. Laminate options
            comprise: Litho paper, polyester, polyethylene, Kraft paper, liner
            paper, linerboard, and tissue.
          </p>
        </div>
        <div className="hd mt-3">
          <h3>Paper Foil Lamination</h3>
        </div>
        <div className="prd-txt">
          <p>
            All Foils hold an inventory laminated paper products with a series
            of facade treatments, substrates, laminates, and more. Surface
            treatment options embrace corona treating and flame treating, while
            substrates contain aluminium, copper, metalized paper, and
            polyolefin. The laminate options sort from Litho paper, polyester,
            polyethylene, Kraft paper, linerboard/tag, and tissue.
          </p>
          <p>
            Paperboard lamination is in style because it presents barrier
            protection to aroma, moisture, oxygen, and water vapor. It is
            admired in food service industries and medical applications as well
            as arts and crafts.
          </p>
        </div>
        <div className="hd mt-3">
          <h3>Laminated Film:</h3>
        </div>
        <div className="prd-txt">
          <p>
            Laminated film products are well-liked in food service and
            consumable goods applications due to their protective qualities. For
            example, film laminations are impermeable and tear proof, which
            permits them to maintain goods odourless, dry, and humidity defiant.
            Plus, the reflectivity and structural uprightness of laminated film
            adjoins another layer of protection.
          </p>
          <p>
            All Foils carries laminated film products in estimates ranging from
            .0005” to .010” and in widths up to 1500mm Adhesive options include
            Wet / Dry / VMCH / UV Coating
          </p>
        </div>
      </div>
    </div>
  );
}
