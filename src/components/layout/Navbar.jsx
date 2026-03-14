import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'
import { navLinks } from '../../data/navigation'
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
    <header className="sticky top-0 z-50 px-3 py-4 md:px-6">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-[var(--color-border)] bg-white px-4 py-3 shadow-[0_8px_22px_rgba(15,23,42,0.08)] md:px-6"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="font-heading text-lg font-semibold tracking-tight text-[var(--color-text)] no-underline transition-colors hover:text-[var(--color-accent)]"
        >
          Jay
        </Link>
        <ul className="hidden list-none items-center gap-1 md:flex">
          {visibleNavLinks.map(({ path, label }) => {
            const isActive =
              location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`rounded-lg px-4 py-2 text-sm font-medium no-underline transition-colors duration-200 ${
                    isActive
                      ? 'bg-[var(--color-bg-elevated)] text-[var(--color-text)]'
                      : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
          <li className="ml-1">
            <Link to="/contact" className="btn-primary px-5 py-2.5">Let's Talk</Link>
          </li>
        </ul>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors hover:border-[var(--color-border-focus)] md:hidden"
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
