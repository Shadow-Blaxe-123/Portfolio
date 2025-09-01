import { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let stars: { x: number; y: number; r: number; s: number }[] = [];
    const comets: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      opacity: number;
    }[] = [];
    let cometTimer = 0;

    const generateStars = () => {
      stars = Array.from({ length: 250 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        s: Math.random() * 0.5,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnComet = () => {
      const edge = Math.random(); // pick spawn edge
      let startX, startY, vx, vy;

      if (edge < 0.5) {
        // Top edge
        startX = Math.random() * canvas.width;
        startY = 0;
        vx = 3 + Math.random() * 3;
        vy = 2 + Math.random() * 3;
      } else {
        // Left edge
        startX = 0;
        startY = Math.random() * canvas.height * 0.5; // upper half looks nicer
        vx = 4 + Math.random() * 4;
        vy = 2 + Math.random() * 3;
      }

      comets.push({
        x: startX,
        y: startY,
        vx,
        vy,
        length: 180 + Math.random() * 80,
        opacity: 1,
      });
    };

    // make sure there are always at least 4 comets alive
    const ensureComets = () => {
      while (comets.length < 2) {
        spawnComet();
      }
    };

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        star.y += star.s;
        if (star.y > canvas.height) star.y = 0;
      });

      // comets
      cometTimer++;
      if (cometTimer > 200) {
        spawnComet();
        cometTimer = 0;
      }

      ensureComets();

      comets.forEach((c, i) => {
        // Tail gradient
        const gradient = ctx.createLinearGradient(
          c.x,
          c.y,
          c.x - c.length,
          c.y - c.length / 2
        );
        gradient.addColorStop(0, `rgba(255,255,255,${c.opacity})`);
        gradient.addColorStop(1, `rgba(255,255,255,0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4; // ✅ thicker trails
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.length, c.y - c.length / 2);
        ctx.stroke();

        // Glowing head
        ctx.beginPath();
        ctx.arc(c.x, c.y, 4, 0, Math.PI * 2); // ✅ slightly larger head
        ctx.fillStyle = `rgba(255,255,255,${c.opacity})`;
        ctx.shadowBlur = 25;
        ctx.shadowColor = "white";
        ctx.fill();

        // Movement
        c.x += c.vx;
        c.y += c.vy;
        c.opacity -= 0.0025; // slower fade

        if (c.x > canvas.width || c.y > canvas.height || c.opacity <= 0) {
          comets.splice(i, 1);
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-95" />;
};

export default StarryBackground;
