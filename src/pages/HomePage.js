import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/index";
import Product from "../components/Product";
import TitleSection from "../components/TitleSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import New from "../components/New";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "../components/Categories";

export default function HomePage({
  renderProducts,
  renderPartners,
  renderPosts,
  renderCategories,
  loading,
}) {
  // section 1
  let elementTask = renderCategories.map((item, index) => {
    return <Categories key={index} img={item.icon} title={item.title} />;
  });

  // section 2
  const dispatch = useDispatch();
  const { listProduct, error } = useSelector((state) => state.listProduct);
  console.log(listProduct);

  useEffect(() => {
    dispatch(fetchProducts()); // Gọi action khi component mount
  }, [dispatch]);

  let elementProducts = [];

  if (listProduct.length > 0) {
    elementProducts = listProduct.slice(0, 4).map((item, index) => {
      return (
        <Product
          key={index}
          product={{
            id: item.id,
            cid: item.cid,
            img: `http://apixm.devmaster.vn${item.image}`,
            title: item.title,
            priceOld: item.priceOld,
            priceNew: item.priceNew,
            size: item.size,
            productId: item.productId,
          }}
        />
      );
    });
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // section 3
  const imageAbout = [
    { img: "./img/ve-chung-toi/ve-chung-toi-1.jpg" },
    { img: "./img/ve-chung-toi/ve-chung-toi-2.jpg" },
    { img: "./img/ve-chung-toi/ve-chung-toi-3.jpg" },
    { img: "./img/ve-chung-toi/ve-chung-toi-4.jpg" },
  ];

  const benefits = [
    {
      img: "./img/ve-chung-toi/chinh-sach.jpg",
      title: "Chính sách giá",
      description: "Tốt nhất và công khai giá trên website",
    },
    {
      img: "./img/ve-chung-toi/bao-hanh.jpg",
      title: "Bảo hảnh",
      description: "Cam kết chất lượng sản phẩm và tiến độ thi công",
    },
    {
      img: "/img/ve-chung-toi/san-pham.jpg",
      title: "Sản phẩm",
      description: "Trực tiếp sản xuất bởi đội ngũ nhân viên hàng đầu",
    },
    {
      img: "./img/ve-chung-toi/chat-luong.jpg",
      title: "Chất lương",
      description: "Dịch vụ bảo hành sản phẩm tốt nhất khu vực",
    },
  ];

  const elementsBenefit = benefits.map((item, index) => {
    return (
      <div className="box-item-policy" key={index}>
        <img src={item.img} alt="" />
        <div className="title-policy">
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      </div>
    );
  });

  let elementsImage = imageAbout.map((item, index) => {
    return (
      <img key={index} src={item.img} alt="" className="col-3 img-lightbox" />
    );
  });

  // section 4
  let elementsNew = renderPosts.map((item, index) => {
    if (index > 2) return null;
    return (
      <New
        key={index}
        img={item.image}
        title={item.title}
        description={item.description}
      />
    );
  });

  let elementFirst = renderPosts.map((item, index) => {
    if (index === 0) {
      return (
        <div key={index} style={{ position: "relative", height: "40rem" }}>
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              zIndex: 1,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              backgroundColor: "#bd945f",
            }}
          >
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      );
    }
  });

  // section 5
  let elementPartners = renderPartners.map((item, index) => {
    return (
      <div className="col-md-1" key={index}>
        <img src={item.img} alt="" />
      </div>
    );
  });

  const settingsPartner = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="gioithieu" className="Block container_1">
        <div className="container-lg">
          <div>
            <h1>
              Thế giới nội thất số 1 Việt Nam
              <br className="br-desktop" />
              <span>Hoàng Hoan</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              deserunt adipisci temporibus beatae nihil ipsam quidem cumque
              maiores quas distinctio soluta, molestiae veritatis tempore
              impedit consectetur voluptatum animi necessitatibus ut?
            </p>
            <button className="btn-contact">
              <span>Liên hệ ngay</span>
            </button>
          </div>
          <div className="container-categories-product container-md">
            <div className="container-categories">{elementTask}</div>
          </div>
        </div>
      </section>
      <section id="sanpham" className="Block container_2">
        <div className="container-lg">
          <TitleSection title={"Sản phẩm nổi bật"} />
          <div className="sliders-show-product d-flex justify-content-lg-between">
            {/* <Slider
              style={{ width: "100%" }}
              data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'
              {...settings}
            > */}
            {elementProducts}
            {/* </Slider> */}
          </div>
        </div>
      </section>
      <section id="container" className="Block container_3">
        <div id="overlay" />
        <div className="container-lg">
          <div className="container-about">
            <TitleSection title={"Về chúng tôi"} />
            <div className="row">
              <div className="col-6">
                <img src="./img/ve-chung-toi/ve-chung-toi.jpg" alt="" />
              </div>
              <div className="col-6">
                <h3>
                  Nội thất <span>Hoàng Hoan</span>
                  <br />
                  Uy tín song hành chất lượng
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur repudiandae tempore quo odit eveniet aliquam
                  architecto iusto nisi atque, quae omnis dolorum, sit at
                  laboriosam aut nulla itaque qui soluta.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  at, in nulla aut voluptatibus quis animi fugit est iste.
                  Quibusdam unde qui, consequatur eveniet impedit deleniti
                  ratione nihil autem rem?
                </p>
                <div className="row">{elementsImage}</div>
              </div>
            </div>
          </div>
          <div className="container-about">
            <div className="title" style={{ paddingBottom: "12px" }}>
              <h2>Tại sao nên chọn Hoàng Hoan</h2>
            </div>
            <div className="container-policy">
              <div className="grid grid-cols-4 grid-rows-5 gap-4">
                <div className="col-span-2">{elementsBenefit[0]}</div>
                <div className="col-span-2 ">{elementsBenefit[1]}</div>
                <div className="col-span-2 ">{elementsBenefit[2]}</div>
                <div className="col-span-2 ">{elementsBenefit[3]}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tintuc" className="Block container_4">
        <div className="container-lg">
          <TitleSection title={"Tin tức"} />
          <Container>
            <Row>
              <Col sm={8}>{elementFirst}</Col>
              <Col sm={4} className="list-new">
                {elementsNew}
                <button className="btn-preview " style={{ marginLeft: "12px" }}>
                  <Link to="/NewsPage.js" style={{ textDecoration: "none" }}>
                    <span>
                      Xem thêm
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </Link>
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section id="doitac" className="Block container_5">
        <div className="container-lg">
          <TitleSection title={"Đối tác"} />
          {/* <div className="logo-doitac row seven-cols">{elementPartners}</div> */}
          <Slider {...settingsPartner}>{elementPartners}</Slider>
        </div>
      </section>
      <section id="lienhe" className="Block container_6">
        <img src="./img/lienhe-1-removebg-preview.png" alt="ghe" />
        <div className="container-lg row">
          <div className="col-2" />
          <div className="col-5 title-contact">
            <h5>Trải nghiệm dịch vụ</h5>
            <h4>
              <span>Cùng Hoàng Hoan </span>ngay
            </h4>
            <div className="diver" />
          </div>
          <div className="col-5 box-form">
            <h5>Thông tin liên hệ</h5>
            <div className="form">
              <form action="" method="post" className="row" id="form">
                <div className="form-group col-9">
                  <input
                    type="text"
                    placeholder="Email/Phone *"
                    name="Email/Phone"
                    className="Email-phone"
                    id="email"
                  />
                  <p className="error" id="invalid_email" />
                </div>
                <div className="submit col-3">
                  <input type="submit" defaultValue="Gửi" id="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
