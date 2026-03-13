import { motion } from 'framer-motion'

export default function SkillBadge({ label, small = false }) {
  return (
    <motion.span
      whileHover={{ scale: 1.04 }}
      className={`inline-flex items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)] ${
        small ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'
      }`}
    >
      {label}
    </motion.span>
  )
}
