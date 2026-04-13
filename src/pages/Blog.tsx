import { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import PageHero from '../components/shared/PageHero';
import BlogPostCard from '../components/shared/BlogPostCard';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { blogPosts } from '../data/blog';

const sidebarCategories = ['Weather', 'Research', 'Events', 'Community'];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog - WKU DSOC';
  }, []);

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const recentPosts = sortedPosts.slice(0, 3);

  return (
    <PageTransition>
      <PageHero
        title="Blog"
        subtitle="Insights, updates, and stories from the WKU DSOC team."
      />

      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Column */}
            <div className="lg:w-2/3">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="space-y-8"
              >
                {sortedPosts.map((post) => (
                  <motion.div key={post.slug} variants={fadeInUp}>
                    <BlogPostCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Categories */}
              <ScrollReveal>
                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {sidebarCategories.map((category) => {
                      const count = blogPosts.filter(
                        (p) => p.category === category
                      ).length;
                      return (
                        <li key={category}>
                          <span className="flex items-center justify-between text-text-secondary hover:text-electric transition-colors duration-200 cursor-pointer py-1">
                            <span className="text-sm">{category}</span>
                            <span className="text-xs bg-white/5 rounded-full px-2 py-0.5">
                              {count}
                            </span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </GlassCard>
              </ScrollReveal>

              {/* Recent Posts */}
              <ScrollReveal>
                <GlassCard className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Recent Posts
                  </h3>
                  <ul className="space-y-4">
                    {recentPosts.map((post) => (
                      <li key={post.slug}>
                        <span className="block cursor-pointer group">
                          <p className="text-sm text-white group-hover:text-electric transition-colors duration-200 font-medium leading-snug">
                            {post.title}
                          </p>
                          <p className="text-xs text-text-secondary mt-1">
                            {formatDate(post.date)}
                          </p>
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
