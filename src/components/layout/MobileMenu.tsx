import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { navigation } from '../../data/navigation';
import type { NavItem } from '../../data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring' as const, damping: 30, stiffness: 300 },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25, ease: 'easeIn' as const },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
};

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const isActive =
    location.pathname === item.href ||
    (item.href !== '/' && location.pathname.startsWith(item.href));

  return (
    <motion.li variants={itemVariants}>
      <div className="flex items-center justify-between">
        <Link
          to={item.href}
          onClick={onClose}
          className={clsx(
            'text-2xl font-semibold transition-colors duration-200',
            isActive ? 'text-electric' : 'text-white hover:text-electric'
          )}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="p-2 text-text-secondary hover:text-white transition-colors"
            aria-label={expanded ? 'Collapse submenu' : 'Expand submenu'}
          >
            <ChevronDown
              size={20}
              className={clsx(
                'transition-transform duration-200',
                expanded && 'rotate-180'
              )}
            />
          </button>
        )}
      </div>

      <AnimatePresence>
        {hasChildren && expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden ml-4 mt-2 space-y-2 border-l border-white/10 pl-4"
          >
            {item.children!.map((child) => {
              const childActive = location.pathname + location.hash === child.href ||
                location.pathname === child.href;
              return (
                <li key={child.href}>
                  <Link
                    to={child.href}
                    onClick={onClose}
                    className={clsx(
                      'block text-lg transition-colors duration-200',
                      childActive
                        ? 'text-electric'
                        : 'text-text-secondary hover:text-white'
                    )}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy-dark/90 backdrop-blur-xl"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-navy-dark border-l border-white/10 flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-text-secondary hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links */}
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 px-8 space-y-6"
            >
              {navigation.map((item) => (
                <MobileNavItem key={item.href} item={item} onClose={onClose} />
              ))}
            </motion.ul>

            {/* CTA */}
            <div className="p-8 pt-4">
              <Link
                to="/contact"
                onClick={onClose}
                className="block w-full text-center px-6 py-3.5 text-base font-semibold text-white bg-electric hover:bg-electric/90 rounded-lg transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
