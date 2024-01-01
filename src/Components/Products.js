import React from "react";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
