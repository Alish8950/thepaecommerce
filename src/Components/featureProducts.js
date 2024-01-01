import React from "react";
import { useProductContext } from "../context/productContext";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="feature-product-section">
        <div className="container">
          <div className="intro-data">Check Now!</div>
          <div className="common-heading">Our Feature Services</div>
          <div className="grid grid-three-column">
            {featureProducts.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
