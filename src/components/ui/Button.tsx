import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const variantStyles = {
  primary:
    'bg-gradient-to-r from-electric to-blue-600 text-white shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]',
  secondary:
    'bg-transparent border border-white/20 text-white hover:border-electric hover:text-electric',
  ghost: 'bg-transparent text-white hover:bg-white/5',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  href,
  onClick,
  className,
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link to={href} className={classes}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
