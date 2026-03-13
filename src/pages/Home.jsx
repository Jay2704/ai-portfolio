import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      <section className="border-b border-[var(--color-border)] px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium uppercase tracking-wider text-[var(--color-accent)]"
          >
            Software Developer & AI Engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-medium tracking-tight text-[var(--color-text)] md:text-5xl"
          >
            Building software that scales
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-[var(--color-text-muted)]"
          >
            I design and build systems—from ML pipelines to full-stack applications—with a focus on clarity and maintainability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-accent)] bg-[var(--color-accent)]/10 px-5 py-2.5 text-sm font-medium text-[var(--color-accent)] no-underline transition-colors hover:bg-[var(--color-accent)]/20"
            >
              View projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-muted)] no-underline transition-colors hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-20" id="featured">
        <div className="mx-auto max-w-5xl">
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
              className="text-sm font-medium text-[var(--color-accent)] no-underline hover:underline"
            >
              View all projects →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
