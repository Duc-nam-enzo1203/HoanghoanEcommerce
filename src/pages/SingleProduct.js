import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import slugifyText from "../utils/slugifyText";
// import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {
  act_buy_item,
  act_change_notify,
  act_update_item,
} from "../actions/index";
import { MSG_ADD } from "../constants/messages";

const SingleProduct = ({ renderProducts }) => {
  const { title } = useParams(); // Lấy title từ URL

  // Tìm sản phẩm theo slug của title
  const product = renderProducts.find(
    (prod) => slugifyText(prod.title) === title
  );

  const [quantity, setQuantity] = useState(1);
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

  const handleUpdateQuantity = (quantity) => {
    dispatch(act_update_item(product, quantity)); // Cập nhật số lượng
  };

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  const RelatedProducts = renderProducts.map((item, index) => {
    if (item.cid === product.cid) {
      console.log(item, product);

      return (
        <Col key={index} className="mb-5">
          <Card className="h-100 w-100">
            <img
              className="card-img-top"
              src={`http://apixm.devmaster.vn${item.image}`}
              style={{ height: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">
                  <Link to={`/product/${slugifyText(item.title)}`}>
                    {item.title}
                  </Link>
                </h5>

                {item.priceOld && (
                  <span className="text-muted text-decoration-line-through">
                    {item.priceOld}
                  </span>
                )}
                <span> - {item.priceNew}</span>
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <Button
                  className="btn-primary w-100"
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    padding: "3px",
                  }}
                  onClick={() => buyItem(item, quantity)}
                >
                  <span style={{ borderRadius: "3px" }}>Add to cart</span>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      );
    }
  });

  return (
    <>
      <section className="py-5">
        <div className="container  px-lg-5 ">
          <h6 style={{ color: "#bd945f" }}>
            Trang chủ | Sản phẩm | {product.title}
          </h6>
        </div>
        <Container className=" px-lg-5 my-5">
          <Row className="gx-4 gx-lg-5 align-items-center">
            <Col md={6}>
              <img
                className="card-img-top mb-5 mb-md-0"
                src={`http://apixm.devmaster.vn${product.image}`}
                alt="..."
              />
            </Col>
            <Col md={6}>
              <div className="small mb-1">SKU: {product.id}</div>
              <h1 className="display-5 fw-bolder">{product.title}</h1>
              <div className="fs-5 ">
                <span className="text-decoration-line-through">
                  {product.priceOld} vnĐ
                </span>
                <span> - {product.priceNew} vnĐ</span>
              </div>
              <p className="lead mb-5">{product.metaDescription}</p>
              <div className="d-flex ">
                <Form.Control
                  className="text-center me-3"
                  id="inputQuantity"
                  type="number"
                  value={quantity} // Sử dụng value thay vì defaultValue
                  onChange={(e) => handleUpdateQuantity(e.target.value)}
                  style={{ maxWidth: "3rem" }}
                />
                <Button
                  variant="outline-dark"
                  className="flex-shrink-0"
                  onClick={() => buyItem(product, quantity)}
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Related items section */}
      <section className="py-5 bg-light">
        <Container className="px-4 px-lg-5 mt-5">
          <h2 className="fw-bolder mb-4">Related products</h2>
          <Row className="gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {RelatedProducts}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SingleProduct;
