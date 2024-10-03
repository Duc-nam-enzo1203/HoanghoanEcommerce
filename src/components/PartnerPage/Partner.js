import React from "react";

export default function Partner({ key, name, img, description }) {
  return (
    <div key={key}>
      <img src={img} alt="" />
      <div className="content-partner">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
