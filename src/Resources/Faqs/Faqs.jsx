import React from "react";
import "./Faqs.scss";
import Accordian from "./Accordian/Accordian";
import Why from "../../Components/Home/Why/Why";
import HContact from "../../Components/Home/HContact/HContact";

export default function Faqs() {
  return (
    <div className="Faqs m-t">
      <div className="Fq-hdr" align="center">
        <h1>FAQs</h1>
      </div>

      <Accordian />
      <Why />
      <HContact/>
    </div>
  );
}
