import React, { act, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import slugifyText from "../utils/slugifyText";
import { useNavigate } from "react-router-dom";
import { act_search_product_and_post } from "../actions/index";

export default function Header({ renderCartItems, renderPosts }) {
  const cart = useSelector((state) => state.cart);

  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  const [searchTermInput, setSearchTermInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchTermInput(e.target.value);
  };

  const listProduct = useSelector((state) => state.listProduct);
  const filteredData = listProduct.listProduct.filter((item) => {
    return item.title.toLowerCase().includes(searchTermInput.toLowerCase());
  });

  const filterPosts = renderPosts.filter((item) => {
    return item.title.toLowerCase().includes(searchTermInput.toLowerCase());
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTermInput}`);
    setIsOpen(false);
    dispatch(
      act_search_product_and_post(searchTermInput, filteredData, filterPosts)
    );
    console.log(searchTermInput, filteredData, filterPosts);
  };

  return (
    <header id="header">
      <div className="container-lg row  justify-content-between gap-0">
        <div className="logo col-lg-2 col-2 col-md-2">
          <Link to="/">
            <img src="../img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="col-lg-2  p-0 m-0 col-8 col-md-8 d-flex d-md-flex d-lg-none ">
          <ul className="d-flex align-items-center p-0 m-0 gap-2 w-100 h-100 justify-content-end">
            <li>
              <Link to="/Login" className="p-0">
                <button
                  className="btn-primary"
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    borderRadius: "16px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "white",
                      borderRadius: "12px",
                    }}
                  >
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "black" }}
                    />
                  </span>
                </button>
              </Link>
            </li>
            <li style={{ position: "relative" }}>
              <ShoppingCart renderCartItems={renderCartItems} />
              <p
                style={{
                  fontSize: "14px",
                  color: "white",
                  position: "absolute",
                  top: "0px",
                  right: "0",
                  backgroundColor: "red",
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "20px",
                  fontWeight: "bold",
                }}
              >
                {totalQuantity}
              </p>
            </li>
            <li>
              <button
                className="btn-primary"
                to="#search"
                onClick={handleShow}
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "16px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                  }}
                >
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: "black" }}
                  />
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="menu-wrap col-lg-8 col-2 col-md-2">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div />
          </div>
          <div className="menu">
            <div className="overlay-menu">
              <ul>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/Information">Giới thiệu</Link>
                </li>
                <li>
                  <Link to="/Product">Sản phẩm</Link>
                </li>
                <li>
                  <Link to="/News">Tin tức</Link>
                </li>
                <li>
                  <Link to="/Partner">Đối tác</Link>
                </li>
                <li>
                  <Link to="/Contact">Liên hệ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 p-0 m-0 col-4 d-none d-md-none d-lg-block">
          <ul className="d-flex align-items-center p-0 m-0 gap-2 w-100 h-100">
            <li>
              <Link to="/Login" className="p-0">
                <button
                  className="btn-primary"
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    borderRadius: "16px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "white",
                      borderRadius: "12px",
                    }}
                  >
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "black" }}
                    />
                  </span>
                </button>
              </Link>
            </li>
            <li style={{ position: "relative" }}>
              <ShoppingCart renderCartItems={renderCartItems} />
              <p
                style={{
                  fontSize: "14px",
                  color: "white",
                  position: "absolute",
                  top: "0px",
                  right: "0",
                  backgroundColor: "red",
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "20px",
                  fontWeight: "bold",
                }}
              >
                {totalQuantity}
              </p>
            </li>
            <li>
              <button
                className="btn-primary"
                to="#search"
                onClick={handleShow}
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  borderRadius: "16px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                  }}
                >
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: "black" }}
                  />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div id="search">
          <button type="button" className="close_search" onClick={handleClose}>
            <i className="fa-solid fa-xmark" />
          </button>
          <form>
            <h3>Tìm kiếm</h3>
            <div>
              <input
                type="search"
                placeholder="Từ khóa"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn-primary"
                onClick={handleSubmit}
              >
                <span>
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
              </button>
            </div>
            <ul className="m-0 p-0 position-absolute">
              {filteredData.slice(0, 6).map((item) => (
                <li
                  key={item.id}
                  className="text-start p-0"
                  style={{ margin: "4px 0" }}
                >
                  <Link
                    to={`/Product/${slugifyText(item.title)}`}
                    style={{ color: "#fff !important" }}
                    onClick={handleClose}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </form>
        </div>
      )}
    </header>
  );
}
