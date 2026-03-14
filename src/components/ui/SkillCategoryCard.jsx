import { motion } from 'framer-motion'
import SkillBadge from './SkillBadge'

const defaultAccent = {
  cardBorder: 'border-[var(--color-border)]',
  cardHoverBorder: 'hover:border-[var(--color-border-focus)]',
  cardHoverShadow: '',
  titleClass: 'text-[var(--color-text)]/95',
  accentBg: 'bg-teal-500/10',
  accentText: 'text-teal-700',
  badge: undefined,
}

export default function SkillCategoryCard({ name, items, index = 0, icon: Icon, accent }) {
  const activeAccent = { ...defaultAccent, ...(accent ?? {}) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className={`surface-card surface-card-hover p-6 ${activeAccent.cardBorder} ${activeAccent.cardHoverBorder} ${activeAccent.cardHoverShadow}`}
    >
      <div className="mb-4 flex items-center gap-3">
        {Icon && (
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-[var(--color-border)] ${activeAccent.accentBg} ${activeAccent.accentText}`}
          >
            <Icon size={20} />
          </span>
        )}
        <h3 className={`text-sm font-semibold uppercase tracking-[0.14em] ${activeAccent.titleClass}`}>
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
