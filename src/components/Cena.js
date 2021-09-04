import React from "react";
import "./Cena.css";
import BetterCardItem from "./CardItem";
import "./Cards.css";
import Menu from "./menuCena.json";
import Info from "./initial-info"


const tick = "fas fa-check-circle";
const no_tick = "fas fa-times-circle";



function Cena() {
  return (
    <div className="cena-container">
      <Info />
      <div className="gallery">
        {Menu["piatti"].map((obj) => {
          return (
            <BetterCardItem
              src={obj.img_path}
              title={`${obj.name} ${obj.surgelato ? "*" : ""}`}
              description={obj.description}
              AYCE="AYCE: "
              icon={obj.ALY ? tick : no_tick}
              number={obj.number}
              nPieces={obj.nPieces}
              limited={obj.limited ? "" : "invisible"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cena;
