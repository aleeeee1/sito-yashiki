import React from "react";
import "./inital-info.css"

function handleClick() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read-more-btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "";
      btnText.innerHTML = `Mostra di più`;
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Mostra di meno";
      moreText.style.display = "inline";
    }
  }
  
  function handleClick1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("read-more-btn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "";
      btnText.innerHTML = `Mostra di più`;
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Mostra di meno";
      moreText.style.display = "inline";
    }
  }




function info_warning() {
  return (
    <>
    

      <h1 className="big-Title">
        All You Can Eat <br /> 20.90&euro;
      </h1>

      <div className="info-container-cena">
        <p className="various-info 1">Coperto: 2&euro;</p>
        <p className="various-info 2">
          I bambini sotto i 120cm pagano met&agrave;
        </p>
        <p className="various-info symbol">
          I piatti con il simbolo: <i class="fa fa-circle" /> sono ordinabili al
          massimo 3 volte
        </p>
        <p className="various-info 4">
          Il cibo &egrave; vita e non va sprecato. <br /> Eventuali eccessi
          verranno conteggiati ai prezzi di listino.
        </p>
        <p className="various-info warning 5">
          Per evitare spiacevoli inconvenienti<span id="dots">...</span>{" "}
          <span id="more">
            si prega di informare preventivamente il nostro personale nel caso
            di allergie o intolleranze alimentari o nel caso in cui si stia
            seguendo una dieta vegetariana. Siamo preparati per consigliarti nel
            migliore dei modi. Tutti i piatti potrebbero presentare tracce di
            sesamo o soia e contengono glutammato di sodio. I vini e le bevande
            possono contenere solfiti.{" "}
          </span>
          <br />
          <button onClick={handleClick} id="read-more-btn">
            Mostra di pi&ugrave;
          </button>
        </p>

        <p className="various-info warning 6">
          Alcuni ingredienti dei nostri piatti<span id="dots1">...</span>
          <span id="more1">
            {" "}
            contrassegnati con un (*) potrebbero essere surgelati all’origine o
            acquistati freschi e surgelati da noi con abbattitore di temperatura
            per la corretta conservazione nel rispetto della normativa sanitaria{" "}
          </span>{" "}
          &nbsp;
          <button onClick={handleClick1} id="read-more-btn1">
            Mostra di pi&ugrave;
          </button>
        </p>
      </div>
    </>
  );
}

export default info_warning;