import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X, FileText } from 'lucide-react'
import { navLinks, resumeUrl } from '../../data/navigation'

export default function MobileMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[var(--color-bg)]/98 md:hidden"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile menu"
    >
      <div className="flex h-full flex-col p-6 pt-16">
        <button
          type="button"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text)]"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        <nav className="flex flex-1 flex-col gap-2" aria-label="Mobile navigation">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={onClose}
              className="rounded-md px-4 py-3 text-lg text-[var(--color-text)] no-underline hover:bg-[var(--color-surface)]"
            >
              {label}
            </Link>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-2 rounded-md px-4 py-3 text-lg text-[var(--color-text-muted)] no-underline hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
          >
            <FileText size={20} /> Resume
          </a>
        </nav>
      </div>
    </motion.div>
  )
}
