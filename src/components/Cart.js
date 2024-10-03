import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ItemCart from "../components/ItemCart";
import Notify from "./Notify";
import { useSelector, useDispatch } from "react-redux";

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
        <Offcanvas.Body
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {elementItemCart}
          <button className="btn-primary" style={{ width: "100%" }}>
            <span>Update</span>
          </button>
          <Notify />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShoppingCart;
