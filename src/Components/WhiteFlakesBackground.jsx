import React, { useEffect, useRef, useState } from 'react';

const WhiteFlakesBackground = () => {
  const canvasRef = useRef(null);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    // Check for low-end device, slow 3G/2G connection, reduced-motion, or small mobile screen
    const isMobileScreen = typeof window !== 'undefined' && window.innerWidth < 768;
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowNetwork = connection && (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === '3g');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowConcurrency = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;

    if (isMobileScreen || isSlowNetwork || prefersReducedMotion || isLowConcurrency) {
      setIsLowPower(true);
      return; // Use static CSS glow on mobile/3G to preserve 100% CPU and battery
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap DPR to 1.5 to save mobile GPU
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

    // 3 optimized Aurora blobs (reduced from 5 to reduce draw calls and gradient math)
    const blobs = [
      {
        x: 0.2,
        y: 0.3,
        r: 0.55,
        color: [0, 68, 251], // brand blue
        alpha: 0.16,
        vx: 0.00012,
        vy: 0.00008,
        phase: 0,
      },
      {
        x: 0.75,
        y: 0.25,
        r: 0.6,
        color: [110, 231, 183], // soft mint
        alpha: 0.14,
        vx: -0.00009,
        vy: 0.00013,
        phase: 1.8,
      },
      {
        x: 0.5,
        y: 0.7,
        r: 0.5,
        color: [56, 189, 248], // sky blue
        alpha: 0.12,
        vx: 0.0001,
        vy: -0.0001,
        phase: 3.4,
      },
    ];

    const startTime = performance.now();
    let lastRenderTime = 0;
    const targetFpsInterval = 1000 / 30; // Smooth 30 FPS saves 50% CPU cycles

    const render = (now) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const elapsed = now - lastRenderTime;
      if (elapsed < targetFpsInterval) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      lastRenderTime = now - (elapsed % targetFpsInterval);
      const t = (now - startTime) * 0.001;

      // Solid black base
      ctx.fillStyle = '#000000';
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
        grad.addColorStop(0.5, `rgba(${r}, ${g}, ${bl}, ${b.alpha * 0.3})`);
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

    // Pause canvas if tab is hidden (saves background battery & memory)
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth < 768) {
          setIsLowPower(true);
        } else {
          resize();
        }
      }, 200);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // On low power / mobile / 3G: render pure CSS ambient gradient with 0% CPU cost!
  if (isLowPower) {
    return (
      <div
        className="fixed inset-0 pointer-events-none -z-10 bg-black overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-[90px]" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-[90px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[90px]" />
      </div>
    );
  }

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