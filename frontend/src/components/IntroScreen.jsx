import React, { useEffect, useRef, useState } from "react";
import introVideo from "../assets/intro.mp4";
import posterImage from "../assets/beekeeper-hive.jpg";

export default function IntroScreen({ onFinish }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const finishTimerRef = useRef(null);
  const isFinishingRef = useRef(false);
  const [isMuted, setIsMuted] = useState(true);
  const [canPlay, setCanPlay] = useState(false);
  const [playFailed, setPlayFailed] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = true;
    const playAttempt = video.play();
    if (playAttempt) {
      playAttempt
        .then(() => setCanPlay(true))
        .catch(() => setCanPlay(false));
    }

    return () => {
      video.pause();
      window.clearTimeout(finishTimerRef.current);
    };
  }, []);

  const finishIntro = () => {
    if (isFinishingRef.current) return;
    isFinishingRef.current = true;
    videoRef.current?.pause();
    setIsLeaving(true);
    finishTimerRef.current = window.setTimeout(onFinish, 650);
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const startVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setCanPlay(true);
      setPlayFailed(false);
    } catch {
      setPlayFailed(true);
    }
  };

  return (
    <section
      className={`intro-screen${isLeaving ? " intro-screen--leaving" : ""}`}
      aria-label="Uvodni video"
      aria-describedby="intro-title"
    >
      <video
        ref={videoRef}
        className="intro-screen__video"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={posterImage}
        onEnded={finishIntro}
        onError={finishIntro}
        onPlaying={() => setCanPlay(true)}
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          if (progressRef.current && video.duration) {
            progressRef.current.style.transform = `scaleX(${video.currentTime / video.duration})`;
          }
        }}
      >
        <source src={introVideo} type="video/mp4" />
      </video>
      <div className="intro-screen__shade" />
      <a className="intro-screen__brand" href="#pocetna" aria-label="Farma meda">
        FARMA MEDA <span aria-hidden="true">·</span> OD 1957.
      </a>
      <div className="intro-screen__message">
        <p className="intro-screen__eyebrow">Dobro došli na naš pčelinjak</p>
        <h1 id="intro-title">Priče iz košnice</h1>
        <p>Porodica. Pčele. Med.</p>
      </div>
      <div className="intro-screen__controls">
        {canPlay ? (
          <button
            className="intro-screen__button intro-screen__sound"
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Uključi zvuk" : "Isključi zvuk"}
          >
            {isMuted ? "Uključi zvuk" : "Isključi zvuk"}
          </button>
        ) : (
          <button className="intro-screen__button intro-screen__sound" type="button" onClick={startVideo}>
            Pokreni video
          </button>
        )}
        <button
          className="intro-screen__button intro-screen__skip"
          type="button"
          onClick={finishIntro}
        >
          {canPlay ? "Preskoči uvod" : "Uđi na sajt"} <span aria-hidden="true">→</span>
        </button>
      </div>
      {playFailed && (
        <p className="intro-screen__error" role="status">
          Video nije mogao da se pokrene. Možete odmah ući na sajt.
        </p>
      )}
      <div className="intro-screen__progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
    </section>
  );
}
