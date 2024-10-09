import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  act_buy_item,
  act_update_item,
  act_change_notify,
  act_remove_item,
} from "../actions/index";

const ItemCart = ({ item, quantity }) => {
  const dispatch = useDispatch();

  const handleUpdateQuantity = (quantity) => {
    dispatch(act_update_item(item, quantity)); // Cập nhật số lượng
  };

  const handleRemoveItem = () => {
    dispatch(act_remove_item(item.product)); // Xóa sản phẩm khỏi giỏ hàng
  };

  const price = item.priceNew * quantity;

  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={item.img} />
        </div>
        <div className="col-3">
          <div className="row text-muted">{item.title}</div>
          <div className="row">{item.size}</div>
        </div>
        <div className="col-2">
          <input
            type="number"
            className="quantity"
            value={quantity}
            onChange={(e) => handleUpdateQuantity(e.target.value)}
            style={{ padding: "1px", width: "100% " }}
          />
        </div>
        <div className="col-3">
          {price === 0 ? (
            <span style={{ color: "red" }}>Hết hàng</span>
          ) : (
            <span>{price.toLocaleString("vi-VN").replace(/\./g, " ")} vnđ</span>
          )}
        </div>

        <div className="col-2">
          <button
            style={{
              padding: 0,
              width: "100%",
              backgroundColor: "white",
              border: "none",
            }}
            onClick={() => {
              dispatch(act_remove_item(item));
            }}
          >
            <svg
              version="1.1"
              className="close"
              x="0px"
              y="0px"
              viewBox="0 0 60 60"
              enableBackground="new 0 0 60 60"
            >
              <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
