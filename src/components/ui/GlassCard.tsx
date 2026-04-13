import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={clsx(
        'rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10',
        hover && 'transition-all duration-300',
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              borderColor: 'rgba(196, 18, 48, 0.3)',
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
