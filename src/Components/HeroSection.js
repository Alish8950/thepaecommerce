import React from "react";
import { NavLink } from "react-router-dom";
import HeroImg from "../styles/images/hero.jpg";

export default function HeroSection({ myData }) {
  const { name } = myData;
  return (
    <>
      <div className="container section-wrapper">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome</p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              nisi veritatis deleniti eaque modi, corrupti facere cum
              dignissimos, consequatur sequi iusto atque in ipsam exercitationem
              porro eius quas ex a!
            </p>
            <NavLink>
              <button className="button">Shop Now</button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src={HeroImg}
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
