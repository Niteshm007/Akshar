import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import "./MetFilm.scss";
import MetFilm1 from "../../assets/MetFilm1.png";
import MetFilm2 from "../../assets/MetFilm2.png";
export default function MetFilm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Motion variants for smooth animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="MetFilm m-tb">
      <motion.div
        className="mn-br"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="inner-ply">
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
            METALLIZED FILM LAMINATED MATERIAL
          </motion.h1>
        </div>
      </motion.div>

      <motion.div
        className="container m-t"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="row">
          <div className="main-cont">
            <motion.div
              className="hd"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.h3 initial="hidden" animate="visible" variants={fadeIn}>
                Metallized Film Laminated Material
              </motion.h3>
            </motion.div>

            <motion.div
              className="mn-cont"
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <p>
                <span>Foilam Global</span> The manufacture and marketing of
                Metallised films (or metallized films) based packaging. The
                company is equipped with the latest extrusion laminations of
                Metallised films with paper, board, and various plastic films.
                They also have an in-house auxiliaries facility.{" "}
                <span>Foilam Global</span> has the capacity for processing 100
                tons of foil in assorted thicknesses per month.
              </p>
            </motion.div>

            <motion.div
              className="mn-img"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="row">
                <div className="col-md-6">
                  <motion.div
                    className="mn-im"
                    initial="hidden"
                    animate="visible"
                    variants={slideLeft}
                  >
                    <motion.img
                      src={MetFilm1}
                      alt="MetFilm1"
                      className="img-fluid"
                    />
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <motion.div
                    className="mn-im"
                    initial="hidden"
                    animate="visible"
                    variants={slideRight}
                  >
                    <motion.img
                      src={MetFilm2}
                      alt="MetFilm2"
                      className="img-fluid"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mn-cont mt-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <p>
                Metallised films (or metallized films) are polymer films coated
                with a thin layer of metal, usually aluminium. They offer the
                glossy metallic appearance of an aluminium foil at a reduced
                weight and cost. Metallised films are widely used for decorative
                purposes and food packaging, and also for specialty applications
                including insulation and electronics.
              </p>
              <motion.h4 initial="hidden" animate="visible" variants={fadeIn}>
                Manufacturer:
              </motion.h4>
              <p>
                Metallisation is performed using a physical vapour deposition
                process. Aluminium is the most common metal used for deposition,
                but other metals such as nickel or chromium are also used. The
                metal is heated and evaporated under vacuum. This condenses on
                the cold polymer film, which is unwound near the metal vapour
                source. This coating is much thinner than a metal foil could be
                made, in the range of 0.5 micrometres [1]. This coating will not
                fade or discolour over time. While oriented polypropylene and
                PET are the most common films used for metallisation, nylon,
                polyethylene and cast polypropylene are also used.
              </p>
              <motion.h4 initial="hidden" animate="visible" variants={fadeIn}>
                Properties:
              </motion.h4>
              <p>
                Metallised films have a reflective silver surface similar to
                aluminium foil. The coating also reduces the permeability of the
                film to light, water, and oxygen. The properties of the film
                remain, such as higher toughness, the ability to be heat sealed,
                and a lower density at a lower cost than aluminium foil. This
                gives metallised films some advantages over aluminium foil and
                aluminium foil laminates.
              </p>
            </motion.div>

            <motion.div
              className="mtr-tbl mt-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <table className="table table-bordered table-responsive">
                <thead className="text-white hd-clr align-middle">
                  <tr>
                    <th className="text-white hd-clr align-middle"></th>
                    <th className="text-white hd-clr align-middle">Moisture (g⁄m².day)</th>
                    <th className="text-white hd-clr align-middle">Oxygen (mL⁄m².day)</th>
                    <th className="text-white hd-clr align-middle">
                      UV light (%transmittance)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">PET film 12.7μm</td>
                    <td className="">31</td>
                    <td className="">465</td>
                    <td className="">91</td>
                  </tr>
                  <tr>
                    <td className="">Metallised PET</td>
                    <td className="">0.8</td>
                    <td className="">1.2</td>
                    <td className="">5</td>
                  </tr>
                  <tr>
                    <td className="">Aluminium foil 6μm</td>
                    <td className="">0</td>
                    <td className="">0</td>
                    <td className="">0</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            <motion.div
              className="hd mt-3"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.h3 initial="hidden" animate="visible" variants={fadeIn}>
                Uses/Applications:
              </motion.h3>
            </motion.div>

            <motion.div
              className="mn-cont mt-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.h4 initial="hidden" animate="visible" variants={fadeIn}>
                Decoration:
              </motion.h4>
              <p>
                Metallised films used for balloons. Metallised films were first
                used for decorative purposes as Christmas tinsel and continue to
                be used for items such as wrappers and ribbons. The metallic
                helium-filled novelty balloons given as gifts are made of
                metallised BoPET and are often called Mylar balloons
                commercially.
              </p>

              <motion.h4 initial="hidden" animate="visible" variants={fadeIn}>
                Packaging:
              </motion.h4>
              <p>
                Both metallised PET and PP have replaced foil laminates for
                products such as snack foods, coffee, and candy, which do not
                require the superior barrier of aluminium foil. Metallised nylon
                and polyethylene are used in the meat export market. The
                controlled permeation extends shelf life. Metallised films are
                used as a susceptor for cooking in microwave ovens.
              </p>

              <motion.h4 initial="hidden" animate="visible" variants={fadeIn}>
                Insulation:
              </motion.h4>
              <p>
                Metallised PET films are used in NASA´s spacesuits to make them
                radiation resistant and keep astronauts warm, and in proximity
                (aluminized) suits are used by AR-FF fire fighters for
                protection from the high amount of heat released from fuel
                fires. Silvered emergency blankets are also used to conserve a
                shock victim's body heat. These reflective materials might also
                be used as part of industrial and commercial insulation (for
                example, insulated shipping containers.)insulating blankets made
                with Metallised PET were also used as insulation in aircraft
                untilsafety concerns resulted in their deprecation.[5] In
                particular, it was found to be a major cause of the in–flight
                fire of Swissair Flight 111 on September 2, 1998.
              </p>

              <motion.h4 initial="hidden" animate="visible" variants={fadeIn}>
                Electronics:
              </motion.h4>
              <p>
                Metallised films are used as a dielectric in the manufacture of
                a type of capacitor used in electronic circuits.
              </p>

              <motion.p initial="hidden" animate="visible" variants={fadeIn}>
                At <span>Foilam Global</span>, we provide a comprehensive array
                of Industrial Coated Metallised films and Metallised films
                Laminated Material by Extrusion Process, which is extensively
                demanded by many industries and printing companies owing to
                their superior quality.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
