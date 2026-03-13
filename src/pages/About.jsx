import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { aboutStory, education } from '../data/hero'

export default function About() {
  return (
    <>
      <SectionHeader
        variant="compact"
        title="About"
        subtitle="Background, values, and how I approach engineering and AI systems."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <SectionHeader title={aboutStory.headline} />
            <div className="space-y-6 text-[var(--color-text-muted)]">
              {aboutStory.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                What I work on
              </h3>
              <ul className="mt-4 space-y-2">
                {aboutStory.workOn.map((item, i) => (
                  <li key={i} className="flex gap-2 text-[var(--color-text-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                <GraduationCap size={18} className="text-[var(--color-cyan)]" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4"
                  >
                    <p className="font-medium text-[var(--color-text)]">{edu.degree}</p>
                    <p className="mt-1 text-sm text-[var(--color-accent)]">{edu.school}</p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-[var(--color-text-muted)]">
                      <span>{edu.location}</span>
                      <span>•</span>
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                Approach
              </h3>
              <p className="mt-3 text-[var(--color-text)]">{aboutStory.approach}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
