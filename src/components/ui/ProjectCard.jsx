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
      className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_40px_var(--color-accent-glow)]"
    >
      <Link to={`/projects/${slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-bg-elevated)]">
          {image ? (
            <motion.img
              src={image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-[var(--color-text-muted)]/40 text-sm font-medium">
              {category}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="absolute bottom-3 right-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-1 text-xs font-medium text-[var(--color-text-muted)] backdrop-blur-sm">
            {category}
          </span>
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--color-text)]">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.slice(0, 4).map((tech) => (
            <SkillBadge key={tech} label={tech} small />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
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
