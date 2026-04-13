import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { navigation } from '../../data/navigation';
import type { NavItem } from '../../data/navigation';
import MobileMenu from './MobileMenu';

function DropdownMenu({ items }: { items: NavItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
    >
      <div className="min-w-[220px] rounded-xl bg-charcoal-light/90 backdrop-blur-xl border border-white/10 shadow-2xl p-2">
        {items.map((child) => (
          <Link
            key={child.href}
            to={child.href}
            className="block px-4 py-2.5 text-sm text-text-secondary rounded-lg hover:text-wku-red hover:bg-white/5 transition-colors duration-200"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

function NavLink({ item }: { item: NavItem }) {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const isActive =
    location.pathname === item.href ||
    (item.href !== '/' && location.pathname.startsWith(item.href));

  return (
    <div
      className="relative group"
      onMouseEnter={() => hasChildren && setDropdownOpen(true)}
      onMouseLeave={() => hasChildren && setDropdownOpen(false)}
    >
      <Link
        to={item.href}
        className={clsx(
          'relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-300',
          isActive ? 'text-wku-red' : 'text-text-secondary hover:text-white'
        )}
      >
        {item.label}
        {hasChildren && (
          <ChevronDown
            size={14}
            className={clsx(
              'transition-transform duration-200',
              dropdownOpen && 'rotate-180'
            )}
          />
        )}
        {isActive && (
          <motion.span
            layoutId="navbar-indicator"
            className="absolute -bottom-1 left-3 right-3 h-0.5 bg-wku-red rounded-full"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </Link>

      {hasChildren && dropdownOpen && (
        <DropdownMenu items={item.children!} />
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  const location = useLocation();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300',
          scrolled
            ? 'bg-charcoal/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0"
          >
            <img src="/wkudsoc-website/images/dsoc-logo.png" alt="WKU DSOC - Home" className="h-14 lg:h-16" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-wku-red hover:bg-wku-red/90 rounded-lg transition-colors duration-300 flex-shrink-0"
          >
            Contact Us
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-text-secondary hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
