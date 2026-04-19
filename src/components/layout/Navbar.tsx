'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useScroll } from '@/hooks/useScroll';
import { NAV_ITEMS, PHONE, PHONE_RAW } from '@/lib/constants';
import { cn } from '@/lib/helpers';

export default function Navbar() {
  const { scrolled } = useScroll(50);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        animate={scrolled ? 'scrolled' : 'top'}
        variants={{
          top: {
            backgroundColor: 'rgba(255,255,255,0)',
            backdropFilter: 'blur(0px)',
          },
          scrolled: {
            backgroundColor: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
          },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-700 to-primary-900 shadow-soft flex items-center justify-center text-white border border-primary-600/30">
                  <span className="font-heading font-extrabold text-[1.1rem] tracking-wider leading-none ml-0.5" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>SP</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-[1.15rem] font-bold text-primary-800 leading-tight group-hover:text-primary-600 transition-colors">
                  Dr. Suryakanta Parida
                </span>
                <span className="text-[0.62rem] font-semibold tracking-[0.14em] uppercase text-accent-700 leading-tight">
                  Sai Shree Polyclinic
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg',
                      active
                        ? 'text-primary-700'
                        : 'text-charcoal-light hover:text-primary-700 hover:bg-primary-50/60'
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1
                                       rounded-full bg-primary-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary-700 text-white
                           rounded-full text-sm font-semibold font-body
                           transition-all duration-200
                           hover:bg-primary-600 hover:-translate-y-0.5
                           shadow-[0_4px_16px_rgba(3,105,161,0.25)]
                           active:scale-[0.98]"
              >
                <Phone size={14} strokeWidth={2} />
                {PHONE}
              </a>
            </div>

            {/* Mobile toggle — explicit flex centering for pixel-perfect alignment */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg
                         text-charcoal hover:bg-primary-50 transition-colors flex-shrink-0"
              aria-label="Open navigation menu"
            >
              <Menu size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white/98 backdrop-blur-xl flex flex-col"
          >
            <div className="container-max flex justify-between items-center h-16">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-700 to-primary-900 shadow-soft flex items-center justify-center text-white border border-primary-600/30">
                    <span className="font-heading font-extrabold text-[0.85rem] tracking-wider leading-none ml-px" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>SP</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-[1.1rem] font-bold text-primary-800">
                    Dr. Suryakanta Parida
                  </span>
                  <span className="text-[0.62rem] font-semibold tracking-[0.14em] uppercase text-accent-700">
                    Sai Shree Polyclinic
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg
                           text-charcoal hover:bg-primary-50 transition-colors flex-shrink-0"
                aria-label="Close navigation menu"
              >
                <X size={22} strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-2 pb-16">
              {NAV_ITEMS.map((item, i) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'block px-8 py-3 font-heading text-3xl font-semibold transition-colors',
                        active ? 'text-primary-800' : 'text-charcoal hover:text-primary-800'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a
                href={`tel:${PHONE_RAW}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.07 }}
                className="mt-6 flex items-center gap-2 px-7 py-3.5 bg-primary-800 text-white
                           rounded-full text-[0.9375rem] font-semibold font-body"
              >
                <Phone size={16} />
                {PHONE}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
