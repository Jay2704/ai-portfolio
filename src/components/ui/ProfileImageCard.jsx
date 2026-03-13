import { motion } from 'framer-motion'

export default function ProfileImageCard({ src, alt = 'Profile' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ y: -10 }}
        className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
      >
        {/* layered outer glow */}
        <div
          className="absolute -inset-6 rounded-[28px] opacity-80 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 60% 40%, rgba(34,211,238,0.18), transparent 55%)',
          }}
          aria-hidden
        />
        <div
          className="absolute -inset-px rounded-2xl opacity-40"
          style={{
            background: 'linear-gradient(135deg, #3B82F6, #22D3EE)',
            filter: 'blur(10px)',
          }}
          aria-hidden
        />
        <div className="relative overflow-hidden rounded-xl bg-[var(--color-bg-elevated)]">
          {/* premium overlay tint */}
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                'linear-gradient(135deg, rgba(59,130,246,0.16), rgba(34,211,238,0.12))',
            }}
            aria-hidden
          />
          <img
            src={src}
            alt={alt}
            className="aspect-square w-full object-cover"
            width={400}
            height={400}
            loading="eager"
          />
          {/* inner highlight edge */}
          <div
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={{
              boxShadow:
                'inset 0 0 0 1px rgba(229,231,235,0.06), inset 0 -40px 80px rgba(2,6,23,0.55)',
            }}
            aria-hidden
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
