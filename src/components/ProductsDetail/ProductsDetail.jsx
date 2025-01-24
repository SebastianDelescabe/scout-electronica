import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/data/productData";
import { NavHashLink } from "react-router-hash-link";
import { ProductSelectedContext } from "../../context/ProductSelectedContext";
import "./ProductsDetail.css";

//Carrousel imports
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

export const ProductsDetail = () => {
  
  const seo_name = useParams();
  
  const {setproductSelected} = useContext(ProductSelectedContext)

  const [product, setProduct] = useState(false);

  useEffect(() => {
    const filterItem = products.find((item) => item.seo_name === seo_name.id);
    setProduct(filterItem);
  }, [seo_name]);


  if (seo_name && product ) {
    return (
      <div className="product__detail" id="product__detail" >
        <div className="bannerImage-text">
          <h1>{product.title}</h1>
        </div>
        <div className="product__detail-container">
          <div className="product__detail-header">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                className="swiper"
            >
                {
                  product.image && product.image.map(img => (
                    <SwiperSlide key={img.id}>
                          <img src={img} alt="" />
                    </SwiperSlide>
                    ))
                }
            </Swiper>
          </div>
          <div className="porduct__detail-body">
              <ul className="product__detail-body-items-description">
                {product.descriptionItems &&
                  product.descriptionItems.map((descriptionItem, index) => (
                    <li key={index}>{descriptionItem}</li>
                  ))}
              </ul>
              <NavHashLink 
                to="/contact#form" 
                className='button__see-more'
                onClick={setproductSelected(product.title)}
                >
                Solicitar mas información
                </NavHashLink>
          </div>
        </div>
          <ul className="product__detail-extraInfo">
            {product.extraInfo &&
              product.extraInfo.map((extraInfo, index) => (
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
