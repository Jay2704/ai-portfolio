import { motion } from 'framer-motion'
import SkillBadge from './SkillBadge'

const defaultAccent = {
  cardBorder: 'border-[var(--color-border)]',
  cardHoverBorder: 'hover:border-[var(--color-cyan)]/35',
  cardHoverShadow: 'hover:shadow-[0_0_36px_rgba(34,211,238,0.12)]',
  titleClass: 'text-[var(--color-text)]/95',
  strokeGradient: 'linear-gradient(135deg, rgba(59,130,246,0.22), rgba(34,211,238,0.16))',
  bloomGradient: 'radial-gradient(circle, rgba(34,211,238,0.14), transparent 60%)',
  overlayGradient: 'linear-gradient(135deg, rgba(59,130,246,0.10), rgba(34,211,238,0.08))',
  badge: undefined,
}

export default function SkillCategoryCard({ name, items, index = 0, icon: Icon, accent }) {
  const activeAccent = { ...defaultAccent, ...(accent ?? {}) }
  const blooms = [
    { left: '-64px', top: '-64px' },
    { left: 'auto', right: '-72px', top: '-72px' },
    { left: '-72px', bottom: '-72px' },
    { right: '-72px', bottom: '-72px' },
  ]
  const bloom = blooms[index % blooms.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className={`group relative overflow-hidden rounded-2xl border bg-[var(--color-surface)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-all ${activeAccent.cardBorder} ${activeAccent.cardHoverBorder} ${activeAccent.cardHoverShadow}`}
    >
      {/* subtle gradient stroke */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background: activeAccent.strokeGradient,
          filter: 'blur(10px)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
        style={{
          ...bloom,
          background: activeAccent.bloomGradient,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background: activeAccent.overlayGradient,
        }}
        aria-hidden
      />
      {/* inner edge + depth */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow:
            'inset 0 0 0 1px rgba(229,231,235,0.05), inset 0 -40px 80px rgba(2,6,23,0.35)',
        }}
        aria-hidden
      />
      <div className="mb-4 flex items-center gap-3">
        {Icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/12 text-[var(--color-accent)] ring-1 ring-[var(--color-border)]">
            <Icon size={20} />
          </span>
        )}
        <h3 className={`text-sm font-semibold uppercase tracking-wider ${activeAccent.titleClass}`}>
          {name}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <SkillBadge key={item} label={item} tone={activeAccent.badge} />
        ))}
      </div>
    </motion.div>
  )
}
