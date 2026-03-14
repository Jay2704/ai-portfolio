import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import PremiumHero from '../components/ui/PremiumHero'
import SectionHeader from '../components/ui/SectionHeader'
import ProjectCard from '../components/ui/ProjectCard'
import StatCard from '../components/ui/StatCard'
import CTASection from '../components/ui/CTASection'
import { projects } from '../data/projects'
import { stats, strengths } from '../data/hero'
import { experiences } from '../data/experience'
import { codingProfiles } from '../data/contact'
import profileImg from '../assets/jay.jpg'

export default function Home() {
  const featured = projects.slice(0, 3)
  const experiencePreview = experiences.slice(0, 2)

  return (
    <>
      <PremiumHero profileImage={profileImg} />

      <section className="section-padding border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]/50">
        <div className="site-container">
          <SectionHeader
            title="Coding Profiles"
            subtitle="Practice and problem-solving across competitive programming platforms."
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {codingProfiles.map(({ label, href, logo, username }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08 }}
                className="surface-card surface-card-hover p-6 text-center no-underline"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-3">
                  <img src={logo} alt={label} className="h-full w-full object-contain" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-text)]">{label}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">@{username}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]">
                  View Profile <ExternalLink size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" id="featured">
        <div className="site-container">
          <SectionHeader
            title="Featured projects"
            subtitle="A selection of recent work across ML, full-stack, and infrastructure."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              to="/projects"
              className="btn-secondary"
            >
              View all projects →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)]/40">
        <div className="site-container">
          <SectionHeader
            title="At a glance"
            subtitle="What I focus on and deliver."
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="site-container">
          <SectionHeader
            title="Strengths"
            subtitle="How I approach engineering and delivery."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08 }}
                className="surface-card surface-card-hover p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]/35">
        <div className="site-container">
          <SectionHeader
            title="Recent experience"
            subtitle="Roles and impact highlights."
          />
          <ul className="space-y-4">
            {experiencePreview.map((exp, i) => (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to="/experience"
                  className="surface-card surface-card-hover flex flex-wrap items-center justify-between gap-4 p-5 no-underline"
                >
                  <div>
                    <p className="font-medium text-[var(--color-text)]">{exp.role}</p>
                    <p className="text-sm text-[var(--color-accent)]">{exp.company}</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">{exp.duration}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Link
              to="/experience"
              className="btn-secondary"
            >
              Full experience →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="site-container">
          <CTASection
            title="Let's build something together"
            subtitle="Open to collaboration, full-time roles, and interesting problems."
            primaryLabel="Get in touch"
            primaryTo="/contact"
            secondaryLabel="View projects"
            secondaryTo="/projects"
          />
        </div>
      </section>
    </>
  )
}
