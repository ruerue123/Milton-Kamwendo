import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Client logo belt — a continuously self-scrolling marquee.
 *
 * Drop logo image files into /public/clients/ using the `logo` filename below
 * (PNG or SVG, ideally white/monochrome on transparent background). Until a
 * file exists, the client name renders as text so the belt works immediately
 * and upgrades automatically as logos are added.
 *
 * The track renders the list twice and animates from 0 to -50%, so the second
 * copy lands exactly where the first began — giving a seamless infinite loop.
 */
type Client = { name: string; logo: string };

const clients: Client[] = [
  { name: 'FAO', logo: '/clients/fao.svg' },
  { name: 'UNDP', logo: '/clients/undp.svg' },
  { name: 'UNICEF', logo: '/clients/unicef.svg' },
  { name: 'UN Women', logo: '/clients/un-women.svg' },
  { name: 'WFP', logo: '/clients/wfp.svg' },
  { name: 'Seed Co', logo: '/clients/seed-co.svg' },
  { name: 'ZHL Group', logo: '/clients/zhl.svg' },
  { name: 'ART Corporation', logo: '/clients/art.svg' },
  { name: 'TSL Limited', logo: '/clients/tsl.svg' },
  { name: 'AFC Holdings', logo: '/clients/afc.svg' },
  { name: 'Zamtel', logo: '/clients/zamtel.svg' },
  { name: 'Old Mutual', logo: '/clients/old-mutual.svg' },
  { name: 'Econet Wireless', logo: '/clients/econet.svg' },
  { name: 'Delta Corporation', logo: '/clients/delta.svg' },
  { name: 'Stanbic Bank', logo: '/clients/stanbic.svg' },
  { name: 'CBZ Bank', logo: '/clients/cbz.svg' },
];

function ClientLogo({ client }: { client: Client }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="flex items-center justify-center shrink-0 h-16 md:h-20 px-8 md:px-12"
      title={client.name}
    >
      {imgFailed ? (
        <span className="text-neutral-500 text-base md:text-lg font-bold tracking-wide whitespace-nowrap">
          {client.name}
        </span>
      ) : (
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className="max-h-9 md:max-h-11 w-auto object-contain opacity-50 grayscale brightness-200 hover:opacity-90 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
        />
      )}
    </div>
  );
}

export function LogoStrip() {
  // Two copies of the list back-to-back create the seamless loop.
  const track = [...clients, ...clients];

  return (
    <section className="py-14 md:py-20 bg-primary border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-600 text-center mb-3"
        >
          Trusted By Leading Organisations
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-500 text-center text-sm mb-12 max-w-2xl mx-auto"
        >
          A selection of the 500+ clients Milton has served across the private
          sector, the United Nations system, and civil society.
        </motion.p>
      </div>

      {/* Full-bleed scrolling belt with edge fades */}
      <div
        className="group relative w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div
          className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-full"
          aria-label="Clients Milton has worked with"
        >
          {track.map((client, i) => (
            <ClientLogo key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
