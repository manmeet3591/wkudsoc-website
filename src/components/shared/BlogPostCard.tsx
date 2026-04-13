import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import type { BlogPost } from '../../data/blog';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getCategoryVariant(
  category: string
): 'default' | 'electric' | 'cyan' | 'amber' | 'danger' {
  switch (category) {
    case 'Weather':
      return 'cyan';
    case 'Research':
      return 'electric';
    case 'Events':
      return 'amber';
    case 'Disaster Response':
      return 'danger';
    default:
      return 'default';
  }
}

export default function BlogPostCard({
  post,
  featured = false,
}: BlogPostCardProps) {
  if (featured) {
    return (
      <GlassCard className="p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Featured image placeholder */}
          <div className="lg:w-2/5 flex-shrink-0">
            <div className="w-full h-48 lg:h-full min-h-[200px] rounded-xl bg-gradient-to-br from-electric/20 to-cyan/20 flex items-center justify-center">
              <span className="text-electric/40 text-sm font-medium uppercase tracking-wider">
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant={getCategoryVariant(post.category)}>
                {post.category}
              </Badge>
              <span className="text-sm text-text-secondary">
                {formatDate(post.date)}
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-white hover:text-electric transition-colors duration-200 cursor-pointer">
              {post.title}
            </h2>

            <p className="text-text-secondary mt-3 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-4">
              <span className="text-electric text-sm font-medium cursor-pointer hover:underline">
                Read more &rarr;
              </span>
            </div>
          </div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 h-full flex flex-col">
      {/* Image placeholder */}
      <div className="w-full h-40 rounded-xl bg-gradient-to-br from-electric/10 to-cyan/10 flex items-center justify-center mb-4">
        <span className="text-electric/30 text-xs font-medium uppercase tracking-wider">
          {post.category}
        </span>
      </div>

      {/* Category + Date */}
      <div className="flex items-center gap-3 mb-3">
        <Badge variant={getCategoryVariant(post.category)}>
          {post.category}
        </Badge>
        <span className="text-sm text-text-secondary">
          {formatDate(post.date)}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white hover:text-electric transition-colors duration-200 cursor-pointer">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-text-secondary mt-2 line-clamp-3 flex-grow">
        {post.excerpt}
      </p>

      {/* Read more */}
      <div className="mt-4">
        <span className="text-electric text-sm font-medium cursor-pointer hover:underline">
          Read more &rarr;
        </span>
      </div>
    </GlassCard>
  );
}
