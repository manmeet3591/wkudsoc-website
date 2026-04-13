import GlassCard from '../ui/GlassCard';
import type { TeamMember } from '../../data/team';
import { Mail } from 'lucide-react';

interface TeamMemberCardProps {
  member: TeamMember;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <GlassCard className="p-6 text-center">
      {/* Avatar */}
      <div className="flex justify-center">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover mx-auto border-2 border-white/10"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-wku-red to-wku-red-light flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-xl">
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-white mt-4">{member.name}</h3>

      {/* Title */}
      <p className="text-sm text-wku-red">{member.title}</p>

      {/* Role */}
      <p className="text-sm text-text-secondary">{member.role}</p>

      {/* Bio */}
      <p className="text-sm text-text-secondary mt-2 line-clamp-3">
        {member.bio}
      </p>

      {/* Email link */}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-1.5 mt-3 text-text-secondary hover:text-wku-red transition-colors duration-200 text-sm"
        >
          <Mail className="w-4 h-4" />
          {member.email}
        </a>
      )}
    </GlassCard>
  );
}
