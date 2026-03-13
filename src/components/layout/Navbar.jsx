import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'
import { navLinks, resumeUrl } from '../../data/navigation'
import MobileMenu from '../ui/MobileMenu'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/50 bg-[var(--color-bg)]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-lg font-semibold text-[var(--color-text)] no-underline transition-colors hover:text-[var(--color-accent)]"
        >
          Portfolio
        </Link>
        <ul className="hidden list-none items-center gap-1 md:flex">
          {navLinks.map(({ path, label }) => {
            const isActive =
              location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
            return (
              <li key={path}>
                <Link
                  to={path}
                  className="relative rounded-lg px-4 py-2.5 text-sm font-medium no-underline transition-colors"
                >
                  {isActive ? (
                    <>
                      <span className="text-[var(--color-text)]">{label}</span>
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        style={{ zIndex: -1 }}
                      />
                    </>
                  ) : (
                    <span className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                      {label}
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
          <li className="ml-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 px-4 py-2.5 text-sm font-medium text-[var(--color-accent)] no-underline transition-colors hover:bg-[var(--color-accent)]/20"
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
