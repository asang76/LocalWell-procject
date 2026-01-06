import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

type Props = {
  durationMs?: number; // how long to run
};

export default function ConfettiBurst({ durationMs = 2500 }: Props) {
  const [isRunning, setIsRunning] = useState(true);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const onResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);

    const t = window.setTimeout(() => setIsRunning(false), durationMs);

    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t);
    };
  }, [durationMs]);

  if (!isRunning) return null;

  return (
    <Confetti
      width={size.width}
      height={size.height}
      recycle={false}
      numberOfPieces={450}
      gravity={0.25}
      tweenDuration={durationMs}
    />
  );
}