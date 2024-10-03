import React from "react";

export default function Categories({ img, title }) {
  return (
    <div className="box-categories">
      {/* <img src={`http://apixm.devmaster.vn${img}`} alt={title} /> */}
      <img src={img} alt={title} />
      <h6>{title}</h6>
    </div>
  );
}
