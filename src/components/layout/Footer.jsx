import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { contactInfo } from '../../data/contact'

const social = [
  { icon: Github, label: 'GitHub', href: contactInfo.github },
  { icon: Linkedin, label: 'LinkedIn', href: contactInfo.linkedIn },
  { icon: Code2, label: 'LeetCode', href: contactInfo.leetcode },
  { icon: Mail, label: 'Email', href: `mailto:${contactInfo.email}` },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
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
              {social.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  aria-label={label}
                >
                  <Icon size={18} />
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
