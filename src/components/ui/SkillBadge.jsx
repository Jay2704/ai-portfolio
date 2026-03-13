import { motion } from 'framer-motion'

export default function SkillBadge({ label, small = false }) {
  return (
    <motion.span
      whileHover={{ scale: 1.04 }}
      className={`inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] font-medium text-[var(--color-text-muted)] transition-all hover:border-[var(--color-cyan)]/50 hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-text)] hover:shadow-[0_0_18px_rgba(34,211,238,0.12)] ${
        small ? 'px-3 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'
      }`}
    >
      {label}
    </motion.span>
  )
}
