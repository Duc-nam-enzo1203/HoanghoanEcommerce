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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <div className="box-item-policy w-100 bg-white" key={index}>
        <img src={item.img} alt="" />
        <div className="title-policy">
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      </div>
    );
  });

  let elementsImage = imageAbout.map((item, index) => {
    return <img key={index} src={item.img} alt="" className="col-3 p-2" />;
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
        <div
          key={index}
          className="box-post-first"
          style={{ position: "relative", height: "100%" }}
        >
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
        settingsPartner: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settingsPartner: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settingsPartner: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="Block container_1 d-flex flex-column justify-content-between">
        <div className="container-lg p-0 d-flex flex-column justify-content-between h-100 gap-4">
          <div className="w-80 d-flex flex-column gap-3 box_banner">
            <h1>
              Thế giới nội thất số 1 Việt Nam
              <br className="br-desktop" />
              <span> Hoàng Hoan</span>
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
          <div className="container-md bg-white p-lg-4 p-3">
            <div className="d-flex justify-content-evenly flex-wrap">
              {elementTask}
            </div>
          </div>
        </div>
      </section>
      <section id="sanpham" className="Block container_2">
        <div className="container-lg p-0 flex-column d-flex position-relative gap-3 justify-content-end">
          <TitleSection title={"Sản phẩm nổi bật"} />
          <div className="sliders-show-product d-flex justify-content-lg-between">
            <Slider {...settings}>{elementProducts}</Slider>
          </div>
        </div>
      </section>
      <section
        id="container"
        className="Block container_3 d-flex flex-column gap-lg-5 gap-4"
      >
        <div className="container-about container p-0">
          <TitleSection title={"Về chúng tôi"} />
          <div className="row d-flex">
            <div className="col-12 col-md-12 col-lg-6 p-2 p-lg-auto">
              <img
                src="./img/ve-chung-toi/ve-chung-toi.jpg"
                alt=""
                className="w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-6 p-2 gap-3 d-flex flex-column ">
              <h4>
                Nội thất <span>Hoàng Hoan</span>
                <br />
                Uy tín song hành chất lượng
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur repudiandae tempore quo odit eveniet aliquam
                architecto iusto nisi atque, quae omnis dolorum, sit at
                laboriosam aut nulla itaque qui soluta.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                at, in nulla aut voluptatibus quis animi fugit est iste.
                Quibusdam unde qui, consequatur eveniet impedit deleniti ratione
                nihil autem rem?
              </p>
              <div className="row container_img">{elementsImage}</div>
            </div>
          </div>
        </div>
        <div className="container-about container p-0">
          <div className="title" style={{ paddingBottom: "12px" }}>
            <h2>Tại sao nên chọn Hoàng Hoan</h2>
          </div>
          <div className="container-policy">
            <div className="d-flex flex-wrap">
              <div className="col-12 col-md-6 p-2">{elementsBenefit[0]}</div>
              <div className="col-12 col-md-6 p-2">{elementsBenefit[1]}</div>
              <div className="col-12 col-md-6 p-2">{elementsBenefit[2]}</div>
              <div className="col-12 col-md-6 p-2">{elementsBenefit[3]}</div>
            </div>
          </div>
        </div>
      </section>
      <section id="tintuc" className="Block container_4">
        <div className="container-lg p-0">
          <TitleSection title={"Tin tức"} />
          <Container className="mt-lg-4 p-0">
            <Row className="d-flex">
              <Col className="col-12 col-lg-8 boxFirst_post">
                {elementFirst}
              </Col>
              <Col className="col-12 col-lg-4 list-new mt-3 mt-lg-0 p-0 ">
                {elementsNew}
                <button className="btn-preview " style={{ marginLeft: "12px" }}>
                  <Link
                    to="/NewsPage.js"
                    className="p-0 m-0 h-100"
                    style={{ textDecoration: "none" }}
                  >
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
        <div className="container-lg  p-0">
          <TitleSection title={"Đối tác"} />
          <Slider {...settingsPartner}>{elementPartners}</Slider>
        </div>
      </section>
      <section id="lienhe" className="Block container_6">
        <img src="./img/lienhe-1-removebg-preview.png" alt="ghe" />
        <div className="container-lg row  p-0">
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
                <div className="form-group col-lg-9 col-12">
                  <input
                    type="text"
                    placeholder="Email/Phone *"
                    name="Email/Phone"
                    className="Email-phone"
                    id="email"
                  />
                  <p className="error" id="invalid_email" />
                </div>
                <div className="submit col-lg-3 col-12">
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
