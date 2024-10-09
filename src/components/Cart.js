import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ItemCart from "../components/ItemCart";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartItems = useSelector((state) => state.cart);

  let elementItemCart = cartItems.map((item, index) => {
    return (
      <ItemCart key={index} item={item.product} quantity={item.quantity} />
    );
  });

  return (
    <>
      <button
        style={{
          backgroundColor: "white",
          width: "100%",
          borderRadius: "16px",
        }}
        onClick={handleShow}
        className="btn-primary"
      >
        <span style={{ backgroundColor: "white", borderRadius: "12px" }}>
          <i
            className="fa-solid fa-cart-shopping"
            style={{ color: "black" }}
          ></i>
        </span>
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ display: "flex", flexDirection: "column" }}>
          {elementItemCart}
          <button
            className="btn-primary"
            style={{ width: "100%", marginTop: "6px" }}
            onClick={handleClose}
          >
            <Link
              to="/Checkout"
              style={{
                padding: "0px",
                margin: "0px",
              }}
            >
              <span style={{ width: "100%", height: "100%" }}>
                Tông tiền - Thanh toán
              </span>
            </Link>
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShoppingCart;
