import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

function formatPathSegment(segment: string): string {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  const location = useLocation();

  // Build breadcrumb from current pathname
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const breadcrumbLabel =
    pathSegments.length > 0
      ? formatPathSegment(pathSegments[pathSegments.length - 1])
      : 'Home';

  return (
    <section className="relative overflow-hidden">
      {/* Background image or fallback gradient */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-navy-dark/80" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy" />
      )}

      {/* Decorative subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Breadcrumb overline */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-text-secondary">
                <li>
                  <Link
                    to="/"
                    className="hover:text-electric transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-electric font-medium">{breadcrumbLabel}</li>
              </ol>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="mt-4 text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Animated gradient border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px animated-gradient" />
    </section>
  );
}
