import React from 'react'
import './CLogo.scss'
import Phone from "../../../assets/Phone.png";
import Mail from '../../../assets/Mail.png'
import Map from '../../../assets/Map.png'

export default function CLogo() {
  return (
    <div className='CLogo m-t'>
        <div className="container">
        <div className="row align-items-center justify-content-cente">
          <div className="col-md-6">
            <div className="cl-cont" align="center">
              <h1>Contact</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cr-cont d-flex">
                <img src={Phone} alt="" className="img-fluid"/>
                <img src={Mail} alt="" className="img-fluid"/>
                <img src={Map} alt="" className="img-fluid mp-img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
