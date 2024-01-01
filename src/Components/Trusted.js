import React from "react";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Trusted() {
  return (
    <>
      <div className="container trusted-wrapper">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <RiSecurePaymentLine />
          </div>
          <div className="slide">
            <RiSecurePaymentLine />
          </div>
          <div className="slide">
            <RiSecurePaymentLine />
          </div>
          <div className="slide">
            <RiSecurePaymentLine />
          </div>
          <div className="slide">
            <RiSecurePaymentLine />
          </div>
        </div>
      </div>
    </>
  );
}
