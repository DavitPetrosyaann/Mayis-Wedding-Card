import { useEffect, useRef, useState } from "react";
import music from "./assets/music.mp3";
import Cover from "./components/Cover.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Location from "./components/Location.jsx";
import Story from "./components/Story.jsx";
import Count from "./components/Count.jsx";
import Calendar from "./components/Calendar.jsx";
import styles from "./App.module.scss";

function App() {
  const audioRef = useRef(null);
  const hasStartedAtPositionRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isOpen && isPlaying) {
      if (!hasStartedAtPositionRef.current) {
        audio.currentTime = 97;
        hasStartedAtPositionRef.current = true;
      }
      audio.play().catch(() => setIsPlaying(false));
      return;
    }

    audio.pause();
  }, [isOpen, isPlaying]);

  const openInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  const toggleAudio = () => {
    setIsPlaying((current) => !current);
  };

  return (
    <div className={styles.app}>
      <audio ref={audioRef} src={music} loop preload="auto" />

      {!isOpen ? (
        <Cover onOpen={openInvitation} />
      ) : (
        <>
          <button
            className={styles.audioToggle}
            type="button"
            onClick={toggleAudio}
            aria-label={
              isPlaying ? "Դադարեցնել երաժշտությունը" : "Միացնել երաժշտությունը"
            }
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <main className={styles.main}>
            <Hero />
            <Story />
            <Count />
            <Calendar />
            <Location />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
