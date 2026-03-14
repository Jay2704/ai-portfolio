import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedBackground from './AnimatedBackground'
import ProfileImageCard from './ProfileImageCard'
import { heroData } from '../../data/hero'
import { socialLinks } from '../../data/contact'

export default function PremiumHero({ profileImage }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] pt-4 md:pt-6">
      <AnimatedBackground variant="grid" />
      <div className="site-container relative section-padding grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="order-2 flex flex-col text-center md:text-left lg:order-1 lg:pl-8 xl:pl-12">
          <div
            className="pointer-events-none absolute left-[-40px] top-12 hidden h-44 w-44 rounded-full bg-teal-100/70 lg:block"
            aria-hidden
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]"
          >
            {heroData.title}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
            className="font-heading relative z-10 mt-3 text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-5xl"
          >
            {heroData.intro}{' '}
            <span className="text-[var(--color-accent)]">
              {heroData.name}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="relative z-10 mt-3 text-lg font-medium text-[var(--color-cyan)] md:text-xl"
          >
            {heroData.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="relative z-10 mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg"
          >
            {heroData.tagline} {heroData.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.4 }}
            className="relative z-10 mt-6 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            {heroData.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#dbe5ed] bg-[#f8fbfd] px-3.5 py-1.5 text-xs font-medium text-[var(--color-text-muted)]"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            {heroData.ctas.map((cta) => {
              const isPrimary = Boolean(cta.primary)
              return (
                <Link
                  key={cta.label}
                  to={cta.to}
                  className={isPrimary ? 'btn-primary' : 'btn-secondary'}
                >
                  {cta.label}
                  {cta.primary && (
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  )}
                </Link>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="relative z-10 mt-8 flex justify-center gap-4 md:justify-start"
          >
            {socialLinks.map(({ label, href, logo }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2 transition-colors hover:border-[var(--color-border-focus)]"
                aria-label={label}
              >
                <img src={logo} alt={label} className="h-full w-full object-contain" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="order-1 mx-auto w-full max-w-[16rem] md:max-w-[22rem] lg:order-2 lg:max-w-[25rem] xl:max-w-[26rem]"
        >
          <ProfileImageCard src={profileImage} alt={heroData.name} />
        </motion.div>
      </div>
    </section>
  )
}
