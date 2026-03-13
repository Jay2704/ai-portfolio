import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github } from 'lucide-react'

const icons = { Mail, MapPin, Linkedin, Github }

export default function ContactCard({ type, label, value, href }) {
  const Icon = icons[type]
  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-accent)] no-underline hover:underline"
    >
      {value}
    </a>
  ) : (
    <span>{value}</span>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
    >
      {Icon && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]">
          <Icon size={20} aria-hidden />
        </span>
      )}
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
          {label}
        </p>
        <p className="mt-1 text-[var(--color-text)]">{content}</p>
      </div>
    </motion.div>
  )
}
