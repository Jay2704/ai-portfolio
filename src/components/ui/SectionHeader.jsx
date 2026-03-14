import { motion } from 'framer-motion'

export default function SectionHeader({
  title,
  subtitle,
  align = 'left',
  variant = 'section', // 'section' | 'compact'
}) {
  if (variant === 'compact') {
    return (
      <section className="section-padding-sm border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <div className="site-container text-center">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body mx-auto mt-3 max-w-2xl text-sm text-[var(--color-text-muted)] md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    )
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className={align === 'center' ? 'mb-10 text-center md:mb-12' : 'mb-10 md:mb-12'}
    >
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
          {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body mt-3 text-sm text-[var(--color-text-muted)] md:text-base ${
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-3xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.header>
  )
}
