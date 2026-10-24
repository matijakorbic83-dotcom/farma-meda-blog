import React from "react";
import beekeeperImage from "../assets/beekeeper-hive.jpg";

export default function Hero() {
  return (
    <section className="hero" id="pocetna" aria-labelledby="hero-naslov">
      <img
        className="hero__image"
        src={beekeeperImage}
        alt="Pčelar pažljivo pregleda saće u košnici"
        fetchPriority="high"
      />
      <div className="hero__shade" />
      <div className="hero__content">
        <p className="eyebrow">Porodična priča od 1957. godine</p>
        <h1 id="hero-naslov">Svaka tegla ima svoju priču.</h1>
        <p className="hero__intro">
          Iza svake tegle stoje vredne pčele, pažljiv rad i ljubav prema prirodi.
        </p>
        <a className="button button--light" href="#nasa-prica">Upoznajte naš svet</a>
      </div>
      <span className="hero__caption">Iz života na pčelinjaku</span>
    </section>
  );
}
