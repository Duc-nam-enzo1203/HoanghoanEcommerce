import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../style/checkout.css";
import ItemCart from "../components/ItemCart";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function CheckoutPage() {
  const { cart } = useSelector((state) => state);

  const elementsProduct = cart.map((item, index) => {
    return (
      <ItemCart key={index} item={item.product} quantity={item.quantity} />
    );
  });

  const price = cart.map((item) => {
    const total = item.product.priceNew;

    return total * item.quantity;
  });

  const total = price.reduce((a, b) => a + b, 0);

  const codeCoupon = [
    {
      code: "CODE1",
      discount: 100,
    },
    {
      code: "CODE2",
      discount: 200,
    },
    {
      code: "CODE3",
      discount: 300,
    },
  ];

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");

  const handleChange = (value) => {
    setCouponCode(value);

    // Tìm mã giảm giá
    const coupon = codeCoupon.find((item) => item.code === value);

    if (coupon) {
      setDiscount(coupon.discount);
      setMessage(`Ưu đãi đã áp dụng. Giảm giá: € ${coupon.discount}`);
    } else {
      setDiscount(0);
      setMessage("Mã giảm giá không có sẵn.");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bill, setBill] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBill(true);
  };

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setUploadSuccess("Đã upload thành công");
    } else {
      setUploadSuccess("Chưa có bill");
    }
  };

  return (
    <div className="box_shoppingCart container-lg">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title_cart">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Giỏ hàng</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {cart.length} Sản phẩm
              </div>
            </div>
          </div>
          {elementsProduct}
          <div className="back-to-shop">
            <Link to="/Product">←</Link>
            <span className="text-muted">Trở cửa hàng</span>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Tổng tiền</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: 0 }}>
              Sản phẩm 3
            </div>
            <div className="col text-right">
              € {total.toLocaleString("vi-VN").replace(/\./g, " ")}
            </div>
          </div>
          <form>
            <p>Giao hàng</p>
            <select>
              <option className="text-muted">Standard-Delivery- €5.00</option>
              <option className="text-muted">Freeship</option>
            </select>
            <p>Mã giảm giá</p>
            <input
              id="code"
              type="text"
              placeholder="Enter your code"
              name="coupon"
              value={couponCode}
              onChange={(e) => handleChange(e.target.value)}
            />
            <span>{message}</span>
          </form>
          <div
            className="row"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
          >
            <div className="col">Tổng giá</div>
            <div className="col text-right">
              € {(total - discount).toLocaleString("vi-VN").replace(/\./g, " ")}
            </div>
          </div>
          <Button
            className="btn"
            onClick={handleShow}
            style={{ width: "100%" }}
          >
            <span style={{ borderRadius: "4px" }}>Thanh toán</span>
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vui lòng thanh toán QR</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src="../img/QRcode.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
          <div class="file-input">
            <input
              type="file"
              name="file-input"
              id="file-input"
              class="file-input__input"
              onChange={handleFileUpload}
            />
            <label class="file-input__label" for="file-input">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="upload"
                class="svg-inline--fa fa-upload fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                ></path>
              </svg>
              <span>Tải lên bill thanh toán</span>
            </label>
          </div>
          <span>{uploadSuccess}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{ width: "fit-content" }}
          >
            <span style={{ borderRadius: "4px" }}>Đã thanh toán</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
