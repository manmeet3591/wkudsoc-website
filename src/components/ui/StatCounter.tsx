import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({
  value,
  suffix = '',
  label,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // ms
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl lg:text-4xl font-bold font-mono gradient-text">
        {displayValue}
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="text-text-secondary text-sm mt-2">{label}</p>
    </div>
  );
}
