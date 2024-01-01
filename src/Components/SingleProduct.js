import React, { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import { useParams } from "react-router-dom";
import ProductNavigation from "./ProductNavigation";
import FormatPrice from "../helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MyImage } from "./MyImage";
import Star from "./Star";
import AddToCart from "./AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();
  const { id } = useParams();
  const { name, company, price, image, stars, reviews, description, stock } =
    singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="single-product-wrapper">
        <ProductNavigation title={name} />
        <div className="container">
          <div className="grid grid-two-column">
            {/* product Images  */}
            <div className="product_images">
              <MyImage imgs={image} />
            </div>

            {/* product dAta  */}
            <div className="product-data">
              <h2>{name}</h2>
              <Star stars={stars} reviews={reviews} />

              <p className="product-data-price">
                MRP:
                <del>
                  <FormatPrice price={price + 250000} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of the Day: <FormatPrice price={price} />
              </p>
              <p>{description}</p>
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Thapa Delivered </p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 Year Warranty </p>
                </div>
              </div>

              <div className="product-data-info">
                <p>
                  Available:
                  <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
                </p>
                <p>
                  ID : <span> {id} </span>
                </p>
                <p>
                  Brand :<span> {company} </span>
                </p>
              </div>
              <hr />
              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
