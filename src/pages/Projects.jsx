import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import ProjectCard from '../components/ui/ProjectCard'
import { projects, projectCategories } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      )
    }
    return list
  }, [filter, search])

  return (
    <>
      <PageHero
        title="Projects"
        subtitle="Selected work across AI/ML, full-stack, cloud, and developer tools."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="All projects" subtitle="Case studies and key deliverables." />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="relative flex-1 sm:max-w-xs">
              <Search
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]"
                aria-hidden
              />
              <input
                type="search"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-2.5 pl-11 pr-4 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] focus:outline-none"
                aria-label="Search projects"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', ...projectCategories].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                    filter === cat
                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]'
                      : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-16 text-center text-[var(--color-text-muted)]">
              No projects match your filters.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
