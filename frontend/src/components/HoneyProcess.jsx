import React from "react";

const steps = [
  {
    number: "01",
    title: "Pčele posećuju cvetove",
    description: "Vredne pčele sakupljaju nektar i prenose ga u košnicu, gde počinje čudesna saradnja prirode.",
  },
  {
    number: "02",
    title: "Nektar postaje med",
    description: "U saću, pčele obrađuju nektar i odlažu ga u ćelije koje zatvaraju tankim slojem voska.",
  },
  {
    number: "03",
    title: "Pažnja pri svakom koraku",
    description: "Pčelari prate košnice i pažljivo sakupljaju zreo med, čuvajući pritom dobrobit pčela.",
  },
  {
    number: "04",
    title: "Od košnice do stola",
    description: "Med stiže do tegle spreman da zasladi doručak, porodične trenutke i omiljene recepte.",
  },
];

export default function HoneyProcess() {
  return (
    <section className="process" id="nastanak-meda" aria-labelledby="proces-naslov">
      <div className="section-wrap process__inner">
        <div className="process__heading reveal">
          <p className="eyebrow eyebrow--dark">Od prirode do tegle</p>
          <h2 id="proces-naslov">Kako nastaje med?</h2>
          <p>
            Sve počinje napolju, među cvetovima. Ovo je kratak pogled na pažljiv
            put koji med prelazi od pčele do naše trpeze.
          </p>
        </div>
        <div className="steps">
          {steps.map(({ number, title, description }) => (
            <article className="step reveal" key={number}>
              <span className="step__number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
