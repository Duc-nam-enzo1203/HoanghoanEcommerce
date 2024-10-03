import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/contact.css";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState("");

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    if (e.target.id === "fullName") {
      setFullName(e.target.value);
    } else if (e.target.id === "Email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    } else if (e.target.id === "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName === "" || email === "" || phone === "" || message === "") {
      setShow(true);
      setNotification("Vui lòng nhập thông tin");
    } else {
      setShow(true);
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setNotification("Đã gửi thành công");
    }
  };

  return (
    <section className="Block Banner_contact">
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>{notification}</Modal.Body>
      </Modal>
      <div className="container-lg">
        <div>
          <img src="../img/logo.png" alt="logo" />
          <h1>Liên hệ</h1>
        </div>
        <div className="container-contact">
          <div>
            <img src="../img/san-pham-noi-bat/giuong-ngu.png" alt="" />
          </div>
          <div>
            <h3>Liên hệ với chúng tôi</h3>
            <form action="" method="post" className="contact-form">
              <div>
                <input
                  type="text"
                  placeholder="Họ tên(*)"
                  id="fullName"
                  name="fullName"
                  minLength={2}
                  value={fullName}
                  onChange={handleChange}
                  required=""
                />
                <label />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email(*)"
                  id="Email"
                  name="Email"
                  value={email}
                  onChange={handleChange}
                  required=""
                />
                <p />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Số điện thoại(*)"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  required=""
                />
                <p />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Nội dung"
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                />
                <p />
              </div>
              <input
                type="submit"
                placeholder="Gửi"
                id="submit-contact"
                defaultValue="Gửi"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
