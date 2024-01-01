import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ProductNavigation = ({ title }) => {
  return (
    <>
      <div className="page-nav-wrapper">
        <NavLink to={"/Home"}>Home</NavLink>/{title}
      </div>
    </>
  );
};

export default ProductNavigation;
