"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Countdown from "./components/Countdown";
import Link from "next/link";
import Loader from "./components/Loader";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Trigger a single confetti burst when loading finishes
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#6B8E6B', '#fcfbf7', '#d1d9cf'],
        startVelocity: 15,
        gravity: 0.4,
        scalar: 1,
        ticks: 200
      });
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  } as const;

  return (
    <div className="flex justify-center items-center h-screen p-3 md:p-5">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="w-full flex justify-center items-center"
          >
            <main className="bg-cream w-full max-w-[440px] h-[95vh] py-6 px-5 shadow-2xl rounded-lg flex flex-col items-center text-center overflow-hidden border border-sage/10 relative">
              {/* Corner Decorations */}
              <motion.div
                variants={itemVariants}
                className="absolute -top-10 -left-6 w-32 h-32 opacity-30 pointer-events-none"
              >
                <Image
                  src="/image/flower.svg"
                  alt="Pattern"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="absolute -bottom-10 -right-6 w-32 h-32 opacity-30 pointer-events-none rotate-180"
              >
                <Image
                  src="/image/flower.svg"
                  alt="Pattern"
                  width={128}
                  height={128}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* Top Icon */}
              <motion.div variants={itemVariants} className="mb-4 shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#eff3ee] flex justify-center items-center">
                  <Image
                    src="/image/star.svg"
                    alt="Star Icon"
                    width={28}
                    height={28}
                    className="opacity-100"
                  />
                </div>
              </motion.div>

              {/* Intro */}
              <motion.section variants={itemVariants} className="w-full mb-3 shrink-0">
                <p className="text-[9px] tracking-[2px] text-muted font-medium mb-1.5 uppercase">
                  Together with their families
                </p>
                <div className="mb-2.5 relative overflow-hidden group">
                  <div className="relative z-10">
                    <h1 className="font-cigra text-3xl leading-tight font-normal">
                      Aslaha Thasni
                    </h1>
                    <span className="font-cigra text-xl text-sage block">&</span>
                    <h1 className="font-cigra text-3xl leading-tight font-normal">
                      Ameerali
                    </h1>
                  </div>
                  {/* Effects overlay */}
                  <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="absolute inset-0 animate-flash-beam mix-blend-overlay"></div>
                  </div>
                </div>

                <div className="mb-4 w-1/2 mx-auto shrink-0">
                  <Image
                    src="/image/heart_devider.svg"
                    alt="Heart Divider"
                    width={150}
                    height={10}
                    className="w-full h-auto opacity-100"
                  />
                </div>

                <p className="text-[10px] tracking-[2.5px] text-sage font-semibold uppercase mb-3 px-4">
                  Request the honor of your presence
                </p>
              </motion.section>

              {/* Date Box */}
              <motion.section variants={itemVariants} className="flex border border-border rounded-xl w-full mb-3.5 overflow-hidden shrink-0">
                <div className="flex-1 p-2.5 flex flex-col justify-start items-center">
                  <span className="text-sage font-extrabold text-xs tracking-wide">
                    SUNDAY
                  </span>
                  <span className="text-[9px] text-muted font-medium">
                    2026, May
                  </span>
                </div>
                <div className="border-x border-border flex-1 py-1 flex justify-center items-center bg-[#F3F5F2]">
                  <span className="text-3xl font-extrabold text-sage leading-none font-cigra">
                    17
                  </span>
                </div>
                <div className="flex-1 p-2.5 flex flex-col justify-start items-center">
                  <span className="text-[8px] text-muted font-semibold uppercase">
                    Reception At
                  </span>
                  <span className="text-xs font-extrabold text-sage mt-0.5">
                    11:30 AM
                  </span>
                </div>
              </motion.section>

              {/* Hijri Date */}
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3 shrink-0">
                <div className="h-[1px] bg-border w-5" />
                <p className="text-[11px] text-sage font-bold">1 Dhul Hijjah 1447</p>
                <div className="h-[1px] bg-border w-5" />
              </motion.div>

              {/* Location */}
              <motion.section variants={itemVariants} className="mb-4 shrink-0 px-2">
                <h2 className="font-cinzel-local text-lg text-sage tracking-[1.5px] font-extrabold mb-1.5 uppercase">
                  VP Palace Auditorium
                </h2>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-dark font-semibold mb-3">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Parakkad, Koppam, Pattambi</span>
                </div>

                <Link
                  href="https://maps.app.goo.gl/cD6hDBzN7dip4HSb9"
                  target="_blank"
                  className="inline-flex items-center gap-2 border border-sage bg-[#eff3ee] px-5 py-2 rounded-full text-sage font-bold text-[10px] tracking-wider transition-all hover:bg-sage hover:text-white group"
                >
                  <svg className="w-3.5 h-3.5 fill-sage group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  CLICK HERE FOR LOCATION
                </Link>
              </motion.section>

              <motion.div variants={itemVariants} className="w-full h-[1px] bg-gray-200 mb-4 shrink-0" />

              {/* Countdown */}
              <motion.section variants={itemVariants} className="w-full shrink-0 px-2">
                <p className="text-[8px] tracking-[2.5px] text-muted font-semibold mb-2 uppercase text-left">
                  Countdown to Reception
                </p>
                <Countdown />
              </motion.section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
