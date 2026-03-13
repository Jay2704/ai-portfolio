import { motion } from 'framer-motion'
import SkillBadge from './SkillBadge'

export default function SkillCategoryCard({ name, items, index = 0, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/30"
    >
      <div className="mb-4 flex items-center gap-3">
        {Icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
            <Icon size={20} />
          </span>
        )}
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
          {name}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <SkillBadge key={item} label={item} />
        ))}
      </div>
    </motion.div>
  )
}
