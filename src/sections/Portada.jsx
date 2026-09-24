import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import { EASE, VIEWPORT } from '../lib/motion';

const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/4xqm4JFIfcM';

export default function Portada({ theme }) {
  return (
    <div className="mx-auto flex w-full flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-20">
      <Logo theme={theme} size="compact" />

      <motion.p
        className="mt-5 text-lg font-light italic tracking-wide sm:mt-6 sm:text-xl"
        style={{ color: theme.subtext }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
      >
        Descubre el ecosistema que nos respalda
      </motion.p>

      <motion.div
        className="mt-8 w-full max-w-3xl sm:mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-sm shadow-lg">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={YOUTUBE_EMBED_URL}
            title="Vídeo de presentación Niobo Health"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </motion.div>
    </div>
  );
}
