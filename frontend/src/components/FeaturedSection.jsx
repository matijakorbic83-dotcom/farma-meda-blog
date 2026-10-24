import React from "react";
import honeyBeesImage from "../assets/honey-and-bees.jpg";

export default function FeaturedSection() {
  return (
    <section className="featured section-wrap" aria-labelledby="featured-naslov">
      <div className="featured__image reveal">
        <img src={honeyBeesImage} alt="Tegla zlatnog meda okružena pčelama" loading="lazy" />
      </div>
      <div className="featured__copy reveal">
        <p className="eyebrow eyebrow--dark">Mali čuvari velikog sveta</p>
        <h2 id="featured-naslov">Bez pčela, nema ni ove priče.</h2>
        <p>
          Pčele oprašuju mnoge biljke od kojih zavisi naš svet. Zato briga o
          košnici počinje poštovanjem njihovog ritma i prirode koja ih okružuje.
        </p>
        <a className="text-link" href="#price">
          Još priča o pčelama <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
