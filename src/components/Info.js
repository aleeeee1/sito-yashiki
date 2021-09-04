import React from 'react'
import "./Info.css"



function Info() {
  return(
    <div id="info-cont">
      <div className="info-panel box-1">
        <h1 className="_title">Info e orari</h1>
        <div className="info_section">
          <div className="open-time section">
            <h1 className="_subtitle">Non ho ancora finito cazzo guardi cogloine</h1>
          </div>
        </div>
      </div>
      <div className="map box-1"><iframe title="mappacartina" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.320766869771!2d7.753048815294499!3d44.97779457378808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47880c0cf3ff3597%3A0xe59f6240a597c5fa!2sYashiki%20Ristorante%20Giapponese!5e0!3m2!1sit!2sit!4v1630415221749!5m2!1sit!2sit" className="mappa"></iframe></div>
    </div>
  )
}

export default Info