import React from 'react';
import { motion } from 'framer-motion';
import './OProduc.scss';

export default function OProduct() {
  const cardVariants = {
    hidden: (direction) => ({
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger effect
        duration: 0.5,
      },
    }),
  };

  return (
    <div>
      <div className="OProduct container second-section m-t">
        <div className="row">
          <div className="second-title">
            <div className="heading-section" align="center">
              <p>OUR PRODUCTS</p>
              <div className="heading-text">
                <motion.span
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                 Leader in Solvent Base Laminates Material like  
                </motion.span>{' '}
                <motion.span
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  <b>Aluminium foil , Metalized Film</b>
                </motion.span>{' '}
                <motion.span
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  and
                </motion.span>{' '}
                <motion.span
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                >
                  <b>Paper Manufacturing </b>
                </motion.span>{' '}
                <motion.span
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                >
                  Manufacturing
                </motion.span>
              </div>
            </div>

            <div className="second-card">
              <div className="row">
                <div className="col-md-4">
                  <motion.div
                    className="card mb-4 card-2"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    custom="left"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inner-card img-1">
                      <div className="hover-overlay">
                        <div className="second-txt">
                          Insulation
                          <br /> <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="col-md-4">
                  <motion.div
                    className="card mb-4 card-2"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    custom="right"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inner-card img-2">
                      <div className="hover-overlay">
                        <div className="second-txt">
                          Product 2
                          <br /> <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="col-md-4">
                  <motion.div
                    className="card mb-4 card-2"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    custom="left"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inner-card img-3">
                      <div className="hover-overlay">
                        <div className="second-txt">
                          Product 3
                          <br /> <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
