import React from "react";
// import "../App.css";
import "./News.css";
import { Link } from "react-router-dom";

function News() {
  return (
    <div id="cont">

      <div className="left">
        <div className="left-1 box icon"><i className="fas fa-qrcode"></i></div>

        <div className="left-2 box">
          <h1 className="subtitle">Scannerizza il QrCode.</h1>
          <p className="description">Abbiamo digitalizzato <br /> il men&ugrave; per la vostra <br /> comodit&agrave; e sicurezza.</p>
        </div>
      </div>

      <div className="center">
        <div className="center-1 box icon"><i className="fas fa-calendar-check" /></div>
        <div className="center-2 box">
          <h1 className="subtitle">Sempre aperti.</h1>
          <h1 className="description">Da luned&igrave; a domenica <br /> Yashiki non vi abbandona mai </h1>
        </div>
      </div>

      <div className="right">
        <div className="right-1 box icon"><i className="fas fa-shipping-fast"></i></div>
        <div className="right-2 box">
          <h1 className="subtitle">Take away & domicilio</h1>
          <h1 className="description">I nostri piatti sono disponibli per l'asporto e <br /> la consegna a domicilio</h1>
        </div>
      </div>

      <div className="offers">
        <div className="offers-1 box icon"><i className="fas fa-star"></i></div>

        <div className="offers-2 box">
          <h1 className="subtitle">Hai visto le offerte?</h1>
          <p className="description">Puoi trovarle in <Link to="/takeaway-n-offers">questa</Link> pagina.</p>
        </div>
      </div>
      
    </div>
  );
}

// <i className="fas fa-calendar-check icon"></i>
// <i className="fas fa-qrcode icon"></i>
// <i className="fas fa-shipping-fast icon"></i>

export default News;
