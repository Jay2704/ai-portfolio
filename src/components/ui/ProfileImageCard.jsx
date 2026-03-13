import { motion } from 'framer-motion'

export default function ProfileImageCard({ src, alt = 'Profile' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-1.5 shadow-2xl">
        <div
          className="absolute -inset-px rounded-2xl opacity-40"
          style={{
            background: `linear-gradient(135deg, var(--color-accent) 0%, transparent 50%, var(--color-accent) 100%)`,
            filter: 'blur(8px)',
          }}
          aria-hidden
        />
        <div className="relative overflow-hidden rounded-xl bg-[var(--color-bg-elevated)]">
          <img
            src={src}
            alt={alt}
            className="aspect-square w-full object-cover"
            width={400}
            height={400}
            loading="eager"
          />
        </div>
      </div>
    </motion.div>
  )
}
