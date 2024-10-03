import React, { useState } from "react";
import Slider from "react-slick";
import Banner from "../components/ProductPage/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../components/Product";
import "../style/product.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "16px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "16px" }}
      onClick={onClick}
    />
  );
}

function ProductPage({ renderProducts, renderCategories }) {
  const settingSliders = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settingProduct = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const itemSlides = [
    {
      img: "/img/banner.png",
      title: "Trải nghiệm",
      content: "Không gian hiện đại",
      btn: "mua ngay",
    },
    {
      img: "/img/banner.png",
      title: "Trải nghiệm",
      content: "Không gian hiện đại",
      btn: "mua ngay",
    },
    {
      img: "/img/banner.png",
      title: "Trải nghiệm",
      content: "Không gian hiện đại",
      btn: "mua ngay",
    },
  ];

  const elementSlides = itemSlides.map((item, index) => {
    return <Banner key={index} img={item.img} title={item.title} />;
  });

  // const elementCategories = renderCategories.map((item, index) => {
  //   if (index === showProduct);
  //   return (
  //     <div className="container-lg" key={index}>
  //       <div className=" box-product">
  //         <h2>{item.title}</h2>
  //         <button className="btn seemore">Xem tất cả</button>
  //       </div>
  //       <div className="container-item-product">
  //         <div style={{ width: "100%", display: "flex", gap: "12px" }}>
  //           {renderProducts
  //             .filter((x) => x.cid === item.id)
  //             .slice(0, 24)
  //             .map((item, index) => (
  //               <Product
  //                 key={index}
  //                 product={{
  //                   id: item.id,
  //                   cid: item.cid,
  //                   img: `http://apixm.devmaster.vn${item.image}`,
  //                   title: item.title,
  //                   priceOld: item.priceOld,
  //                   priceNew: item.priceNew,
  //                   size: item.size,
  //                 }}
  //               />
  //             ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });

  const [showAll, setShowAll] = useState({}); // State to manage visibility of all products in each category

  const handleShowAll = (categoryId) => {
    setShowAll((prevState) => ({
      ...prevState,
      [categoryId]: !prevState[categoryId], // Toggle show all for this category
    }));
  };

  const elementCategories = renderCategories.map((item, index) => {
    const productsToShow = renderProducts.filter((x) => x.cid === item.id);
    const isShowingAll = showAll[item.id]; // Check if showing all products for this category
    const displayedProducts = isShowingAll
      ? productsToShow
      : productsToShow.slice(0, 4); // Show only 4 products if not toggled

    return (
      <div className="container-lg" key={index}>
        <div className="box-product">
          <h2>{item.title}</h2>
          <button
            className="btn seemore"
            onClick={() => handleShowAll(item.id)}
          >
            {isShowingAll ? "Ẩn bớt" : "Xem tất cả"}
          </button>
        </div>
        <div className="container-item-product">
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {displayedProducts.map((product, index) => (
              <Product
                key={index}
                product={{
                  id: product.id,
                  cid: product.cid,
                  img: `http://apixm.devmaster.vn${product.image}`,
                  title: product.title,
                  priceOld: product.priceOld,
                  priceNew: product.priceNew,
                  size: product.size,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section id="banner" className="banner_product">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <Slider {...settingSliders}>{elementSlides}</Slider>
          </div>
        </div>
      </section>

      <section id="product-container" className="Block">
        {elementCategories}
      </section>
    </>
  );
}

export default ProductPage;
