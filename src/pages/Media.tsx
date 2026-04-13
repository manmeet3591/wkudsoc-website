import { useEffect, useState } from 'react';
import PageTransition from '../components/layout/PageTransition';
import PageHero from '../components/shared/PageHero';
import BlogPostCard from '../components/shared/BlogPostCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { blogPosts } from '../data/blog';
import clsx from 'clsx';

export default function Media() {
  useEffect(() => {
    document.title = 'In the News - WKU DSOC';
  }, []);

  const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <PageTransition>
      <PageHero
        title="In the News"
        subtitle="Coverage, press, and media highlights from DSOC operations and research."
      />

      <section className="py-24 bg-navy">
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
                    ? 'bg-electric text-white'
                    : 'bg-white/5 text-text-secondary border border-white/10 hover:border-electric hover:text-electric'
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
