import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { education } from '../data/hero'

export default function Education() {
  return (
    <>
      <SectionHeader
        variant="compact"
        title="Education"
        subtitle="Academic background and qualifications."
      />
      <section className="section-padding-sm">
        <div className="site-container max-w-4xl">
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="surface-card p-6 md:p-7"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  {edu.logo && (
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-3 md:h-24 md:w-24">
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="flex items-center gap-2 text-xl font-semibold text-[var(--color-text)] md:text-2xl">
                          <GraduationCap size={22} className="text-[var(--color-cyan)]" />
                          {edu.degree}
                        </h3>
                        <p className="mt-2 text-base text-[var(--color-accent)] md:text-lg">{edu.school}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <span className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-sm text-[var(--color-text-muted)]">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-sm text-[var(--color-text-muted)]">
                        <Calendar size={14} />
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
