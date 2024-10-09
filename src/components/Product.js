import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { act_buy_item, act_change_notify } from "../actions/index";
import { MSG_ADD } from "../constants/messages";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import slugifyText from "../utils/slugifyText";

const Product = ({ product }) => {
  const { id, cid, img, title, priceOld, priceNew, size } = product;

  // Lấy thông tin sản phẩm từ prop

  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const buyItem = (product, quantity) => {
    dispatch(act_buy_item(product, quantity));

    const changeNotify = (content) => {
      dispatch(act_change_notify(content));
      toast.success(content, {
        position: "top-right",
      });
    };
    changeNotify(MSG_ADD);
  };

  return (
    <Card key={id} className="m-0 p-0 w-100">
      <Card.Img
        variant="top"
        src={img}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/Product/${slugifyText(title)}`} className="p-0 m-0">
            {title}
          </Link>
        </Card.Title>
        <Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            <p style={{ textDecoration: "line-through", color: "red" }}>
              {priceOld}vn$
            </p>
            <p>{priceNew}vn$</p>
          </div>
          <p>Size: {size}</p>
        </Card.Text>
        <button
          className="btn-primary"
          style={{ width: "fit-content", marginTop: "8px" }}
          onClick={() => buyItem(product, quantity)}
        >
          <span>Add to cart</span>
        </button>
      </Card.Body>
    </Card>
  );
};

export default Product;
