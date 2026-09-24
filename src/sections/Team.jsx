import { motion } from 'framer-motion';
import TeamAvatar from '../components/TeamAvatar';
import { TEAM } from '../data/team';
import { getLogoIcon } from '../lib/assets';
import { EASE, VIEWPORT } from '../lib/motion';

export default function Team({ theme }) {
  const icon = getLogoIcon(theme.mode);
  const slots = [...TEAM, { closing: true }];

  return (
    <div className="w-full max-w-[1700px] px-6 py-16 sm:px-10 sm:py-24">
      <div className="relative mb-10 flex flex-col items-center py-2 sm:mb-14">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(2.4rem,_6vw,_9rem)] font-bold uppercase leading-none tracking-wide text-white"
          style={{ opacity: 0.12 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.12 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          Our team
        </motion.span>

        <motion.h2
          className="relative z-10 text-4xl font-bold leading-snug tracking-wide sm:text-5xl md:text-6xl"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          Nuestro equipo
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-5">
        {slots.map((m, i) => (
          <motion.div
            key={m.closing ? 'closing' : m.name}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.04, ease: EASE }}
          >
            {m.closing ? (
              <div className="flex flex-col items-center justify-center">
                {icon && (
                  <img
                    src={icon}
                    alt=""
                    className="h-[84px] w-[84px] object-contain"
                    style={{ opacity: 0.85 }}
                  />
                )}
                <p className="mt-3 max-w-[170px] text-xs leading-relaxed sm:text-sm">
                  <span className="font-bold" style={{ color: theme.text }}>
                    +150 profesionales más
                  </span>{' '}
                  <span className="font-normal" style={{ color: theme.subtext }}>
                    hacen posible este ecosistema, cada día, en cada clínica.
                  </span>
                </p>
              </div>
            ) : (
              <>
                <TeamAvatar name={m.name} size={84} />
                <span
                  className="mt-3 text-xs font-medium tracking-wide sm:text-sm"
                  style={{ color: theme.text }}
                >
                  {m.name}
                </span>
                <span className="mt-1 text-[11px] font-light sm:text-xs" style={{ color: theme.subtext }}>
                  {m.role}
                </span>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
