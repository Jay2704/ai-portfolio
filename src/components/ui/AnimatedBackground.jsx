import { motion } from 'framer-motion'

export default function AnimatedBackground({ variant = 'grid' }) {
  if (variant === 'grid') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        <motion.div
          className="absolute -left-1/2 top-0 h-[500px] w-[800px] rounded-full bg-[var(--color-accent)] opacity-[0.06] blur-[120px]"
          animate={{
            x: [0, 50, 0],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-[100px]"
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-10 bottom-0 h-[360px] w-[360px] rounded-full bg-[var(--color-cyan)] opacity-[0.035] blur-[110px]"
          animate={{ opacity: [0.025, 0.05, 0.025], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    )
  }

  return null
}
