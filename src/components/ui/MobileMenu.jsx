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
      className="fixed inset-0 z-[9999] bg-slate-950 md:hidden"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile menu"
    >
      <div className="flex h-full flex-col overflow-y-auto px-5 pb-8 pt-6">
        <div className="flex items-center justify-between">
          <span className="font-heading text-xl font-semibold text-white">Jay</span>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-200 transition hover:bg-slate-800"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex min-h-[calc(100vh-80px)] flex-1 flex-col pb-2 pt-8">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
          {visibleNavLinks.map(({ path, label }) => {
            const isActive =
              location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
            return (
              <Link
                key={path}
                to={path}
                onClick={onClose}
                className={`w-full rounded-2xl border px-5 py-4 text-left text-lg font-medium no-underline transition ${
                  isActive
                    ? 'border-cyan-400/40 bg-slate-800 text-white'
                    : 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800'
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
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/40 bg-slate-900 px-5 py-4 text-lg font-medium text-cyan-300 no-underline transition hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-200"
          >
            <FileText size={20} /> Resume
          </a>

          {socialLinks.length > 0 && (
            <div className="mt-auto pt-8">
              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, logo }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-2 transition hover:bg-slate-800"
                    aria-label={label}
                  >
                    <img src={logo} alt={label} className="h-full w-full object-contain" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )

  if (!isBrowser) return overlay

  return createPortal(overlay, document.body)
}
