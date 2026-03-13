import { Link } from 'react-router-dom'
import { navLinks } from '../../data/navigation'
import { contactInfo } from '../../data/contact'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Software Developer & AI Engineer
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]/80">
              {contactInfo.location}
            </p>
          </div>
          <ul className="flex list-none flex-wrap gap-6">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-accent)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-text-muted)]/70">
          © {new Date().getFullYear()} — Built with React & Tailwind
        </p>
      </div>
    </footer>
  )
}
