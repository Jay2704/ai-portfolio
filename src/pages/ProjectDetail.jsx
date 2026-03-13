import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import SkillBadge from '../components/ui/SkillBadge'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <p className="text-[var(--color-text-muted)]">Project not found.</p>
        <Link to="/projects" className="mt-4 inline-block text-[var(--color-accent)] hover:underline">
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
  } = project

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-10 md:px-6"
      >
        <div className="mx-auto max-w-3xl">
          <Link
            to="/projects"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-accent)]"
          >
            <ArrowLeft size={16} /> Back to projects
          </Link>
          <h1 className="text-2xl font-medium text-[var(--color-text)] md:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-[var(--color-text-muted)]">{overview}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <SkillBadge key={tech} label={tech} />
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] no-underline hover:underline"
              >
                <Github size={18} /> GitHub
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] no-underline hover:underline"
              >
                <ExternalLink size={18} /> Demo
              </a>
            )}
          </div>
        </div>
      </motion.header>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {problem && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                Problem
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">{problem}</p>
            </motion.div>
          )}
          {solution && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                Solution
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">{solution}</p>
            </motion.div>
          )}
          {architecture && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                Architecture
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">{architecture}</p>
            </motion.div>
          )}
          {features && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                Features
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-[var(--color-text-muted)]">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </motion.div>
          )}
          {challenges && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                Challenges
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">{challenges}</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
