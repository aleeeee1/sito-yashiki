import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Foto" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

function BetterCardItem(props) {
  return (

      <div className="product-content">
        <div className="image-container">
          <img className="product-image" src={props.src} />
          <div class={`image-label ${props.limited}`}>
            <i class="fa fa-circle"></i>
          </div>
        </div>
        <h3 className="product-title">{props.title}</h3>
        <h6 className="price">AYCE: <i className={`${props.icon}`}/></h6>
        <p className="product-description">{props.description}</p>
        <p className="numCount">N. di pezzi totale: {props.nPieces}</p>
        <div className="div-color bottone">Numero: &nbsp;{props.number}</div>
        
      </div>

  );
}

export default BetterCardItem;
