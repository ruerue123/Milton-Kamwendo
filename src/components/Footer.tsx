import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, TwitterIcon, FacebookIcon, InstagramIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/logo.svg" alt="Milton Kamwendo" className="h-14 w-auto mb-6 opacity-80" />
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Transforming leaders and organizations through thought, strategy,
              and decisive action.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About', to: '/about' },
                { name: 'Speaking', to: '/speaking' },
                { name: 'Consulting', to: '/consulting' },
                { name: 'Shop', to: '/shop' },
                { name: 'Insights', to: '/insights' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-neutral-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Keynote Speaking',
                'Strategy Consulting',
                'Executive Coaching',
                'Workshop Facilitation',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/consulting"
                    className="text-neutral-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="mailto:info@miltonkamwendo.com" className="hover:text-white transition-colors">
                  info@miltonkamwendo.com
                </a>
              </li>
              <li>
                <a href="mailto:booking@miltonkamwendo.com" className="hover:text-white transition-colors">
                  booking@miltonkamwendo.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              {[
                { Icon: LinkedinIcon, label: 'LinkedIn' },
                { Icon: TwitterIcon, label: 'Twitter' },
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: InstagramIcon, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-neutral-600 hover:text-gold transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs tracking-wide">
            &copy; {currentYear} Milton Kamwendo. All rights reserved.
          </p>
          <p className="text-neutral-700 text-xs font-serif italic tracking-wide">
            Acta non Verba
          </p>
        </div>
      </div>
    </footer>
  );
}
