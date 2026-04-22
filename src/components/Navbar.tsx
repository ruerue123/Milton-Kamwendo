import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Speaking', href: '/speaking' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Shop', href: '/shop' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
    {/* Scroll progress bar */}
    <div
      className="scroll-progress fixed top-0 left-0 h-[2px] z-[60]"
      style={{ transform: `scaleX(${scrollProgress})` }}
    />
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="group flex items-baseline gap-3">
            <img
              src="/logo-monogram.svg"
              alt=""
              aria-hidden="true"
              className="h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="hidden sm:inline font-serif text-lg tracking-wide text-white/90 group-hover:text-white transition-colors">
              Milton Kamwendo
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 gold-underline ${
                    isActive
                      ? 'text-gold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="text-[13px] font-semibold uppercase tracking-[0.1em] text-primary bg-gold hover:bg-gold-light px-6 py-2.5 transition-colors duration-300"
            >
              Book Milton
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden -mr-2 p-2 text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block py-3 text-sm uppercase tracking-[0.15em] font-medium transition-colors border-b border-white/5 ${
                      isActive
                        ? 'text-gold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-6">
                <Link
                  to="/contact"
                  className="block w-full text-center text-sm font-semibold uppercase tracking-[0.1em] text-primary bg-gold hover:bg-gold-light px-6 py-3.5 transition-colors"
                >
                  Book Milton
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
