import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animations';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-charcoal-dark relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-wku-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-wku-red-light/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeInUp}
            className="uppercase text-sm tracking-widest font-semibold text-wku-red mb-4"
          >
            Get Involved
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            Ready to{' '}
            <GradientText>Work Together?</GradientText>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Whether you need event weather support, emergency management
            consulting, or research collaboration, DSOC is ready to help.
            Contact us to learn how we can support your mission.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href="/contact"
              size="lg"
              icon={<Mail className="w-5 h-5" />}
            >
              Contact Us
            </Button>
            <Button
              href="/partners"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Become a Partner
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
