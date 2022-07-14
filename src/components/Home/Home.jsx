import React from "react";
import "./Home.css";

export const Home = ({ data }) => {
  return (
      <div className="home">
        <div className="home__items">
          <div className="home__title">
            <span>{data.title}</span>
            <button>{data.button}</button>
          </div>
          <div className="home__image">
            <img src={data.image} alt="home__image" />
          </div>
        </div>
      </div>
  );
};
