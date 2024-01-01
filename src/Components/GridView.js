import React from "react";
import Product from '../Components/Product'

const GridView = ({products}) => {
  return (
    <div className="grid-section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
