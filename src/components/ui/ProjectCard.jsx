import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import SkillBadge from './SkillBadge'

export default function ProjectCard({ project, index = 0 }) {
  const { slug, title, description, techStack, githubUrl, demoUrl, category, image } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="surface-card surface-card-hover group flex h-full flex-col overflow-hidden"
    >
      <Link to={`/projects/${slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
          {image ? (
            <img
              src={image}
              alt={`${title} preview`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-[var(--color-text-muted)]/40 text-sm font-medium">
              {category}
            </div>
          )}
          <span className="absolute bottom-3 right-3 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]">
            {category}
          </span>
        </div>
      </Link>
      <div className="flex h-full flex-col p-6">
        <h3 className="text-lg font-semibold text-[var(--color-text)] md:text-xl">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.slice(0, 4).map((tech) => (
            <SkillBadge key={tech} label={tech} small />
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <Link
            to={`/projects/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] no-underline transition-colors hover:underline"
          >
            View details <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text)]"
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
              className="rounded-lg p-2 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-text)]"
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
