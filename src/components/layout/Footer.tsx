import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Services', href: '/services' },
  { label: 'Research', href: '/research' },
];

const serviceLinks = [
  { label: 'Event Support', href: '/services#event-support' },
  { label: 'Meteorological', href: '/services#meteorological' },
  { label: 'Disaster Response', href: '/services#disaster-response' },
  { label: 'DSOC Pro', href: '/services#dsoc-pro' },
];

const socialLinks = [
  {
    label: 'Website',
    href: 'https://www.wku.edu/',
    icon: Globe,
  },
  {
    label: 'Email',
    href: 'mailto:josh.durkee@wku.edu',
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-electric to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About column */}
          <div>
            <Link to="/" className="text-xl font-bold gradient-text">
              WKU DSOC
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              The WKU Disaster Science Operations Center advances weather and
              climate science through operational forecasting, research, and
              community engagement.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-electric hover:border-electric/30 transition-colors duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-secondary hover:text-electric transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-secondary hover:text-electric transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-electric mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-text-secondary leading-relaxed">
                  1906 College Heights Blvd
                  <br />
                  Bowling Green, KY 42101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-electric flex-shrink-0" />
                <a
                  href="tel:+12707455983"
                  className="text-sm text-text-secondary hover:text-electric transition-colors duration-200"
                >
                  (270) 745-5983
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-electric flex-shrink-0" />
                <a
                  href="mailto:josh.durkee@wku.edu"
                  className="text-sm text-text-secondary hover:text-electric transition-colors duration-200"
                >
                  josh.durkee@wku.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            &copy; 2026 WKU Disaster Science Operations Center
          </p>
          <p className="text-xs text-text-secondary italic">
            Working Together to Move Forward
          </p>
        </div>
      </div>
    </footer>
  );
}
