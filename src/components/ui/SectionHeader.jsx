import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle, align = 'left' }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 md:mb-14 ${align === 'center' ? 'text-center' : ''}`}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">{subtitle}</p>
      )}
    </motion.header>
  )
}
