import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X, FileText } from 'lucide-react'
import { navLinks, resumeUrl } from '../../data/navigation'

export default function MobileMenu({ onClose }) {
  const location = useLocation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[var(--color-bg)]/98 backdrop-blur-md md:hidden"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile menu"
    >
      <div className="flex h-full flex-col p-6 pt-20">
        <button
          type="button"
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-text)]"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        <nav className="flex flex-1 flex-col gap-2" aria-label="Mobile navigation">
          {navLinks.map(({ path, label }) => {
            const isActive =
              location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
            return (
              <Link
                key={path}
                to={path}
                onClick={onClose}
                className={`rounded-xl border px-4 py-3.5 text-lg font-medium no-underline transition-all ${
                  isActive
                    ? 'border-[var(--color-border-focus)] bg-[var(--color-surface)] text-[var(--color-text)]'
                    : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-focus)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-[var(--color-accent)]/60 px-4 py-3.5 text-lg font-medium text-[var(--color-accent)] no-underline transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
          >
            <FileText size={20} /> Resume
          </a>
        </nav>
      </div>
    </motion.div>
  )
}
