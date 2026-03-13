import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github, Code2 } from 'lucide-react'

const icons = { Mail, MapPin, Linkedin, Github, Leetcode: Code2 }

export default function ContactCard({ type, label, value, href }) {
  const Icon = icons[type]
  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-accent)] no-underline transition-colors hover:underline"
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
      whileHover={{ x: 2 }}
      className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]/30"
    >
      {Icon && (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
          <Icon size={20} aria-hidden />
        </span>
      )}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
          {label}
        </p>
        <p className="mt-1.5 text-[var(--color-text)]">{content}</p>
      </div>
    </motion.div>
  )
}
