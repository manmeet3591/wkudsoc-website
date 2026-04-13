import { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import EventCard from '../components/shared/EventCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { events } from '../data/events';

export default function Events() {
  useEffect(() => {
    document.title = 'Events - WKU DSOC';
  }, []);

  const upcomingEvents = events.filter((e) => e.type === 'upcoming');
  const pastEvents = events.filter((e) => e.type === 'past');

  return (
    <PageTransition>
      <PageHero
        title="Events"
        subtitle="Upcoming deployments, past operations, and DSOC community events."
      />

      {/* Upcoming Events */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            overline="Coming Up"
            title="Upcoming Events"
            subtitle="Events and deployments where DSOC will provide weather intelligence and operational support."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 space-y-6"
          >
            {upcomingEvents.map((event) => (
              <motion.div key={event.title} variants={fadeInUp}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>

          {upcomingEvents.length === 0 && (
            <div className="mt-16 text-center">
              <p className="text-text-secondary text-lg">
                No upcoming events at this time. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            overline="Past Operations"
            title="Past Events"
            subtitle="A record of DSOC's event support and disaster response deployments."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 grid md:grid-cols-2 gap-6"
          >
            {pastEvents.map((event) => (
              <motion.div key={event.title} variants={fadeInUp}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
