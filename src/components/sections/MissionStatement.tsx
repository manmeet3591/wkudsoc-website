import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { Target, Eye } from 'lucide-react';

export default function MissionStatement() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-charcoal relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wku-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            overline="Our Purpose"
            title="Protecting Communities Through Science"
            subtitle="DSOC integrates cutting-edge meteorological research, AI-driven tools, and hands-on disaster response to safeguard lives and property across Kentucky and beyond."
          />
        </ScrollReveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <ScrollReveal direction="left">
            <GlassCard className="p-8 h-full">
              <div className="w-14 h-14 rounded-xl bg-wku-red/10 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-wku-red" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Our Mission
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
              <div className="w-14 h-14 rounded-xl bg-wku-red-light/10 flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-wku-red-light" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Our Vision
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
  );
}
