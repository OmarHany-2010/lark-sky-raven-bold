import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { Music } from "lucide-react";
import { EnvelopeScreen } from "@/components/wedding/envelope-screen";
import { Invitation } from "@/components/wedding/invitation";
import { Sparkles } from "@/components/wedding/sparkles";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const MUSIC_VOLUME = 0.78;

function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeRef = useRef<number | null>(null);
  const [opened, setOpened] = useState(false);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [playing, setPlaying] = useState(false);

  const fadeTo = useCallback((target: number, ms = 700) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRef.current) window.clearInterval(fadeRef.current);
    const start = audio.volume;
    const steps = 16;
    let i = 0;
    fadeRef.current = window.setInterval(() => {
      i += 1;
      const next = start + (target - start) * (i / steps);
      audio.volume = Math.min(1, Math.max(0, next));
      if (i >= steps) {
        audio.volume = target;
        if (fadeRef.current) window.clearInterval(fadeRef.current);
        fadeRef.current = null;
      }
    }, ms / steps);
  }, []);

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;
    try {
      audio.currentTime = audio.currentTime > 1 ? audio.currentTime : 0;
      audio.volume = 0.08;
      await audio.play();
      fadeTo(MUSIC_VOLUME, 900);
      setPlaying(true);
      return true;
    } catch {
      setPlaying(false);
      return false;
    }
  }, [fadeTo]);

  const openEnvelope = useCallback(() => {
    if (opened) return;
    setOpened(true);
    void startMusic();
    window.setTimeout(() => {
      setFading(true);
      window.setTimeout(() => {
        setRevealed(true);
        setHidden(true);
      }, 300);
    }, 1200);
  }, [opened, startMusic]);

  const toggleMusic = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      const audio = audioRef.current;
      if (!audio) return;
      if (playing && !audio.paused) {
        audio.pause();
        setPlaying(false);
        return;
      }
      await startMusic();
    },
    [playing, startMusic],
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => {
      audio.currentTime = 0;
      void audio.play();
    };
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  useEffect(() => {
    return () => {
      if (fadeRef.current) window.clearInterval(fadeRef.current);
    };
  }, []);

  return (
    <main>
      <Sparkles />
      {hidden ? null : (
        <EnvelopeScreen opened={opened} fading={fading} onOpen={openEnvelope} />
      )}

      <button
        type="button"
        className={cn("music-btn", playing && "playing")}
        onClick={toggleMusic}
        title={playing ? "Pause music" : "Play music"}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <Music size={22} />
      </button>

      <audio
        ref={audioRef}
        src="/music/wedding.mp3"
        preload="auto"
        loop
        playsInline
      />

      <Invitation revealed={revealed} />
    </main>
  );
}
