import { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import ContactForm from '../components/shared/ContactForm';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { Mail, Phone, MapPin } from 'lucide-react';

const contacts = [
  {
    name: 'Dr. Josh Durkee',
    title: 'Director, WKU DSOC',
    email: 'josh.durkee@wku.edu',
    phone: '(270) 745-5983',
  },
  {
    name: 'Dr. David Oliver',
    title: 'Co-Director, WKU DSOC',
    email: 'david.oliver@wku.edu',
    phone: '(270) 745-2014',
  },
];

const locations = [
  {
    name: 'Environmental Science & Technology Building',
    address: '1906 College Heights Blvd, Bowling Green, KY 42101',
  },
  {
    name: 'DSOC Operations Center',
    address: 'EST 231, WKU Main Campus, Bowling Green, KY 42101',
  },
  {
    name: 'DSOC AI Laboratory',
    address: 'EST 237, WKU Main Campus, Bowling Green, KY 42101',
  },
  {
    name: 'Environmental Health & Safety',
    address: 'EST 130, WKU Main Campus, Bowling Green, KY 42101',
  },
  {
    name: 'WKU Mesonet Observation Site',
    address: 'Agricultural Research Farm, Bowling Green, KY 42101',
  },
];

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - WKU DSOC';
  }, []);

  return (
    <PageTransition>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the WKU DSOC team for partnerships, event support, research collaboration, or general inquiries."
      />

      {/* Contact Form + Info */}
      <section className="py-12 sm:py-16 lg:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:w-7/12">
              <ScrollReveal>
                <GlassCard className="p-8">
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Send Us a Message
                  </h2>
                  <ContactForm />
                </GlassCard>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:w-5/12 space-y-6">
              <ScrollReveal direction="right">
                <div className="space-y-6">
                  {contacts.map((contact) => (
                    <GlassCard key={contact.name} className="p-6">
                      <h3 className="text-lg font-semibold text-white">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-wku-red">{contact.title}</p>
                      <div className="mt-3 space-y-2">
                        <a
                          href={`mailto:${contact.email}`}
                          className="flex items-center gap-2 text-sm text-text-secondary hover:text-wku-red transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          {contact.email}
                        </a>
                        <a
                          href={`tel:${contact.phone}`}
                          className="flex items-center gap-2 text-sm text-text-secondary hover:text-wku-red transition-colors duration-200"
                        >
                          <Phone className="w-4 h-4 flex-shrink-0" />
                          {contact.phone}
                        </a>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 sm:py-16 lg:py-24 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeading
              overline="Our Facilities"
              title="Locations"
              subtitle="DSOC operates from multiple facilities on the WKU campus and across the region."
            />
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {locations.map((location) => (
              <motion.div key={location.name} variants={fadeInUp}>
                <GlassCard className="p-5 h-full">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-wku-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {location.name}
                      </h3>
                      <p className="text-xs text-text-secondary mt-1">
                        {location.address}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
