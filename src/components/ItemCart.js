import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  act_buy_item,
  act_update_item,
  act_change_notify,
  act_remove_item,
} from "../actions/index";
// import { connect } from "react-redux";

const ItemCart = ({ item, quantity }) => {
  const dispatch = useDispatch();

  const handleUpdateQuantity = (quantity) => {
    dispatch(act_update_item(item, quantity)); // Cập nhật số lượng
  };

  const handleRemoveItem = () => {
    dispatch(act_remove_item(item.product)); // Xóa sản phẩm khỏi giỏ hàng
  };
  return (
    <Container style={{ padding: 0 }}>
      <Row style={{ margin: 0 }}>
        <Col xs={12} md={8}>
          <Row>
            <Col
              xs={12}
              md={4}
              style={{
                alignContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
              <a href="#">
                <img
                  src={item.img} // lấy ảnh sản phẩm từ state
                  style={{ width: "100%" }}
                  alt="" // lấy tên sản phẩm làm alt
                />
              </a>
            </Col>
            <Col
              xs={6}
              md={8}
              style={{
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div className="detail">
                <div className="name">
                  <a href="#">
                    <h6>{item.title}</h6> {/* hiển thị tên sản phẩm */}
                  </a>
                </div>
                <div className="price">{item.priceNew}vnĐ</div>{" "}
                {/* hiển thị giá sản phẩm */}
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4} style={{ display: "flex", alignItems: "center" }}>
          <Row style={{ width: "100%" }}>
            <Col
              className="quantity"
              xs={12}
              md={8}
              style={{
                alignContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
              <input
                type="number"
                className="quantity"
                value={quantity} // Sử dụng value thay vì defaultValue
                onChange={(e) => handleUpdateQuantity(e.target.value)}
                style={{ padding: "1px", width: "100% " }}
              />
            </Col>

            <Col
              className="remove"
              xs={12}
              md={4}
              style={{
                alignContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
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
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCart;
