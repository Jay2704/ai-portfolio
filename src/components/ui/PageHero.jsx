import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-medium tracking-tight text-[var(--color-text)] md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-[var(--color-text-muted)]">{subtitle}</p>
        )}
      </div>
    </motion.section>
  )
}
