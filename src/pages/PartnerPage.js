import React from "react";
import Partner from "../components/PartnerPage/Partner";
import "../style/partner.css";

export default function PartnerPage({ renderPartners }) {
  const renderPartner = renderPartners.map((item, index) => {
    return (
      <Partner
        key={index}
        name={item.name}
        img={item.img}
        description={item.description}
      />
    );
  });
  return (
    <section id="gioithieu" className="Block Banner_partner">
      <div className="container-lg">
        <div>
          <img src="../img/logo.png" alt="logo" />
          <h1>Đối tác</h1>
        </div>
        <div className="container-partner">{renderPartner}</div>
      </div>
    </section>
  );
}
