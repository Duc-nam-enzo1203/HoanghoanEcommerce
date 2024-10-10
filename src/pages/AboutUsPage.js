import React from "react";
import "../style/aboutus.css";

export default function AboutUsPage() {
  const dataDestiny = [
    {
      img: "../img/loai-sp/icon-cau-thang.png",
      title: "Với xã hội",
      description:
        "Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích cực cùng cộng đồng xây dựng môi trường sống bền vững",
    },
    {
      img: "../img/loai-sp/icon-phong-bep.png",
      title: "Với điện tử",
      description:
        "Hàng hòa lên điện thoại, điện thoại thông minh, điện thoại di động, điện thoại di động điện tử",
    },
    {
      img: "../img/loai-sp/icon-do-trang-tri.png",
      title: "Với nhân viên",
      description:
        "Hướng hòa lên điện thoại, điện thoại thông minh, điện thoại di động, điện thoại di động điện tử",
    },
    {
      img: "../img/loai-sp/icon-phong-khach.png",
      title: "Với nhân viên",
      description:
        "Hướng hòa lên điện thoại, điện thoại thông minh, điện thoại di động, điện thoại di động điện tử",
    },
  ];

  const elementsDestiny = dataDestiny.map((item, index) => {
    return (
      <div className="box-content-info col-lg-6 col-12 p-2" key={index}>
        <div className="m-2 d-flex align-items-center gap-2 p-2">
          <img src={item.img} alt="" className="w-25" />
          <div className="content-mission">
            <h4 style={{ fontWeight: "bold", color: "#bd945f" }}>
              {item.title}
            </h4>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="gioithieu" className="Block Banner_info">
      <div className="container-lg">
        <div>
          <img src="../img/logo.png" alt="logo" />
          <h1>Giới thiệu</h1>
        </div>
        <div className="container-introduce">
          <div className="container-content-info">
            <div className="title">
              <h2>Thành lập &amp; phát triển</h2>
            </div>
            <div className="container-establish">
              <div className="col-6">
                <img
                  src="../img/san-pham-noi-bat/sp-1.jpg"
                  alt="Thành lập & Sáng tạo"
                />
              </div>
              <div className="col-6">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam voluptas consectetur assumenda sunt, esse porro
                  nihil illo! Odio laudantium doloribus exercitationem tempora
                  nam similique porro vel, repellendus perspiciatis, nulla
                  fugiat.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam voluptas consectetur assumenda sunt, esse porro
                  nihil illo! Odio laudantium doloribus exercitationem tempora
                  nam similique porro vel, repellendus perspiciatis, nulla
                  fugiat.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam voluptas consectetur assumenda sunt, esse porro
                  nihil illo! Odio laudantium doloribus exercitationem tempora
                  nam similique porro vel, repellendus perspiciatis, nulla
                  fugiat.
                </p>
              </div>
            </div>
          </div>
          <div className="container-vision">
            <div className="title">
              <h2>Tầm nhìn</h2>
            </div>
            <div>
              <img src="../img/lienhe-bg.jpg" alt="Tầm nhìn" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                laboriosam cupiditate deleniti odit cumque consectetur illo
                quaerat! Architecto consequuntur vitae eius est? Neque eveniet
                aliquid voluptas laborum laudantium illum debitis?
              </p>
            </div>
          </div>
          <div className="container-misson">
            <div className="title">
              <h2>Xứ mệnh</h2>
            </div>
            <div>{elementsDestiny}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
