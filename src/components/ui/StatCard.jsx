import { motion } from 'framer-motion'

export default function StatCard({ value, label, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -2 }}
      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 px-6 py-5 text-center backdrop-blur-sm transition-colors hover:border-[var(--color-accent)]/30"
    >
      <p className="text-2xl font-semibold text-[var(--color-accent)] md:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">{label}</p>
    </motion.div>
  )
}
