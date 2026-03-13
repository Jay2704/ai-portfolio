import { motion } from 'framer-motion'

export default function SectionHeader({
  title,
  subtitle,
  align = 'left',
  variant = 'section', // 'section' | 'compact'
}) {
  if (variant === 'compact') {
    return (
      <section className="text-center py-12">
        <h2 className="font-heading text-4xl font-semibold tracking-tight text-[var(--color-text)]">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body mx-auto mt-3 max-w-lg text-sm text-[var(--color-text-muted)] md:text-base">
            {subtitle}
          </p>
        )}
      </section>
    )
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 md:mb-14 ${align === 'center' ? 'text-center' : ''}`}
    >
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body mt-3 max-w-2xl text-sm text-[var(--color-text-muted)] md:text-base">
          {subtitle}
        </p>
      )}
    </motion.header>
  )
}
