import { useMemo } from 'react';

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

function generateParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      size: 2 + Math.random() * 2, // 2-4px
      x: Math.random() * 100, // % position
      y: Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.2, // 0.1-0.3
      duration: 15 + Math.random() * 15, // 15-30s
      delay: Math.random() * -30, // stagger start
      color: Math.random() > 0.5 ? 'rgba(255,255,255,0.1)' : 'rgba(196,18,48,0.2)',
    });
  }
  return particles;
}

export default function AnimatedBackground() {
  const particles = useMemo(() => generateParticles(18), []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-40px) translateX(5px);
          }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            backgroundColor: p.color,
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
