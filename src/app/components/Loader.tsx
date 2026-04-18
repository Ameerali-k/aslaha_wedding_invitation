"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#fcfbf7] z-50 flex flex-col items-center justify-center transition-opacity duration-1000">
      <div className="mb-8 relative">
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-sage"
        >
          {/* Enhanced Organic Lotus Line Art */}
          <path
            d="M50 90C50 90 48 70 32 60C16 50 12 35 28 28C40 23 48 30 50 42C52 30 60 23 72 28C88 35 84 50 68 60C52 70 50 90 50 90Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw"
          />
          <path
            d="M50 45C50 45 42 22 28 18C14 14 5 30 18 42C28 50 45 48 50 45Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="animate-draw"
            style={{ animationDelay: '0.4s' }}
          />
          <path
            d="M50 45C50 45 58 22 72 18C86 14 95 30 82 42C72 50 55 48 50 45Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="animate-draw"
            style={{ animationDelay: '0.8s' }}
          />
          <path
            d="M35 65C35 65 20 60 18 45C16 30 30 25 40 35"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="animate-draw"
            style={{ animationDelay: '1.2s' }}
          />
          <path
            d="M65 65C65 65 80 60 82 45C84 30 70 25 60 35"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="animate-draw"
            style={{ animationDelay: '1.6s' }}
          />
        </svg>
      </div>
      
      <p className="text-sage font-medium tracking-widest text-lg mb-8 animate-pulse">
        Loading your invitation...
      </p>
      
      <div className="flex gap-3">
        <div className="w-2.5 h-2.5 bg-sage rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2.5 h-2.5 bg-sage/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2.5 h-2.5 bg-sage/30 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
