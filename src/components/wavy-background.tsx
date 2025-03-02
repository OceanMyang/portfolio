/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || (window.innerWidth < 768 ? 2 : 3); // Adjust line width for mobile
      ctx.strokeStyle = waveColors[i % waveColors.length];
      ctx.fillStyle = "rgba(0, 31, 63, 0.8)"; // Dark blue fill color with some transparency

      // Adjust step size based on screen width for better performance on mobile
      const stepSize = window.innerWidth < 768 ? 10 : 5;

      for (x = 0; x <= w; x += stepSize) {
        // Adjust amplitude based on screen width
        const amplitude = window.innerWidth < 768 ? 70 : 100;
        const y = noise(x / 800, 0.3 * i, nt) * amplitude;
        ctx.lineTo(x, y + h * 0.38196601125); // 0.38196601125 is the golden ratio
      }

      // Close the wave path and fill the area below the wave
      ctx.lineTo(w, h); // Extend to the bottom-right corner
      ctx.lineTo(0, h); // Extend to the bottom-left corner
      ctx.closePath();

      ctx.fill(); // Fill the area below the wave
      ctx.stroke(); // Draw the wave stroke
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(window.innerWidth < 768 ? 3 : 5); // Reduce number of waves on mobile
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  });

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden",
        containerClassName
      )}
    >
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
      <canvas
        className="absolute inset-0 z-0 animate-waterRise"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
    </div>
  );
};
