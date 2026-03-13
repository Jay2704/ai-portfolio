import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-20 md:px-6 md:py-24"
    >
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[var(--color-accent)]/5 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-[var(--color-text-muted)]">{subtitle}</p>
        )}
      </div>
    </motion.section>
  )
}
