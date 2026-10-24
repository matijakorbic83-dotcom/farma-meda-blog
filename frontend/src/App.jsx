import React, { useEffect, useState } from "react";
import ClosingNote from "./components/ClosingNote.jsx";
import FamilySection from "./components/FamilySection.jsx";
import FeaturedSection from "./components/FeaturedSection.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HoneyProcess from "./components/HoneyProcess.jsx";
import HoneyProcessPage from "./components/HoneyProcessPage.jsx";
import IntroScreen from "./components/IntroScreen.jsx";
import StoryPage from "./components/StoryPage.jsx";
import StoriesSection from "./components/StoriesSection.jsx";

const pageByHash = {
  "#nasa-prica": "story",
  "#proces-meda": "process",
};

export default function App() {
  const [activePage, setActivePage] = useState(
    () => pageByHash[window.location.hash] ?? "home"
  );
  const [showIntro, setShowIntro] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const finishIntro = () => setShowIntro(false);

  useEffect(() => {
    const syncPageWithHash = () => {
      const page = pageByHash[window.location.hash] ?? "home";
      setActivePage(page);
      window.requestAnimationFrame(() => {
        if (page !== "home") {
          window.scrollTo(0, 0);
          return;
        }

        const sectionId = window.location.hash.slice(1);
        if (sectionId) {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
      });
    };

    window.addEventListener("hashchange", syncPageWithHash);
    if (activePage !== "home") window.scrollTo(0, 0);
    return () => window.removeEventListener("hashchange", syncPageWithHash);
  }, []);

  useEffect(() => {
    const titles = {
      home: "Priče iz košnice — Farma meda",
      story: "Naša priča — Farma meda",
      process: "Kako nastaje med — Farma meda",
    };
    document.title = titles[activePage];
  }, [activePage]);

  useEffect(() => {
    if (!showIntro) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showIntro]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    document.documentElement.classList.add("has-motion");
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("has-motion");
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -35px 0px" }
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-motion");
    };
  }, [activePage]);

  return (
    <>
      <div className={`site-shell${showIntro ? " site-shell--waiting" : ""}`}>
        <Header />
        {activePage === "story" ? (
          <StoryPage />
        ) : activePage === "process" ? (
          <HoneyProcessPage />
        ) : (
          <main id="sadrzaj">
            <Hero />
            <FamilySection />
            <HoneyProcess />
            <FeaturedSection />
            <StoriesSection />
            <ClosingNote />
          </main>
        )}
        <Footer />
      </div>
      {showIntro && <IntroScreen onFinish={finishIntro} />}
    </>
  );
}
