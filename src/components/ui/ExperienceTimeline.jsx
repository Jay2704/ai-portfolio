import { motion } from 'framer-motion'

export default function ExperienceTimeline({ experiences }) {
  return (
    <div>
      <ul className="space-y-4" role="list">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="surface-card p-5 md:p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="h-3 w-3 rounded-full bg-[var(--color-accent)]" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">{exp.role}</h3>
                    <p className="mt-1 text-[var(--color-accent)]">{exp.company}</p>
                    <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{exp.location}</p>
                  </div>
                  <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                    {exp.duration}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 border-t border-[var(--color-border)] pt-4">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
