import React from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./Cart";
import { useSelector } from "react-redux";

export default function Header({ renderCartItems }) {
  const cart = useSelector((state) => state.cart);

  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <header id="header">
      <div className="container-lg row">
        <div className="logo col-4">
          <Link to="/">
            <img src="../img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="menu-wrap col-8">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
