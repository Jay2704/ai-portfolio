import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import ProjectCard from '../components/ui/ProjectCard'
import { projects, projectCategories } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Selected work across AI/ML, full-stack, cloud, and tools."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeader title="All projects" />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {['All', ...projectCategories].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                    : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-[var(--color-text-muted)]">
              No projects in this category.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
