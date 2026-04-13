import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/animations';
import SectionHeading from '../ui/SectionHeading';
import BlogPostCard from '../shared/BlogPostCard';
import Button from '../ui/Button';
import { blogPosts } from '../../data/blog';
import { ArrowRight } from 'lucide-react';

export default function FeaturedNews() {
  const featuredPosts = blogPosts.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
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
