import React, { useState } from 'react'
import './Skills.scss'
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import RangeScore from './RangeScore/RangeScore';

export default function Skills() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const youtubeUrl = 'https://www.youtube.com/embed/okKBqudqE_U'; // Note: Use embed URL
  
    const handlePlayButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className='Skills m-t'>
           <div className="third-section">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="p-3 bg-primary text-white l-section">
              <div className="l-content">
                <div align="center">
                  <p>Foilam Global</p>
                  <div className="ply-skl">
                    <button onClick={handlePlayButtonClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <PlayCircleFilledOutlinedIcon fontSize="large" className='ply-btn' />
                    </button>
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
          <div className="col-12 col-md-6">
            <RangeScore/>
          </div>
        </div>
      </div>

    </div>
  )
}
