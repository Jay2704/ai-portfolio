import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import SkillBadge from './SkillBadge'

export default function ProjectCard({ project, index = 0 }) {
  const { slug, title, description, techStack, githubUrl, demoUrl, category } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)]/40"
    >
      <div className="aspect-video w-full bg-[var(--color-bg-elevated)]">
        <div className="flex h-full items-center justify-center text-[var(--color-text-muted)]/50 text-sm">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium text-[var(--color-text)]">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-[var(--color-text-muted)]">
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {techStack.slice(0, 4).map((tech) => (
            <SkillBadge key={tech} label={tech} small />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            to={`/projects/${slug}`}
            className="text-sm font-medium text-[var(--color-accent)] no-underline hover:underline"
          >
            View details
          </Link>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              aria-label="Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
