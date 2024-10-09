import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container-lg row box-footer">
        <div>
          <h4>Thông tin chung</h4>
          <h5 style={{ color: "#fff" }}>Công ty TNHH Hoàng Hoan</h5>
          <ul>
            <li>
              <i className="fa-solid fa-phone" />
              <a href="tel:0866634302" id="#phone">
                0999.999.999
              </a>
            </li>
            <li>
              <i className="fa-regular fa-envelope" />
              <a href="mailto:namdoan.ka@gmail.com">cskh@hoanghoan.vn</a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot" />
              <a href="#">Số 1 Nguyễn Trãi, Thanh Xuân, Hà Nội</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Về chúng tôi</h4>
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
        <div>
          <h4>Kết nối với chúng tôi</h4>
          <div className="social">
            <i className="fa-brands fa-square-facebook fa-2x" />
            <i className="fa-brands fa-square-instagram fa-2x" />
            <i className="fa-regular fa-envelope fa-2x" />
          </div>
        </div>
      </div>
    </footer>
  );
}
