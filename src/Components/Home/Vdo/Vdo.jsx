import React, { useState } from 'react'
import './Vdo.scss'
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";

export default function Vdo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const youtubeUrl = 'https://www.youtube.com/embed/okKBqudqE_U'; // Note: Use embed URL
  
    const handlePlayButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className='Vdo m-t'>
           <div className="third-section">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="p-3 bg-primary text-white l-section">
              <div className="l-content">
                <div align="center">
                  <p>Bonding Matters</p>
                  <p>Akshar Copack LLC</p>
                  <div className="ply">
                    <button onClick={handlePlayButtonClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <PlayCircleFilledOutlinedIcon fontSize="large" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="p-3 text-white r-section">
              <div className="third-header mb-5">
                <h3 align="center">
                  Affordable & Customer <br /> Oriented Service
                </h3>
              </div>

              <div className="third-content">
                <div className="row">
                  <div className="th d-flex">
                    <div className="logo">
                      <div className="logo-br">
                        <DescriptionOutlinedIcon />
                      </div>
                    </div>
                    <div className="content">
                      <p className="p-head">
                        <b>Quality Assurance</b>
                      </p>
                      <p className="p-txt">
                        Quality assurance is a means of eliminating errors and
                        defects in manufacturing goods and minimizing
                        complications when supplying products or services to
                        customers. ISO 9000 describes as "part of quality
                        management focused on providing confidence that product
                        will accomplish quality requirements."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="th d-flex">
                    <div className="logo">
                      <div className="logo-br">
                        <FactoryOutlinedIcon />
                      </div>
                    </div>
                    <div className="content">
                      <p className="p-head">
                        <b>Our Infrastructural Facilities</b>
                      </p>
                      <p className="p-txt">
                        Our infrastructure is new, structured, and packed with
                        high-tech machinery and machine that ensures a very high
                        degree of precision and expertise in material ordered.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="th d-flex">
                    <div className="logo">
                      <div className="logo-br">
                        <TurnedInNotOutlinedIcon />
                      </div>
                    </div>
                    <div className="content">
                      <p className="p-head">
                        <b>After Sales Support</b>
                      </p>
                      <p className="p-txt">
                        After-sales service is given to the consumer long after
                        the product or service has been returned to the
                        retailer. Companies utilize after-sales service to shore
                        up their consumer retention, engagement, and
                        word-of-mouth promotion, which ultimately contributes to
                        a rise in sales. We truly believe that customer is a
                        king. Hence, all our products and services are directed
                        to achieve 100% customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

         {/* Video Modal */}
         {isModalOpen && (
        <div className="video-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <iframe
            width="745"
            height="420"
            src={youtubeUrl}
            title="You Tube Video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}
