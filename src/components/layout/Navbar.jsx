import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Menu, FileText } from 'lucide-react'
import { navLinks, resumeUrl } from '../../data/navigation'
import MobileMenu from '../ui/MobileMenu'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const visibleNavLinks = navLinks.filter(({ path, label }) => path !== '/' && label !== 'Home')

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('nav-locked')
    } else {
      document.body.classList.remove('nav-locked')
    }

    return () => {
      document.body.classList.remove('nav-locked')
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/98">
      <nav
        className="site-container flex items-center justify-between gap-4 py-4"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="font-heading text-lg font-semibold tracking-tight text-[var(--color-text)] no-underline transition-colors hover:text-[var(--color-accent)]"
        >
          Jay
        </Link>
        <ul className="hidden list-none items-center gap-2 md:flex">
          {visibleNavLinks.map(({ path, label }) => {
            const isActive =
              location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium no-underline transition-colors duration-200 ${
                    isActive
                      ? 'bg-[var(--color-surface)] text-[var(--color-text)]'
                      : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]'
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
              className="btn-secondary border-[var(--color-border-focus)] text-[var(--color-text)]"
            >
              <FileText size={16} aria-hidden /> Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors hover:border-[var(--color-border-focus)] md:hidden"
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
