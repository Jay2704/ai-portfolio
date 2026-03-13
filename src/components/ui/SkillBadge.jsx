import { motion } from 'framer-motion'

export default function SkillBadge({ label, small = false }) {
  return (
    <motion.span
      whileHover={{ scale: 1.03 }}
      className={`inline-flex items-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] font-medium text-[var(--color-text-muted)] ${
        small ? 'px-2 py-0.5 text-xs' : 'px-3 py-1.5 text-sm'
      }`}
    >
      {label}
    </motion.span>
  )
}
