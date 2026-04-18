"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const targetDate = new Date("May 17, 2026 11:30:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsFinished(true);
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        mins: String(m).padStart(2, "0"),
        secs: String(s).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isFinished) {
    return (
      <p className="text-sage font-bold text-lg mt-4 animate-bounce uppercase tracking-widest px-4 py-2 border border-sage/20 rounded-full">
        Happy Wedding Day!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 w-full max-w-sm mx-auto justify-center">
      <TimerUnit value={timeLeft.days} label="DAYS" />
      <TimerUnit value={timeLeft.hours} label="HOURS" />
      <TimerUnit value={timeLeft.mins} label="MINS" />
      <TimerUnit value={timeLeft.secs} label="SECS" />
    </div>
  );
}

function TimerUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#f0f0f0]/30 w-full py-2.5 rounded-lg text-[18px] font-normal font-cigra shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border border-gray-100 flex justify-center items-center">
        {value}
      </div>
      <span className="text-[8px] tracking-[2px] font-extrabold text-dark mt-2">
        {label}
      </span>
    </div>
  );
}
