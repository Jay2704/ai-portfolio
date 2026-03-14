import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection({ title, subtitle, primaryLabel = 'Get in touch', primaryTo = '/contact', secondaryLabel, secondaryTo }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="surface-card px-6 py-14 md:px-12 md:py-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-text)] md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-3 text-[var(--color-text-muted)]">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to={primaryTo}
            className="btn-primary group"
          >
            {primaryLabel} <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="btn-secondary"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  )
}
