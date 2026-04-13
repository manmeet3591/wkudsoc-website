import { type ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'electric' | 'cyan' | 'amber' | 'danger';
  className?: string;
}

const variantStyles = {
  default: 'bg-white/10 text-white',
  electric: 'bg-wku-red/20 text-wku-red',
  cyan: 'bg-wku-red-light/20 text-wku-red-light',
  amber: 'bg-amber/20 text-amber',
  danger: 'bg-danger/20 text-danger',
};

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
