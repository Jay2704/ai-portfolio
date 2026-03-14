import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { X, FileText } from 'lucide-react'
import { navLinks, resumeUrl } from '../../data/navigation'
import { socialLinks } from '../../data/contact'

export default function MobileMenu({ onClose }) {
  const location = useLocation()
  const visibleNavLinks = navLinks.filter(({ path, label }) => path !== '/' && label !== 'Home')
  const isBrowser = typeof document !== 'undefined'

  const overlay = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] bg-[var(--color-bg)] md:hidden"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile menu"
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-6"
      >
        <div className="flex items-center justify-between">
          <span className="font-heading text-xl font-semibold text-[var(--color-text)]">Jay</span>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors hover:border-[var(--color-border-focus)]"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex min-h-[calc(100vh-80px)] flex-1 flex-col pb-2 pt-8">
          <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile navigation">
            {visibleNavLinks.map(({ path, label }) => {
              const isActive =
                location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={onClose}
                  className={`w-full rounded-xl border px-5 py-4 text-left text-lg font-medium no-underline transition-colors ${
                    isActive
                      ? 'border-[var(--color-border-focus)] bg-[var(--color-surface)] text-[var(--color-text)]'
                      : 'border-transparent text-[var(--color-text-muted)] hover:border-[var(--color-border)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-primary mt-6 w-full"
          >
            <FileText size={20} /> Resume
          </a>

          {socialLinks.length > 0 && (
            <div className="mt-8 border-t border-[var(--color-border)] pt-6">
              <div className="flex items-center justify-center gap-3">
                {socialLinks.map(({ label, href, logo }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2 transition-colors hover:border-[var(--color-border-focus)]"
                    aria-label={label}
                  >
                    <img src={logo} alt={label} className="h-full w-full object-contain" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )

  if (!isBrowser) return overlay

  return createPortal(overlay, document.body)
}
