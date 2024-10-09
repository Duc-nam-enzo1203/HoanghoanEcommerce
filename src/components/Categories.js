import React from "react";

export default function Categories({ img, title }) {
  return (
    <div className="box-categories col-6 col-md-3 d-flex gap-2 m-md-2 m-lg-0 mt-2">
      <img src={img} alt={title} className="w-50" />
      <h6>{title}</h6>
    </div>
  );
}
