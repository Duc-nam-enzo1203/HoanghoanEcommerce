import React from "react";

export default function TitleSection({ title }) {
  return (
    <div className="title" style={{ paddingBottom: "12px" }}>
      <h2>{title}</h2>
    </div>
  );
}
