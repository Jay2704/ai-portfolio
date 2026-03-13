import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'

export default function About() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="Background, values, and what I care about when building software."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert max-w-none space-y-6 text-[var(--color-text-muted)]"
          >
            <p>
              I'm a software engineer focused on building reliable systems—from machine learning pipelines to APIs and developer tools. I care about clean architecture, clear documentation, and teams that ship.
            </p>
            <p>
              My work spans full-stack development, cloud infrastructure, and AI/ML. I prefer pragmatic solutions over hype: the right tool for the problem, tested and maintainable.
            </p>
            <p>
              When I'm not coding, I'm usually reading, writing, or exploring new tech. I believe in continuous learning and in leaving codebases better than I found them.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
