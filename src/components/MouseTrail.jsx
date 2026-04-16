import React, { useEffect, useRef } from 'react';

const MouseTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let mouse = { x: -100, y: -100 };
    const points = [];
    const maxPoints = 50;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.push({ x: mouse.x, y: mouse.y, life: 1 });
      if (points.length > maxPoints) points.shift();

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.life -= 0.02;
        if (p.life <= 0) continue;

        const alpha = p.life * 0.6;
        const radius = p.life * 8;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        gradient.addColorStop(0, `rgba(34, 211, 238, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw connecting lines between recent points
      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          if (points[i].life <= 0) continue;
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.strokeStyle = 'rgba(34, 211, 238, 0.15)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Remove dead points
      while (points.length > 0 && points[0].life <= 0) {
        points.shift();
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
};

export default MouseTrail;
