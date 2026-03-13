import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection({ title, subtitle, primaryLabel = 'Get in touch', primaryTo = '/contact', secondaryLabel, secondaryTo }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-16 md:px-12 md:py-20"
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-text)] md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-3 text-[var(--color-text-muted)]">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to={primaryTo}
            className="group inline-flex items-center gap-2 rounded-xl border border-[var(--color-accent)] bg-[var(--color-accent)]/15 px-6 py-3 text-sm font-medium text-[var(--color-accent)] no-underline transition-all hover:bg-[var(--color-accent)]/25"
          >
            {primaryLabel} <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center rounded-xl border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-muted)] no-underline transition-colors hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  )
}
