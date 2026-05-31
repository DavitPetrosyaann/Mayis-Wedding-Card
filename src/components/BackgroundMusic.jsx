import { useEffect, useRef, useState } from 'react';
import styles from './BackgroundMusic.module.scss';

function BackgroundMusic({ enabled, src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canControl, setCanControl] = useState(false);

  const syncPausedState = () => {
    const audio = audioRef.current;

    if (audio instanceof HTMLAudioElement) {
      setIsPlaying(!audio.paused);
    }
  };

  const tryPlay = async () => {
    const audio = audioRef.current;

    if (!(audio instanceof HTMLAudioElement)) {
      setCanControl(false);
      setIsPlaying(false);
      return;
    }

    setCanControl(true);

    try {
      audio.volume = 0.28;
      audio.loop = true;
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!(audio instanceof HTMLAudioElement)) {
      setCanControl(false);
      return;
    }

    if (audio.paused) {
      await tryPlay();
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!(audio instanceof HTMLAudioElement)) {
      setCanControl(false);
      return undefined;
    }

    setCanControl(true);
    audio.volume = 0.28;
    audio.loop = true;
    const handleCanPlay = () => setCanControl(true);
    const handleError = () => {
      setCanControl(false);
      setIsPlaying(false);
    };

    audio.addEventListener('play', syncPausedState);
    audio.addEventListener('pause', syncPausedState);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', syncPausedState);
      audio.removeEventListener('pause', syncPausedState);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (enabled) {
      void tryPlay();
    }
  }, [enabled, src]);

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" aria-hidden="true" />
      {enabled && (
        <button
          className={styles.toggle}
          type="button"
          onClick={toggleAudio}
          disabled={!canControl}
          aria-label={isPlaying ? 'Դադարեցնել երաժշտությունը' : 'Միացնել երաժշտությունը'}
          title={isPlaying ? 'Pause music' : 'Play music'}
        >
          <span className={isPlaying ? styles.pauseIcon : styles.playIcon} aria-hidden="true" />
        </button>
      )}
    </>
  );
}

export default BackgroundMusic;
