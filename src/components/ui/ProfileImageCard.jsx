import { motion } from 'framer-motion'

export default function ProfileImageCard({ src, alt = 'Profile' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="surface-card overflow-hidden p-2 shadow-[0_18px_56px_rgba(0,0,0,0.45)]"
    >
      <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
        <img
          src={src}
          alt={alt}
          className="aspect-square w-full object-cover"
          width={400}
          height={400}
          loading="eager"
        />
      </div>
    </motion.div>
  )
}
