import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import slugifyText from "../../utils/slugifyText";

export default function LoopPost({ key, img, title, description }) {
  return (
    <div className="col-12 col-lg-4 p-md-2 col-md-6 p-1">
      <Card key={key} className="p-0 w-100">
        <Card.Img
          variant="top"
          src={img}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            <Link to={`/News/${slugifyText(title)}`} className="p-0">
              {title}
            </Link>
          </Card.Title>
          <Card.Text
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </Card.Text>
        </Card.Body>
        <button
          className="btn-primary"
          style={{ width: "40%", margin: "0 0 16px 16px " }}
        >
          <span>Đọc thêm</span>
        </button>
      </Card>
    </div>
  );
}
