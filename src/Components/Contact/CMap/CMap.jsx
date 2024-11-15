import React from "react";
import "./CMap.scss";
import { FaPhoneFlip } from "react-icons/fa6";

export default function CMap() {
  return (
    <div className="CMap m-t">
      <div className="container">
        <div className="row align-content-center">
          <div className="col-md-6">
            <div className="cm-l">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1228309020858!2d72.7517487758814!3d23.019261816450687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e19930a8bc9db%3A0xeb87940438f459dd!2sAkshar%20Copack%20LLC!5e0!3m2!1sen!2sin!4v1729921320050!5m2!1sen!2sin"
                width="100%"
                height="550"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cm-r">
              <div className="cmr-hdr">
                <p>WE BUILD THINGS DIFFERENTLY</p>
                <h1>
                  Schedule an estimate <br />
                  Let's <b>Work Together</b>
                </h1>
                <br />
                <p>
                  If you are looking for any Products/Services, Foilam Global is
                  the optimum choice. Give us a call on below numbers:
                </p>
              </div>
              <div className="row"></div>
              <div className="row">
                <div className="col-md-6">
                  <div className="cmr-cont">
                    <div className="crd-br d-flex">
                      <div className="logo-br">
                        <div className="logo-inr">
                          <FaPhoneFlip className="lg-icon" />
                        </div>
                      </div>
                      <div className="cmd-cont">
                        <h5>Admin</h5>
                        <p className="uln">90234 07993</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cmr-cont">
                    <div className="crd-br d-flex">
                      <div className="logo-br">
                        <div className="logo-inr">
                          <FaPhoneFlip className="lg-icon" />
                        </div>
                      </div>
                      <div className="cmd-cont">
                        <h5>Marketing</h5>
                        <p className="uln">90234 07993</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
