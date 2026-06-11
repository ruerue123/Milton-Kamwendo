import React from 'react';
import {
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  MessageCircleIcon,
} from 'lucide-react';

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/milton-kamwendo-399670b/',
    Icon: LinkedinIcon,
  },
  {
    name: 'Twitter / X',
    href: 'https://x.com/MiltonKamwendo',
    Icon: TwitterIcon,
  },
  {
    name: 'WhatsApp Channel',
    href: 'https://whatsapp.com/channel/0029VbC35xIBvvsct1QZMx0t',
    Icon: MessageCircleIcon,
  },
  {
    name: 'Email',
    href: 'mailto:booking@miltonkamwendo.co.zw',
    Icon: MailIcon,
  },
];

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ name, href, Icon }) => {
        const isExternal = href.startsWith('http');
        return (
          <a
            key={name}
            href={href}
            aria-label={name}
            title={name}
            {...(isExternal
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="w-11 h-11 sm:w-9 sm:h-9 flex items-center justify-center border border-white/10 text-neutral-400 hover:text-gold hover:border-gold/40 transition-colors duration-300"
          >
            <Icon className="w-4 h-4" strokeWidth={1.5} />
          </a>
        );
      })}
    </div>
  );
}
