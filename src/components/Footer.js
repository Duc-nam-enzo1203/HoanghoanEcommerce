import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="d-flex justify-content-center">
      <div className="container-lg row p-0 box-footer d-flex w-100 justify-content-between">
        <div className="col-12 col-md-4">
          <h5 style={{ color: "#fff" }}>Thông tin chung</h5>
          <h5 style={{ color: "#fff" }}>Công ty TNHH Hoàng Hoan</h5>
          <ul className="p-0 mt-lg-3">
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
        <div className="f-about col-12 col-md-4 d-flex justify-content-center">
          <div>
            <h5 style={{ color: "#fff" }}>Về chúng tôi</h5>
            <ul className="p-0">
              <li>
                <Link to="/" className="p-0">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/Information" className="p-0">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/Product" className="p-0">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/News" className="p-0">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link to="/Partner" className="p-0">
                  Đối tác
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="p-0">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="f-contact col-12 col-md-4 d-flex justify-content-end">
          <div>
            <h5 style={{ color: "#fff" }}>Kết nối với chúng tôi</h5>
            <div className="social mt-md-2">
              <i className="fa-brands fa-square-facebook fa-2x" />
              <i className="fa-brands fa-square-instagram fa-2x" />
              <i className="fa-regular fa-envelope fa-2x" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
