import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/data/productData";
import "./ProductsDetail.css";

export const ProductsDetail = () => {
  const { id } = useParams();

  const [productID, setProductID] = useState(false);

  useEffect(() => {
    const filterItem = products.find((product) => product.id == id);
    setProductID(filterItem);
  }, [productID]);

  if (id) {
    return (
      <div className="product__detail">
        <div className="bannerImage-text">
          <h1>{productID.title}</h1>
        </div>
        <div className="product__detail-container">
          <div className="product__detail-header">
            <img src={productID.image} alt="" />
          </div>
          <div className="porduct__detail-body">
            <div className="product__detail-body-items">
              <ul className="product__detail-body-items-description">
                {productID.descriptionItems &&
                  productID.descriptionItems.map((descriptionItem, index) => (
                    <li key={index}>{descriptionItem}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
          <ul className="product__detail-extraInfo">
            {productID.extraInfo &&
              productID.extraInfo.map((extraInfo, index) => (
                <li key={index}>
                  <img src={extraInfo[1]} alt="" />
                  <span>{extraInfo[0]}</span>
                </li>
              ))}
          </ul>
      </div>
    );
  }
};
