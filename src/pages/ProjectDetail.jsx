import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import SkillBadge from '../components/ui/SkillBadge'
import ProjectCard from '../components/ui/ProjectCard'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const related = project
    ? projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 2)
    : []

  if (!project) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <p className="text-[var(--color-text-muted)]">Project not found.</p>
        <Link
          to="/projects"
          className="mt-4 inline-block text-[var(--color-accent)] hover:underline"
        >
          Back to projects
        </Link>
      </div>
    )
  }

  const {
    title,
    overview,
    problem,
    solution,
    architecture,
    features,
    challenges,
    techStack,
    githubUrl,
    demoUrl,
    category,
  } = project

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
      >
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[var(--color-accent)]/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] no-underline transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowLeft size={16} /> Back to projects
          </Link>
          <span className="mt-6 inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-xs font-medium text-[var(--color-text-muted)]">
            {category}
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">{overview}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <SkillBadge key={tech} label={tech} />
            ))}
          </div>
          <div className="mt-6 flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 px-4 py-2.5 text-sm font-medium text-[var(--color-accent)] no-underline transition-colors hover:bg-[var(--color-accent)]/20"
              >
                <Github size={18} /> GitHub
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium text-[var(--color-text)] no-underline transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <ExternalLink size={18} /> Demo
              </a>
            )}
          </div>
        </div>
      </motion.header>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          {problem && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Problem
              </h3>
              <p className="mt-3 text-[var(--color-text-muted)]">{problem}</p>
            </motion.div>
          )}
          {solution && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Solution
              </h3>
              <p className="mt-3 text-[var(--color-text-muted)]">{solution}</p>
            </motion.div>
          )}
          {architecture && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Architecture
              </h3>
              <p className="mt-3 text-[var(--color-text-muted)]">{architecture}</p>
            </motion.div>
          )}
          {features && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Key features
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-muted)]"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {challenges && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Challenges
              </h3>
              <p className="mt-3 text-[var(--color-text-muted)]">{challenges}</p>
            </motion.div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]/30 px-4 py-16 md:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-xl font-semibold text-[var(--color-text)]">
              Related projects
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {related.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
