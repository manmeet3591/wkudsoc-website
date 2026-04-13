import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';
import clsx from 'clsx';

interface SectionHeadingProps {
  overline: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={clsx(
        align === 'center' && 'text-center',
        align === 'left' && 'text-left'
      )}
    >
      <p className="uppercase text-sm tracking-widest font-semibold text-wku-red mb-4">
        {overline}
      </p>

      <h2
        className={clsx(
          'text-4xl lg:text-5xl font-bold',
          light ? 'text-charcoal' : 'text-white'
        )}
      >
        {title}
      </h2>

      {/* Animated gradient underline */}
      <div
        className={clsx(
          'mt-4 mb-2',
          align === 'center' && 'flex justify-center',
          align === 'left' && 'flex justify-start'
        )}
      >
        <div className="w-[60px] h-[3px] rounded-full bg-gradient-to-r from-wku-red to-wku-red-light" />
      </div>

      {subtitle && (
        <p
          className={clsx(
            'text-lg text-text-secondary max-w-2xl mt-4',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
