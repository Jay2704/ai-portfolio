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
        className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
      >
        <div className="site-container max-w-4xl section-padding-sm">
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
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">{overview}</p>
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
                className="btn-primary"
              >
                <Github size={18} /> GitHub
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink size={18} /> Demo
              </a>
            )}
          </div>
        </div>
      </motion.header>

      <section className="section-padding-sm">
        <div className="site-container max-w-4xl space-y-12">
          {problem && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Problem
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{problem}</p>
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
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{solution}</p>
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
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{architecture}</p>
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
                    className="surface-card rounded-xl px-4 py-3 text-sm text-[var(--color-text-muted)]"
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
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{challenges}</p>
            </motion.div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]/35">
          <div className="site-container">
            <h2 className="mb-8 text-xl font-semibold text-[var(--color-text)]">
              Related projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
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
