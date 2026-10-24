import React from "react";
import apiaryImage from "../assets/honey-process-apiary.jpg";
import harvestImage from "../assets/honey-harvest.jpg";
import filteringImage from "../assets/honey-filtering.jpg";
import jarsImage from "../assets/honey-jars.jpg";

const steps = [
  {
    number: "01",
    eyebrow: "Pčelinjak",
    title: "Sve počinje u košnici",
    paragraphs: [
      "Tokom cvetanja, pčele vredno posećuju cvetove i sakupljaju nektar. U košnici ga predaju drugim pčelama, koje ga obogaćuju prirodnim enzimima i raspoređuju u ćelije saća.",
      "Pčele zatim lepezanjem krila smanjuju količinu vode u nektaru. Kada med sazri, zatvaraju ćelije tankim slojem voska — to je znak pčelaru da je spreman za pažljivo vrcanje.",
    ],
    image: apiaryImage,
    imageAlt: "Košnice raspoređene u zelenom pčelinjaku",
    caption: "Zdrav i miran pčelinjak osnova je dobrog meda.",
  },
  {
    number: "02",
    eyebrow: "Pažljivo vrcanje",
    title: "Zreo med se vadi iz saća",
    paragraphs: [
      "Pčelar bira okvire sa zrelim, poklopljenim medom i pažljivo skida voštane poklopce sa ćelija. Okviri se potom stavljaju u vrcaljku, gde se med iz saća izdvaja centrifugalnom silom.",
      "Saće ostaje sačuvano i može ponovo da se vrati pčelama. Tako se med dobija bez nepotrebnog oštećivanja vrednog pčelinjeg rada.",
    ],
    image: harvestImage,
    imageAlt: "Zlatni med se sliva tokom izdvajanja iz saća",
    caption: "Svaki okvir obrađuje se pažljivo, bez žurbe.",
  },
  {
    number: "03",
    eyebrow: "Prirodna čistoća",
    title: "Med se procedi i odmara",
    paragraphs: [
      "Sveže izvrcan med prolazi kroz blago ceđenje kojim se uklanjaju sitni ostaci voska. Zatim se ostavlja da miruje kako bi mehurići vazduha i eventualne čestice isplivale na površinu.",
      "Med se ne kuva: pažljivo rukovanje pomaže da sačuva svoj prirodni miris, ukus i osobine. Svaka vrsta meda zadržava i karakter biljaka sa kojih su pčele sakupljale nektar.",
    ],
    image: filteringImage,
    imageAlt: "Zlatni med prolazi kroz filter u posudi",
    caption: "Blago ceđenje pomaže da med ostane prirodan.",
  },
  {
    number: "04",
    eyebrow: "Od pčelinjaka do tegle",
    title: "Punjenje i čuvanje meda",
    paragraphs: [
      "Kada se med izbistri i odmori, pažljivo se puni u čiste i suve tegle. Svaka tegla se zatvara kako bi med bio zaštićen od vlage i stranih mirisa.",
      "Čuvan na suvom i tamnom mestu, med je spreman da stigne do vašeg stola. Iza svake kašičice nalaze se rad pčela, pažnja pčelara i mnogo strpljenja.",
    ],
    image: jarsImage,
    imageAlt: "Tegle domaćeg meda spremne za čuvanje",
    caption: "U tegli ostaje sačuvan ukus jedne pčelarske sezone.",
  },
];

export default function HoneyProcessPage() {
  return (
    <main className="process-page" id="sadrzaj">
      <header className="process-page__intro reveal">
        <p className="eyebrow eyebrow--dark">Od cveta do tegle</p>
        <h1>Kako nastaje domaći med</h1>
        <p>
          Med nastaje zahvaljujući zajedničkom radu pčela i pčelara. Pogledajte
          četiri pažljiva koraka njegovog puta od košnice do vašeg stola.
        </p>
      </header>
      <div className="story-page__chapters">
        {steps.map((step, index) => (
          <article
            className={`story-chapter reveal${index % 2 ? " story-chapter--reversed" : ""}`}
            key={step.number}
          >
            <figure className="story-chapter__photo">
              <img src={step.image} alt={step.imageAlt} loading="lazy" />
              <figcaption>{step.caption}</figcaption>
            </figure>
            <div className="story-chapter__copy">
              <p className="story-chapter__number">{step.number} / 04</p>
              <p className="eyebrow eyebrow--dark">{step.eyebrow}</p>
              <h2>{step.title}</h2>
              {step.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="story-page__return reveal">
        <p>Od naših košnica do vašeg stola.</p>
        <a className="button button--dark" href="#pocetna">
          Povratak na početnu <span aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  );
}
