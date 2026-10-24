import React from "react";
import familyImage from "../assets/family-apiary.jpg";

export default function FamilySection() {
  return (
    <section className="intro section-wrap" id="porodica" aria-labelledby="porodica-naslov">
      <div className="intro__copy reveal">
        <p className="eyebrow eyebrow--dark">Ljudi iza meda</p>
        <h2 id="porodica-naslov">Porodica, pčele<br />i mnogo strpljenja.</h2>
        <p className="lead">
          Farma meda je porodična priča koja traje od 1957. godine. Kroz četiri
          generacije, ljubav prema pčelama i poštovanje prema prirodi ostali su
          u njenom središtu.
        </p>
        <p>
          Ovaj blog je mesto za priče sa pčelinjaka: o ljudima koji brinu o
          košnicama, malim ritualima porodičnog posla i medu koji nastaje
          zahvaljujući vrednim pčelama.
        </p>
        <a className="text-link" href="#nasa-prica">
          Čitajte više o nama <span aria-hidden="true">→</span>
        </a>
      </div>
      <figure className="intro__photo reveal">
        <img src={familyImage} alt="Članovi porodice zajedno na pčelinjaku" loading="lazy" />
        <figcaption>Četiri generacije, jedna porodična tradicija.</figcaption>
      </figure>
    </section>
  );
}
