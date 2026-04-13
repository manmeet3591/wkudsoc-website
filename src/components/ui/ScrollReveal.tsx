import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  scaleIn,
} from '../../lib/animations';
import clsx from 'clsx';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
}

const directionVariants: Record<string, Variants> = {
  up: fadeInUp,
  left: slideInLeft,
  right: slideInRight,
  scale: scaleIn,
};

export default function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
}: ScrollRevealProps) {
  const variants = directionVariants[direction];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}
