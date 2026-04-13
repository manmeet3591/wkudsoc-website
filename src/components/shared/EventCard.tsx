import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import type { DSOCEvent } from '../../data/events';
import { MapPin } from 'lucide-react';

interface EventCardProps {
  event: DSOCEvent;
}

function formatEventDate(dateStr: string): string {
  if (dateStr.includes(' - ')) {
    const [start, end] = dateStr.split(' - ');
    const startDate = new Date(start);
    const endDate = new Date(end);
    const startFormatted = startDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
    const endFormatted = endDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    return `${startFormatted} - ${endFormatted}`;
  }
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function EventCard({ event }: EventCardProps) {
  const isUpcoming = event.type === 'upcoming';

  return (
    <GlassCard
      className={`p-6 border-l-4 ${
        isUpcoming ? 'border-l-wku-red' : 'border-l-amber'
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Pulse dot for upcoming */}
        {isUpcoming && (
          <div className="mt-1.5 flex-shrink-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wku-red opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-wku-red" />
            </span>
          </div>
        )}

        <div className="flex-grow">
          {/* Date and Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-sm text-text-secondary">
              {formatEventDate(event.date)}
            </span>
            <Badge variant={isUpcoming ? 'cyan' : 'default'}>
              {isUpcoming ? 'Upcoming' : 'Past'}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white">{event.title}</h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 mt-1 text-text-secondary text-sm">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            {event.location}
          </div>

          {/* Description */}
          <p className="text-text-secondary mt-3 text-sm leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
