import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import SectionHeading from '../ui/SectionHeading';
import BlogPostCard from '../shared/BlogPostCard';
import Button from '../ui/Button';
import type { BlogPost } from '../shared/BlogPostCard';
import { ArrowRight } from 'lucide-react';

const newsArticles: BlogPost[] = [
  {
    title: 'DSOC Team Presents at AMS Conference in Houston',
    date: '2026-01-15',
    excerpt:
      'WKU DSOC researchers presented three papers at the 2026 American Meteorological Society Annual Meeting in Houston, showcasing our latest work in AI-driven severe weather prediction, operational event meteorology, and community resilience planning. Dr. Singh\'s keynote session on Disaster AI drew significant attention from industry professionals.',
    category: 'News',
    slug: 'dsoc-team-presents-ams-conference-houston-2026',
    featured: true,
  },
  {
    title: 'Spring Severe Weather Outlook 2026',
    date: '2026-03-01',
    excerpt:
      'As spring approaches, the DSOC meteorological team breaks down what south-central Kentucky and the broader region can expect for the 2026 severe weather season. With La Nina conditions weakening, our analysis points to a near-normal tornado season but elevated flash flood risk through May. Here is what you need to know to stay prepared.',
    category: 'Weather',
    slug: 'spring-severe-weather-outlook-2026',
    featured: true,
  },
  {
    title: 'AI-Powered Flood Tracking Tool Launch',
    date: '2025-11-10',
    excerpt:
      'The DSOC AI Laboratory is proud to announce the launch of our Flash Flood Warning and Rainfall Tracker, a real-time monitoring tool that integrates machine learning models with NOAA rainfall data to provide county-level flood risk assessments across Kentucky. The tool is now available to our consortium emergency management partners.',
    category: 'Research',
    slug: 'ai-powered-flood-tracking-tool-launch',
    featured: true,
  },
  {
    title: 'DSOC Deploys to Cherry Blossom Festival',
    date: '2025-04-02',
    excerpt:
      'For the fourth consecutive year, DSOC deployed a team to Washington, D.C. to provide weather support for the National Cherry Blossom Festival. Our meteorologists delivered daily forecast briefings, peak bloom predictions, and severe weather monitoring throughout the multi-week event, helping organizers navigate a particularly rainy stretch in early April.',
    category: 'Events',
    slug: 'dsoc-deploys-cherry-blossom-festival-2025',
  },
];

export default function FeaturedNews() {
  const featuredPosts = newsArticles.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-charcoal-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-wku-red-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          overline="Latest Updates"
          title="In the News"
          subtitle="Stay informed about DSOC's latest operations, research breakthroughs, and community impact."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 space-y-8"
        >
          {/* First post as featured */}
          <motion.div variants={fadeInUp}>
            <BlogPostCard post={featuredPosts[0]} featured />
          </motion.div>

          {/* Remaining as regular cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.slice(1).map((post) => (
              <motion.div key={post.slug} variants={fadeInUp}>
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            href="/media"
            variant="secondary"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
