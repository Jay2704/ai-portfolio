import { Link } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { contactInfo, socialLinks } from '../../data/contact'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="site-container py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-[var(--color-text)]">
              Software Developer & AI Engineer
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Building systems that scale. Open to collaboration and new opportunities.
            </p>
            <p className="mt-2 text-xs text-[var(--color-text-muted)]/80">{contactInfo.location}</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ label, href, logo }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-1.5 transition-colors hover:border-[var(--color-border-focus)]"
                  aria-label={label}
                >
                  <img src={logo} alt={label} className="h-full w-full object-contain" />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex list-none flex-wrap gap-6">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm text-[var(--color-text-muted)] no-underline transition-colors hover:text-[var(--color-accent)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-[var(--color-border)] pt-8 text-center text-xs text-[var(--color-text-muted)]/70">
          © {new Date().getFullYear()} Jay Paun — Built with React, Vite & Tailwind
        </div>
      </div>
    </footer>
  )
}
