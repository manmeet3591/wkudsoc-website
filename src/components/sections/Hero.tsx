import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';
import AnimatedBackground from '../ui/AnimatedBackground';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal">
      <AnimatedBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-wku-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-wku-red-light/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div variants={fadeInUp} className="mb-8">
            <img src="/wkudsoc-website/images/dsoc-logo.png" alt="WKU DSOC" className="h-16 lg:h-20 mx-auto" />
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-text-secondary backdrop-blur-sm">
              <Shield className="w-4 h-4 text-wku-red" />
              Western Kentucky University
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Disaster Science{' '}
            <GradientText>Operations Center</GradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Working Together to Move Forward. Kentucky's primary hub for
            innovation in weather intelligence, disaster resilience, research,
            and decision support.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href="/services"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Our Services
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn About DSOC
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px animated-gradient" />
    </section>
  );
}
