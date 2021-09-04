import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="link-container">
        <p className="big-footer-title">Info</p>
        <Link to="/info" className="footer-link-items">
          Orari
        </Link>
        <br />
        <Link to="/info" className="footer-link-items">
          Dove siamo
        </Link>
        <br />
        <Link to="/info" className="footer-link-items">
          Numero di telefono
        </Link>
        <br />
        <Link to="/ToS" className="footer-link-items">
          Privacy & Cookies
        </Link>
        <p className="copyright-text">(C) 2021 Yashiki Ristorante Giapponese</p>
      </div>

      <div className="other-stuff-container">
        <Link to="/home" className="footer-logo">
          Yashiki
        </Link>
        <br />
        <Link
          to={{ pathname: "https://www.instagram.com/yashiki_sushi/?hl=it" }}
          className="footer-icon ig"
          target="_blank"
        >
          <i class="fab fa-instagram" />
        </Link>
        <Link
          to={{ pathname: "https://www.instagram.com/yashiki_sushi/?hl=it" }}
          className="footer-icon"
          target="_blank"
        >
          <i class="fab fa-facebook fb" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
