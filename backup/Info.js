import React from "react";
// import "../App.css";
import "./Info.css";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div id="cont">
      <div className="left">
        <div className="left-1 box icon"><i className="fas fa-map-marked-alt"></i></div>

        <div className="left-2 box">
          <h1 className="subtitle">Dove siamo?</h1>
          <p className="description">Via Torino, 167 - 10028 Trofarello - TO <br /> <a href="https://g.page/ristorantesushiyashiki?share" target="_blank">Google maps</a></p>
        </div>
      </div>

      <div className="center">
        <div className="center-1 box icon"><i className="fas fa-calendar-alt"></i></div>
        <div className="center-2 box">
          <h1 className="subtitle">Orari</h1>
          <h1 className="description">Aperto TUTTI i giorni (7/7) <br />dalle 12:00 alle 15:00 e <br /> dalle 19:00 alle 23:30</h1>
        </div>
      </div>
      
      <div className="right">
        <div className="right-1 box icon"><i className="fas fa-phone-alt"></i></div>
        <div className="right-2 box">
          <h1 className="subtitle">Contatti</h1>
          <h1 className="description"><a href="tel:+3901119210901">+39 011 1921 0901</a> <br /> <a href="tel:+393391014785">+39 339 101 4785</a> <br /> P.IVA 11775170019 </h1>
        </div>
      </div>

      <div className="tos">
        <div className="tos-1 box icon"><i className="fas fa-info"></i></div>
        <div className="tos-2 box">
          <h1 className="subtitle">Info su Cookie e ToS</h1>
          <h1 className="description">Su <Link to="/ToS">questa</Link> pagina <br /> <i style={{"font-size": "10px"}}>ToS = Terms of service = termini di servizio</i> <br /> </h1>
        </div>
      </div>
    </div>
  );
}

// <i className="fas fa-calendar-check icon"></i>
// <i className="fas fa-qrcode icon"></i>
// <i className="fas fa-shipping-fast icon"></i>

export default Info;
