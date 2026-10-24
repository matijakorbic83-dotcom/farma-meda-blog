import React from "react";
import apiaryBeginning from "../assets/pcelinjak3.jpg";
import apiaryWork from "../assets/apiary-work.jpg";
import honeyMarket from "../assets/honey-market.jpg";
import honeyDisplay from "../assets/honey-display.jpg";

const chapters = [
  {
    number: "01",
    eyebrow: "Prvi koraci",
    title: "Sve počinje ljubavlju prema pčelama",
    paragraphs: [
      "Naša priča počela je 1957. godine, uz prve košnice i mnogo radoznalosti. Ono što je u početku bilo porodično interesovanje, vremenom je postalo posao koji nas okuplja i povezuje sa prirodom.",
      "Od prvih dana učili smo da pčelarstvo traži strpljenje, pažnju i poštovanje prema svakom živom biću u košnici.",
    ],
    image: apiaryBeginning,
    imageAlt: "Pčelar pažljivo pregleda okvir sa saćem u košnici",
    caption: "Svaka sezona donosi nova saznanja.",
  },
  {
    number: "02",
    eyebrow: "Život na pčelinjaku",
    title: "Porodični posao, korak po korak",
    paragraphs: [
      "Dani na pčelinjaku prate ritam prirode. Proveravamo košnice, pratimo cvetanje i brinemo da pčele imaju uslove koji su im potrebni. Svaki član porodice s vremenom je pronašao svoje mesto u tom zajedničkom poslu.",
      "Tako se znanje prenosilo kroz generacije — ne samo kroz savete, već i kroz rad, posmatranje i vreme provedeno zajedno.",
    ],
    image: apiaryWork,
    imageAlt: "Pčelar radi pored košnice u zelenom pčelinjaku",
    caption: "Najvažniji deo posla dešava se među košnicama.",
  },
  {
    number: "03",
    eyebrow: "Susret sa ljudima",
    title: "Od našeg pčelinjaka do vašeg stola",
    paragraphs: [
      "Kako je porodica rasla, rasla je i želja da plod našeg rada podelimo sa drugima. Susreti na pijacama i lokalnim okupljanjima postali su prilika da razgovaramo o medu, pčelama i načinu na koji nastaje svaka tegla.",
      "Najlepši deo je kada se ljudi vrate po još — i kada znamo da je med pronašao mesto u nečijem domu.",
    ],
    image: honeyMarket,
    imageAlt: "Porodični štand sa medom na otvorenoj pijaci",
    caption: "Svaka tegla nosi deo rada sa pčelinjaka.",
  },
  {
    number: "04",
    eyebrow: "Priča se nastavlja",
    title: "Tradicija koju čuvamo i danas",
    paragraphs: [
      "Danas nastavljamo istim putem: pažljivo prema pčelama, iskreno prema ljudima i zahvalno za sve što nam priroda pruža. Naš cilj nije samo da napravimo med, već da sačuvamo porodičnu tradiciju i ljubav prema ovom poslu.",
      "Ova priča i dalje nastaje — u svakoj sezoni, svakom susretu i svakoj tegli koju delimo sa vama.",
    ],
    image: honeyDisplay,
    imageAlt: "Tegle meda izložene na porodičnom štandu",
    caption: "Porodični trud, pažljivo spakovan u svaku teglu.",
  },
];

export default function StoryPage() {
  return (
    <main className="story-page" id="sadrzaj">
      <header className="story-page__intro reveal">
        <p className="eyebrow eyebrow--dark">Porodična priča od 1957. godine</p>
        <h1>Kako je nastala naša priča</h1>
        <p>
          Od prvih košnica do meda koji danas delimo sa vama — ovo su četiri
          poglavlja našeg porodičnog puta.
        </p>
      </header>
      <div className="story-page__chapters">
        {chapters.map((chapter, index) => (
          <article
            className={`story-chapter reveal${index % 2 ? " story-chapter--reversed" : ""}`}
            key={chapter.number}
          >
            <figure className="story-chapter__photo">
              <img src={chapter.image} alt={chapter.imageAlt} loading="lazy" />
              <figcaption>{chapter.caption}</figcaption>
            </figure>
            <div className="story-chapter__copy">
              <p className="story-chapter__number">{chapter.number} / 04</p>
              <p className="eyebrow eyebrow--dark">{chapter.eyebrow}</p>
              <h2>{chapter.title}</h2>
              {chapter.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="story-page__return reveal">
        <p>Hvala što ste deo naše priče.</p>
        <a className="button button--dark" href="#pocetna">
          Povratak na početnu <span aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  );
}
