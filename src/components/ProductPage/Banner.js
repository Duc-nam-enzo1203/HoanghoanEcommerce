import React from "react";

export default function Banner({ key, img, title }) {
  return (
    <div
      className="carousel-item "
      key={key}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="carousel-caption-content container-lg">
        <h2>{title}</h2>
        <p>Không gian hiện đại</p>
        <button className="carousel-btn">mua ngay</button>
      </div>
    </div>
  );
}
