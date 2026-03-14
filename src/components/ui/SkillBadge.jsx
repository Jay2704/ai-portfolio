import { motion } from 'framer-motion'

export default function SkillBadge({ label, small = false, tone }) {
  const borderClass = tone?.border ?? 'border-[var(--color-border)]'
  const bgClass = tone?.bg ?? 'bg-[#f1f5f9]'
  const textClass = tone?.text ?? 'text-[var(--color-text-muted)]/95'
  const hoverBorderClass = tone?.hoverBorder ?? 'hover:border-[var(--color-border-focus)]'
  const hoverBgClass = tone?.hoverBg ?? 'hover:bg-[#e8eff6]'
  const hoverTextClass = tone?.hoverText ?? 'hover:text-[var(--color-text)]'
  const hoverShadowClass = tone?.hoverShadow ?? ''

  return (
    <motion.span
      whileHover={{ y: -1 }}
      className={`inline-flex items-center rounded-full border font-medium transition-all ${borderClass} ${bgClass} ${textClass} ${hoverBorderClass} ${hoverBgClass} ${hoverTextClass} ${hoverShadowClass} ${
        small ? 'px-3 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'
      }`}
    >
      {label}
    </motion.span>
  )
}
