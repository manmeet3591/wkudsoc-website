import { type ReactNode } from 'react';
import clsx from 'clsx';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={clsx(
        'bg-gradient-to-r from-wku-red to-wku-red-light bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
}
