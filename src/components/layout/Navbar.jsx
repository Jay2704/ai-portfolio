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
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-bg)]/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 md:px-6" aria-label="Main navigation">
        <Link to="/" className="text-lg font-medium text-[var(--color-text)] no-underline hover:text-[var(--color-accent)]">
          Portfolio
        </Link>
        <ul className="hidden list-none gap-6 md:flex">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`text-sm no-underline transition-colors ${
                    isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
          <li>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-accent)]"
            >
              <FileText size={16} aria-hidden /> Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text)] md:hidden"
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
