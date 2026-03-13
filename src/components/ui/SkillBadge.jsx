import { motion } from 'framer-motion'

export default function SkillBadge({ label, small = false, tone }) {
  const borderClass = tone?.border ?? 'border-[var(--color-border)]'
  const bgClass = tone?.bg ?? 'bg-[var(--color-bg-elevated)]'
  const textClass = tone?.text ?? 'text-[var(--color-text-muted)]'
  const hoverBorderClass = tone?.hoverBorder ?? 'hover:border-[var(--color-cyan)]/50'
  const hoverBgClass = tone?.hoverBg ?? 'hover:bg-[var(--color-accent)]/10'
  const hoverTextClass = tone?.hoverText ?? 'hover:text-[var(--color-text)]'
  const hoverShadowClass = tone?.hoverShadow ?? 'hover:shadow-[0_0_18px_rgba(34,211,238,0.12)]'

  return (
    <motion.span
      whileHover={{ scale: 1.04 }}
      className={`inline-flex items-center rounded-xl border font-medium transition-all ${borderClass} ${bgClass} ${textClass} ${hoverBorderClass} ${hoverBgClass} ${hoverTextClass} ${hoverShadowClass} ${
        small ? 'px-3 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'
      }`}
    >
      {label}
    </motion.span>
  )
}
