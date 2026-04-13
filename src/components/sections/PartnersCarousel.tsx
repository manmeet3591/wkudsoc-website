import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import { partners } from '../../data/partners';

export default function PartnersCarousel() {
  const allPartners = partners.map((p) => p.name);
  const row1 = allPartners.slice(0, Math.ceil(allPartners.length / 2));
  const row2 = allPartners.slice(Math.ceil(allPartners.length / 2));

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            overline="Trusted By"
            title="Our Partners & Clients"
            subtitle="From Fortune 500 companies to local emergency management agencies, DSOC is trusted by organizations across the nation."
          />
        </ScrollReveal>
      </div>

      <div className="mt-16 space-y-6 overflow-hidden">
        {/* Row 1 - scroll left */}
        <div className="relative">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...row1, ...row1].map((name, i) => (
              <div
                key={`r1-${i}`}
                className="inline-flex items-center justify-center mx-2 sm:mx-3 lg:mx-4 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scroll right */}
        <div className="relative">
          <div className="flex animate-scroll-right whitespace-nowrap">
            {[...row2, ...row2].map((name, i) => (
              <div
                key={`r2-${i}`}
                className="inline-flex items-center justify-center mx-2 sm:mx-3 lg:mx-4 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
