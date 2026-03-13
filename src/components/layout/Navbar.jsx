import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Menu, FileText } from 'lucide-react'
import { navLinks, resumeUrl } from '../../data/navigation'
import MobileMenu from '../ui/MobileMenu'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/70 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="font-heading text-lg font-semibold text-[var(--color-text)] no-underline transition-colors hover:text-[var(--color-accent)]"
        >
          Jay
        </Link>
        <ul className="hidden list-none items-center gap-2 md:flex">
          {navLinks.map(({ path, label }) => {
            const isActive =
              location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium no-underline transition-all duration-200 ${
                    isActive
                      ? 'border-[var(--color-border-focus)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-[0_0_20px_rgba(34,211,238,0.08)]'
                      : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-focus)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
          <li className="ml-1">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-accent)]/60 px-4 py-2 text-sm font-medium text-[var(--color-accent)] no-underline transition-all duration-200 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
            >
              <FileText size={16} aria-hidden /> Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-text-muted)] md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  )
}
