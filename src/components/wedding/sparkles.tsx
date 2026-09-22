import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
};

export function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const particles: Particle[] = [];
    const count = 24;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const reset = (p: Particle) => {
      p.x = Math.random() * canvas.width;
      p.y = canvas.height + Math.random() * 20;
      p.size = Math.random() * 2.5 + 1;
      p.speedY = Math.random() * 0.7 + 0.3;
      p.speedX = (Math.random() - 0.5) * 0.4;
      p.opacity = Math.random() * 0.6 + 0.2;
      p.color = Math.random() > 0.4 ? "#C69234" : "#F4E0C8";
    };

    for (let i = 0; i < count; i++) {
      const p = {} as Particle;
      reset(p);
      p.y = Math.random() * canvas.height;
      particles.push(p);
    }

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y -= p.speedY;
        p.x += p.speedX;
        if (p.y < -10) reset(p);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="celebrationCanvas" ref={canvasRef} aria-hidden="true" />;
}
