import React, { useEffect, useRef } from 'react';

const WhiteFlakesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth || 1440;
      height = window.innerHeight || 900;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();

    // Aurora blobs — soft radial gradients that drift slowly
    const blobs = [
      {
        x: 0.2,
        y: 0.3,
        r: 0.55,
        color: [0, 68, 251],       // brand blue
        alpha: 0.16,
        vx: 0.00012,
        vy: 0.00008,
        phase: 0,
      },
      {
        x: 0.75,
        y: 0.25,
        r: 0.6,
        color: [110, 231, 183],    // soft mint
        alpha: 0.14,
        vx: -0.00009,
        vy: 0.00013,
        phase: 1.8,
      },
      {
        x: 0.5,
        y: 0.7,
        r: 0.5,
        color: [56, 189, 248],     // sky blue
        alpha: 0.12,
        vx: 0.0001,
        vy: -0.0001,
        phase: 3.4,
      },
      {
        x: 0.85,
        y: 0.75,
        r: 0.45,
        color: [255, 255, 255],    // soft white
        alpha: 0.08,
        vx: -0.00007,
        vy: -0.00006,
        phase: 5.1,
      },
      {
        x: 0.1,
        y: 0.8,
        r: 0.5,
        color: [0, 68, 251],       // brand blue, offset
        alpha: 0.10,
        vx: 0.00008,
        vy: 0.00009,
        phase: 2.2,
      },
    ];

    const startTime = performance.now();

    const render = (now) => {
      const t = (now - startTime) * 0.001;

      // Solid black base
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      // Additive blending for aurora glow
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < blobs.length; i++) {
        const b = blobs[i];

        const cx =
          (b.x + Math.sin(t * b.vx * 1000 + b.phase) * 0.06) * width;
        const cy =
          (b.y + Math.cos(t * b.vy * 1000 + b.phase) * 0.06) * height;

        const pulse = 1 + Math.sin(t * 0.35 + b.phase) * 0.08;
        const radius = b.r * Math.max(width, height) * pulse;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        const [r, g, bl] = b.color;
        grad.addColorStop(0, `rgba(${r}, ${g}, ${bl}, ${b.alpha})`);
        grad.addColorStop(0.4, `rgba(${r}, ${g}, ${bl}, ${b.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(${r}, ${g}, ${bl}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        opacity: 0.95,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
};

export default WhiteFlakesBackground;