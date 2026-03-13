import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className="mb-10 md:mb-12"
    >
      <h2 className="text-2xl font-medium tracking-tight text-[var(--color-text)] md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-[var(--color-text-muted)]">{subtitle}</p>
      )}
    </motion.header>
  )
}
