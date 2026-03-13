import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, FileDown } from 'lucide-react'
import AnimatedBackground from './AnimatedBackground'
import ProfileImageCard from './ProfileImageCard'
import { heroData } from '../../data/hero'
import { contactInfo } from '../../data/contact'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: contactInfo.github },
  { icon: Linkedin, label: 'LinkedIn', href: contactInfo.linkedIn },
  { icon: Mail, label: 'Email', href: `mailto:${contactInfo.email}` },
]

export default function PremiumHero({ profileImage }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden border-b border-[var(--color-border)]">
      <AnimatedBackground variant="grid" />
      <div
        className="pointer-events-none absolute inset-0 md:right-0 md:left-auto md:w-1/2"
        style={{
          background: 'radial-gradient(circle at 70% 40%, rgba(34,211,238,0.15), transparent 50%)',
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-14 px-4 py-20 md:flex-row md:items-center md:justify-between md:gap-24 md:px-6 md:py-28 xl:gap-28">
        <div className="flex flex-1 flex-col text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium uppercase tracking-wider text-[var(--color-accent)]"
          >
            {heroData.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
            className="mt-2 text-[var(--color-text-muted)]"
          >
            {heroData.intro} <span className="text-[var(--color-text)] font-medium">{heroData.name}</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl lg:text-6xl"
          >
            {heroData.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]"
          >
            {heroData.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.4 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {heroData.badges.map((badge, i) => (
              <span
                key={badge}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-1.5 text-xs font-medium text-[var(--color-text-muted)] backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            {heroData.ctas.map((cta) => {
              if (cta.external) {
                return (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] no-underline transition-all hover:border-[var(--color-cyan)]/50 hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-text)] hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                  >
                    <FileDown size={18} aria-hidden /> {cta.label}
                  </a>
                )
              }
              const isPrimary = Boolean(cta.primary)
              return (
                <Link
                  key={cta.label}
                  to={cta.to}
                  className={
                    isPrimary
                      ? 'group inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] no-underline transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]'
                      : 'group inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] no-underline transition-all hover:border-[var(--color-cyan)]/40 hover:bg-[var(--color-accent)]/10 hover:shadow-[0_0_26px_rgba(34,211,238,0.14)]'
                  }
                  style={
                    isPrimary
                      ? {
                          background: 'linear-gradient(135deg, rgba(59,130,246,0.22), rgba(34,211,238,0.14))',
                          boxShadow: '0 0 40px rgba(34,211,238,0.16)',
                        }
                      : undefined
                  }
                >
                  {cta.label}
                  {cta.primary && <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden />}
                </Link>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex justify-center gap-5 md:justify-start"
          >
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="relative flex shrink-0 md:translate-x-12 md:w-[380px] lg:translate-x-16 lg:w-[420px] xl:translate-x-20"
        >
          {/* additional layered glow behind the card */}
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[32px] opacity-90 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 60% 40%, rgba(34,211,238,0.18), transparent 55%)',
            }}
            aria-hidden
          />
          <ProfileImageCard src={profileImage} alt={heroData.name} />
        </motion.div>
      </div>
    </section>
  )
}
