import { motion } from 'framer-motion';
import VideoPlaceholder from '../components/VideoPlaceholder';

const EASE = [0.65, 0, 0.35, 1];

export default function Cierre({ theme }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
      <div className="relative mb-6 flex flex-col items-center py-2">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[9rem] font-bold uppercase leading-none tracking-wide"
          style={{ color: '#0D5257', opacity: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        >
          New adventure
        </motion.span>

        <motion.h2
          className="relative z-10 text-6xl font-bold leading-snug tracking-wide"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          Una nueva aventura comienza
        </motion.h2>
      </div>

      <motion.div
        className="w-full max-w-[1400px]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
      >
        <VideoPlaceholder name="niobo-video-final" size="large" />
      </motion.div>
    </div>
  );
}
