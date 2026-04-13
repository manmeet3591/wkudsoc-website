import { useEffect, useState } from 'react';
import PageTransition from '../components/layout/PageTransition';
import PageHero from '../components/shared/PageHero';
import BlogPostCard from '../components/shared/BlogPostCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/animations';
import type { BlogPost } from '../components/shared/BlogPostCard';
import clsx from 'clsx';

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

export default function Media() {
  useEffect(() => {
    document.title = 'In the News - WKU DSOC';
  }, []);

  const categories = ['All', ...Array.from(new Set(newsArticles.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? newsArticles
      : newsArticles.filter((p) => p.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <PageTransition>
      <PageHero
        title="In the News"
        subtitle="Coverage, press, and media highlights from DSOC operations and research."
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
                  activeCategory === category
                    ? 'bg-wku-red text-white'
                    : 'bg-white/5 text-text-secondary border border-white/10 hover:border-wku-red hover:text-wku-red'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPosts.length > 0 && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-8"
              key={activeCategory}
            >
              {/* Featured Article */}
              <motion.div variants={fadeInUp}>
                <BlogPostCard post={featuredPost} featured />
              </motion.div>

              {/* Remaining Articles Grid */}
              {remainingPosts.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingPosts.map((post) => (
                    <motion.div key={post.slug} variants={fadeInUp}>
                      <BlogPostCard post={post} />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
