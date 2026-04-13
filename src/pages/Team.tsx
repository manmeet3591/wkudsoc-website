import { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import TeamMemberCard from '../components/shared/TeamMemberCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { teamMembers } from '../data/team';

export default function Team() {
  useEffect(() => {
    document.title = 'Our Team - WKU DSOC';
  }, []);

  const administrators = teamMembers.filter((m) => m.category === 'administrator');
  const graduates = teamMembers.filter((m) => m.category === 'graduate');
  const undergraduates = teamMembers.filter((m) => m.category === 'undergraduate');

  return (
    <PageTransition>
      <PageHero
        title="Our Team"
        subtitle="The people behind DSOC's mission"
      />

      {/* Leadership & Administration */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            overline="Leadership"
            title="Leadership & Administration"
            subtitle="The faculty and staff who lead DSOC's operations, research, and strategic direction."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {administrators.map((member) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Graduate Researchers */}
      <section className="py-24 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            overline="Graduate Students"
            title="Graduate Researchers"
            subtitle="Graduate research assistants advancing DSOC's mission through dedicated research and operational support."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {graduates.map((member) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Undergraduate Researchers */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            overline="Undergraduate Students"
            title="Undergraduate Researchers"
            subtitle="Undergraduate assistants gaining hands-on experience in operational meteorology and disaster science."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {undergraduates.map((member) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
