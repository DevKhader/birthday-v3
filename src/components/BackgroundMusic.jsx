"use client";
import { useRef } from "react";

let playMusicFn = null;

export function playMusic() {
  if (playMusicFn) playMusicFn();
}

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  playMusicFn = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.play().catch(() => {
        console.log("Music play blocked, waiting for user interaction");
      });
    }
  };

  return <audio ref={audioRef} src="/audio/happy-birthday.mp3" loop />;
}
