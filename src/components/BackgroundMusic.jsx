"use client";
import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4; // adjust volume here
      audio.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction.");
      });
    }
  }, []);

  return (
    <audio ref={audioRef} src="/audio/happy-birthday.mp3" loop />
  );
}
