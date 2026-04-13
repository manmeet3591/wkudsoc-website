import { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/animations';
import {
  Target,
  Eye,
  School,
  Building2,
  Landmark,
  Shield,
  Briefcase,
  Users,
  Compass,
  Anchor,
  Sparkles,
} from 'lucide-react';

const whoWeServe = [
  {
    icon: School,
    label: 'WKU Campus',
    description: 'Real-time weather intelligence and severe weather alerts for the university community.',
  },
  {
    icon: Building2,
    label: 'Bowling Green Community',
    description: 'Local forecasting, public weather awareness, and disaster preparedness support.',
  },
  {
    icon: Landmark,
    label: 'Commonwealth of Kentucky',
    description: 'Statewide hazard mapping, emergency management consortium, and policy support.',
  },
  {
    icon: Shield,
    label: 'Federal Agencies',
    description: 'Research partnerships and operational collaboration with NOAA, FBI, and other agencies.',
  },
  {
    icon: Briefcase,
    label: 'Industry Partners',
    description: 'Professional meteorological services for businesses, events, and commercial clients.',
  },
  {
    icon: Users,
    label: 'General Public',
    description: 'Weather education, outreach programs, and community resilience initiatives.',
  },
];

const goals = [
  'Deliver real-time, actionable weather intelligence to emergency managers, first responders, and community leaders across south-central Kentucky.',
  'Advance the science of disaster prediction through AI, machine learning, and data-driven research at the DSOC AI Laboratory.',
  'Build and sustain a regional emergency management consortium spanning twelve counties in the Commonwealth of Kentucky.',
  'Provide professional-grade meteorological support for large-scale public events, protecting participants and enabling operational continuity.',
  'Train the next generation of operational meteorologists and disaster scientists through hands-on research and field deployment experience.',
  'Develop and deploy purpose-driven Disaster AI tools that translate research into real-world capabilities for community protection.',
  'Strengthen partnerships with federal agencies, industry leaders, and academic institutions to expand DSOC impact and reach.',
  'Foster public weather awareness and disaster preparedness through educational outreach, training programs, and community engagement.',
];

const standOut = [
  {
    icon: Compass,
    title: 'What Drives Us',
    points: [
      'A commitment to protecting lives and property through better weather intelligence',
      'Belief that cutting-edge research must translate into operational impact',
      'Dedication to training students who become leaders in disaster science',
      'Passion for building resilient communities through partnership and innovation',
    ],
  },
  {
    icon: Anchor,
    title: 'What Anchors Us',
    points: [
      'Deep roots in south-central Kentucky and the WKU community',
      'Over a decade of operational experience in severe weather and disaster response',
      'Strong relationships with local, state, and federal partners',
      'An academic foundation that values rigor, integrity, and public service',
    ],
  },
  {
    icon: Sparkles,
    title: 'What Makes Us Unique',
    points: [
      'One of the only university-based disaster science operations centers in the nation',
      'An integrated AI Laboratory building purpose-driven tools for emergency managers',
      'A proven track record supporting major events from the Chicago Marathon to the Cherry Blossom Festival',
      'A twelve-county emergency management consortium unique to Kentucky',
    ],
  },
];

export default function About() {
  useEffect(() => {
    document.title = 'About DSOC - WKU DSOC';
  }, []);

  return (
    <PageTransition>
      <PageHero
        title="About DSOC"
        subtitle="Kentucky's primary hub for innovation in weather intelligence, disaster resilience, research, and decision support."
      />

      {/* Introduction */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                The WKU Disaster Science and Operations Center (DSOC) was
                founded at Western Kentucky University to bridge the gap between
                academic meteorological research and the real-world demands of
                disaster preparedness and response. What began as a small
                initiative to provide weather support for campus events has grown
                into Kentucky's leading center for weather intelligence, serving
                communities, businesses, and government agencies across the
                Commonwealth and beyond.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Today, DSOC operates at the intersection of science and service.
                Our team of faculty researchers, graduate students, and
                undergraduate assistants delivers operational weather forecasting,
                disaster response support, AI-driven research, and professional
                meteorological consulting. From on-site weather support for the
                Bank of America Chicago Marathon to real-time tornado tracking for
                county emergency managers, DSOC is where academic excellence meets
                operational impact.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-electric pl-6 py-2 my-8">
                <p className="text-xl text-white font-medium italic leading-relaxed">
                  "Working Together to Move Forward — that is more than a slogan.
                  It is the foundation of everything we do at DSOC. Every
                  forecast, every deployment, every research project is driven by
                  a shared commitment to protecting lives and building resilient
                  communities."
                </p>
                <cite className="text-text-secondary text-sm mt-2 block not-italic">
                  — Dr. Josh Durkee, Director, WKU DSOC
                </cite>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              overline="Our Foundation"
              title="Mission & Vision"
            />
          </ScrollReveal>

          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <GlassCard className="p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-electric" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Mission
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  To serve as Kentucky's premier center for weather intelligence
                  and disaster resilience by combining academic research,
                  operational meteorology, and community partnerships. We empower
                  emergency managers, public safety officials, and communities
                  with the knowledge, tools, and real-time support they need to
                  prepare for, respond to, and recover from natural disasters.
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <GlassCard className="p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-cyan" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Vision
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  A future where every community in the Commonwealth of Kentucky
                  and beyond has access to world-class weather intelligence and
                  disaster science. Through innovation in artificial intelligence,
                  collaborative research, and unwavering commitment to public
                  safety, we envision a society where no community faces a
                  disaster unprepared.
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              overline="Our Reach"
              title="Who We Serve"
              subtitle="DSOC delivers weather intelligence and disaster science to a broad spectrum of stakeholders."
            />
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whoWeServe.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} variants={fadeInUp}>
                  <GlassCard className="p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-electric" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.label}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      {item.description}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              overline="Strategic Direction"
              title="Our Goals"
              subtitle="Eight core objectives that guide our research, operations, and community engagement."
            />
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 grid md:grid-cols-2 gap-6"
          >
            {goals.map((goal, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-electric to-cyan flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-text-secondary leading-relaxed">
                      {goal}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Stand Out */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              overline="Our Identity"
              title="What Makes Us Stand Out"
            />
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-16 grid lg:grid-cols-3 gap-8"
          >
            {standOut.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeInUp}>
                  <GlassCard className="p-8 h-full">
                    <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-electric" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {item.title}
                    </h3>
                    <ul className="space-y-3">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
