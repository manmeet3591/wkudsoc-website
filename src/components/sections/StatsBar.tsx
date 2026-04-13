import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import StatCounter from '../ui/StatCounter';
import { stats } from '../../data/stats';

export default function StatsBar() {
  return (
    <section className="relative py-16 bg-navy-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
