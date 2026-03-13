import { motion } from 'framer-motion'

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative">
      <div
        className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)]/30 via-[var(--color-border)] to-transparent md:left-[19px]"
        aria-hidden
      />
      <ul className="space-y-6" role="list">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="relative flex gap-6 pl-12 md:pl-14"
          >
            <motion.span
              className="absolute left-0 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]"
              whileHover={{ scale: 1.08 }}
              aria-hidden
            />
            <div className="flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/30 hover:shadow-[0_0_30px_var(--color-accent-glow)]">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{exp.role}</h3>
                <span className="text-sm text-[var(--color-text-muted)]">{exp.duration}</span>
              </div>
              <p className="mt-1 text-[var(--color-accent)]">{exp.company}</p>
              <ul className="mt-5 space-y-2 border-t border-[var(--color-border)] pt-4">
                {exp.achievements.map((a, j) => (
                  <li key={j} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
