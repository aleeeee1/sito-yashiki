import React from "react";
import { Button } from "./Button.js";
import "./404.css";
import { Link } from 'react-router-dom'
function error() {
  return (
    <div className="error-page">

      <h1 className="big-title">404</h1>
      <p className="error-description">Questa pagina <br /> non esiste!</p>
      <Link to='/home'>
        <button
          className="back-to-home"
        >
          Torna alla home
        </button>
      </Link>
      <br />
      <i className="fas fa-exclamation-triangle error-icon"></i>

    </div>
  );
}

export default error;
