import { motion } from 'framer-motion'

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative">
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--color-border)] md:left-[15px]" aria-hidden />
      <ul className="space-y-8" role="list">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.08 }}
            className="relative flex gap-6 pl-10 md:pl-12"
          >
            <span
              className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] md:h-7 md:w-7"
              aria-hidden
            />
            <div className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium text-[var(--color-text)]">
                  {exp.role}
                </h3>
                <span className="text-sm text-[var(--color-text-muted)]">
                  {exp.duration}
                </span>
              </div>
              <p className="mt-1 text-[var(--color-accent)]">{exp.company}</p>
              <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-[var(--color-text-muted)]">
                {exp.achievements.map((a, j) => (
                  <li key={j}>{a}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
