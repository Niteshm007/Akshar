import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./4Ply.scss";
import FourPly1 from "../../../assets/4Ply.png";
import FourPly2 from "../../../assets/4Ply2.png";
import Tick from "../../../assets/TickLogo.png";

export default function FourPly() {
  useEffect(() => {
    // Smoothly scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="FourPly m-tb">
      <div className="mn-frbr">
        <div className="inner-ply">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="title"
          >
            Four Ply Laminate for Packing
          </motion.h1>
        </div>
      </div>

      <div className="container m-t">
        <div className="row">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="main-cont"
          >
            <div className="hd">
              <motion.h3
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                FOUR PLY LAMINATE FOR PACKAGING
              </motion.h3>
            </div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mn-cont"
            >
              <p>
                <span>Foilam Global</span> produces three ply having the
                following structure: Polyester / Foil / Poly.
              </p>
              <p>
                Oral rehydration salt or solution (ORS) is a medicinal
                formulation of salt, sugar & medicines. These apparatus have
                tremendous water-loving characteristics & it is unfavourably
                affected by the changing climatic environment of the country.
                Thus, protection of this medicinal property is a decisive job
                for any packaging material.
              </p>
              <p>
                We at Patels Foil designed an extraordinary multilayer laminate
                that efficiently protects the effectiveness of ORS formulations
                for longer periods. This Al foil, Paper & particular PE-based 4-ply
                laminate is a brilliant choice for linked Pharma drug formulation
                packaging.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="mn-img"
            >
              <div className="row">
                <div className="col-md-6">
                  <motion.img
                    src={FourPly1}
                    alt="Four Ply Image 1"
                    className="img-fluid"
                    variants={scaleUp}
                    initial="hidden"
                    animate="visible"
                  />
                </div>
                <div className="col-md-6">
                  <motion.img
                    src={FourPly2}
                    alt="Four Ply Image 2"
                    className="img-fluid"
                    variants={scaleUp}
                    initial="hidden"
                    animate="visible"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="prd-desc m-t">
          <motion.h4
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Structures:
          </motion.h4>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>OLB Paper/ PE / Al foil / PE</p>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>Chromo Paper/ PE / Al foil / PE</p>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>Poster Paper/ PE / Al foil / PE</p>
            </motion.div>
          </div>

          <motion.h4
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Features:
          </motion.h4>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>
                Endows with absolute barrier to moisture, water & gases that
                otherwise may cause lumping & even worsening of powered
                stuffing.
              </p>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>
                Presents barrier to beam that may otherwise cause bloom of
                content.
              </p>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>
                Preserves flavor & fragrances of content. Also, during
                manufacturing, no solvents & chemicals are used; therefore, no
                incidence of solvent odor.
              </p>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>
                Packing of ORS drug formulation in the laminate boosts shelf
                life.
              </p>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>
                The innermost layer of particular polymers facilitates outstanding
                sealing through powder traces. Thereby successfully addresses the
                trouble of seal breakdown.
              </p>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>
                Excellent printable exterior bestows a stylish physical
                exterior & appeal which is vital for its reception in the
                pasture.
              </p>
            </motion.div>
          </div>

          <motion.h4
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Application
          </motion.h4>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-txt"
          >
            Packaging of ORS & related drug formulation, Brief Specifications:
          </motion.p>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>Basis Weight - 110/ 150 Gsm / Custom</p>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>Width - Jumbo reel form 700 mm - 1500 mm</p>
            </motion.div>
          </div>
          <div className="prd-dsc d-flex">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              className="prd-lg"
            >
              <img src={Tick} alt="" />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="prd-txt"
            >
              <p>Slitted coils – As per the requirement</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
