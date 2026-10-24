import React from "react";
import familyImage from "../assets/family-apiary.jpg";
import beekeeperImage from "../assets/beekeeper-hive.jpg";
import honeyBeesImage from "../assets/honey-and-bees.jpg";

const stories = [
  {
    category: "Porodična tradicija",
    title: "Četiri generacije uz košnice",
    description: "Od 1957. godine, porodična priča raste zajedno sa ljubavlju prema pčelama.",
    link: "#nasa-prica",
    linkLabel: "Upoznajte porodicu",
    image: familyImage,
    imageAlt: "Porodica okupljena na pčelinjaku",
  },
  {
    category: "Put meda",
    title: "Od cveta do zlatne kapi",
    description: "Upoznajte prirodan put nektara i ulogu pčela u nastanku meda.",
    link: "#proces-meda",
    linkLabel: "Pogledajte korake",
    image: beekeeperImage,
    imageAlt: "Pčelar pregleda okvir sa saćem",
  },
  {
    category: "Život pčela",
    title: "Mali čuvari prirode",
    description: "Zašto je svaki cvet važan i kako pčele povezuju naš ekosistem.",
    link: "#pcele",
    linkLabel: "Saznajte više",
    image: honeyBeesImage,
    imageAlt: "Pčele na tegli prirodnog meda",
  },
];

function StoryCard({ story }) {
  return (
    <article className="story-card reveal">
      <a className="story-card__image" href={story.link} aria-label={story.title}>
        <img src={story.image} alt={story.imageAlt} loading="lazy" />
      </a>
      <p className="story-card__category">{story.category}</p>
      <h3><a href={story.link}>{story.title}</a></h3>
      <p>{story.description}</p>
      <a className="text-link" href={story.link}>
        {story.linkLabel} <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default function StoriesSection() {
  return (
    <section className="stories" id="price" aria-labelledby="price-naslov">
      <div className="section-wrap">
        <div className="stories__heading reveal">
          <div>
            <p className="eyebrow eyebrow--dark">Zabeleženo na pčelinjaku</p>
            <h2 id="price-naslov">Priče koje mirišu na med.</h2>
          </div>
          <p>Porodični trenuci, život pčela i male lekcije koje nas priroda uči svakog dana.</p>
        </div>
        <div className="story-grid">
          {stories.map((story) => <StoryCard key={story.title} story={story} />)}
        </div>
      </div>
    </section>
  );
}
