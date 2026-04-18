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
          {/* Elegant Floral/Lotus Line Art with Draw Animation */}
          <path
            d="M50 85C50 85 45 65 30 55C15 45 10 30 30 25C40 22 45 30 50 40C55 30 60 22 70 25C90 30 85 45 70 55C55 65 50 85 50 85Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw"
          />
          <path
            d="M50 40C50 40 45 20 30 15C15 10 5 25 20 35C30 42 45 42 50 40Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="animate-draw"
            style={{ animationDelay: '0.4s' }}
          />
          <path
            d="M50 40C50 40 55 20 70 15C85 10 95 25 80 35C70 42 55 42 50 40Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="animate-draw"
            style={{ animationDelay: '0.8s' }}
          />
          <path
            d="M50 85L50 65"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="animate-draw"
            style={{ animationDelay: '1.2s' }}
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
