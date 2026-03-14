import SectionHeader from '../components/ui/SectionHeader'
import SkillCategoryCard from '../components/ui/SkillCategoryCard'
import { skillCategories } from '../data/skills'

const categoryAccents = {
  Languages: {
    cardBorder: 'border-blue-500/30',
    cardHoverBorder: 'hover:border-blue-400/45',
    titleClass: 'text-blue-100/95',
    accentBg: 'bg-blue-500/12',
    accentText: 'text-blue-200',
    badge: {
      border: 'border-blue-400/35',
      bg: 'bg-blue-500/12',
      text: 'text-blue-100/90',
      hoverBorder: 'hover:border-blue-300/60',
      hoverBg: 'hover:bg-blue-500/20',
      hoverText: 'hover:text-blue-50',
    },
  },
  Frontend: {
    cardBorder: 'border-cyan-500/30',
    cardHoverBorder: 'hover:border-cyan-400/45',
    titleClass: 'text-cyan-100/95',
    accentBg: 'bg-cyan-500/12',
    accentText: 'text-cyan-200',
    badge: {
      border: 'border-cyan-400/35',
      bg: 'bg-cyan-500/12',
      text: 'text-cyan-100/90',
      hoverBorder: 'hover:border-cyan-300/50',
      hoverBg: 'hover:bg-cyan-500/20',
      hoverText: 'hover:text-cyan-50',
    },
  },
  Backend: {
    cardBorder: 'border-violet-500/30',
    cardHoverBorder: 'hover:border-violet-400/45',
    titleClass: 'text-violet-100/95',
    accentBg: 'bg-violet-500/12',
    accentText: 'text-violet-200',
    badge: {
      border: 'border-violet-400/35',
      bg: 'bg-violet-500/12',
      text: 'text-violet-100/90',
      hoverBorder: 'hover:border-violet-300/50',
      hoverBg: 'hover:bg-violet-500/20',
      hoverText: 'hover:text-violet-50',
    },
  },
  'AI / ML': {
    cardBorder: 'border-violet-500/30',
    cardHoverBorder: 'hover:border-violet-400/45',
    titleClass: 'text-violet-100/95',
    accentBg: 'bg-violet-500/12',
    accentText: 'text-violet-200',
    badge: {
      border: 'border-violet-400/35',
      bg: 'bg-violet-500/12',
      text: 'text-violet-100/90',
      hoverBorder: 'hover:border-violet-300/50',
      hoverBg: 'hover:bg-violet-500/20',
      hoverText: 'hover:text-violet-50',
    },
  },
  'Cloud / DevOps': {
    cardBorder: 'border-teal-500/30',
    cardHoverBorder: 'hover:border-teal-400/45',
    titleClass: 'text-teal-100/95',
    accentBg: 'bg-teal-500/12',
    accentText: 'text-teal-200',
    badge: {
      border: 'border-teal-400/35',
      bg: 'bg-teal-500/12',
      text: 'text-teal-100/90',
      hoverBorder: 'hover:border-teal-300/50',
      hoverBg: 'hover:bg-teal-500/20',
      hoverText: 'hover:text-teal-50',
    },
  },
  Databases: {
    cardBorder: 'border-emerald-500/30',
    cardHoverBorder: 'hover:border-emerald-400/45',
    titleClass: 'text-emerald-100/95',
    accentBg: 'bg-emerald-500/12',
    accentText: 'text-emerald-200',
    badge: {
      border: 'border-emerald-400/35',
      bg: 'bg-emerald-500/12',
      text: 'text-emerald-100/90',
      hoverBorder: 'hover:border-emerald-300/50',
      hoverBg: 'hover:bg-emerald-500/20',
      hoverText: 'hover:text-emerald-50',
    },
  },
  Tools: {
    cardBorder: 'border-blue-500/30',
    cardHoverBorder: 'hover:border-blue-400/45',
    titleClass: 'text-blue-100/95',
    accentBg: 'bg-blue-500/12',
    accentText: 'text-blue-200',
    badge: {
      border: 'border-blue-400/35',
      bg: 'bg-blue-500/12',
      text: 'text-blue-100/90',
      hoverBorder: 'hover:border-blue-300/50',
      hoverBg: 'hover:bg-blue-500/20',
      hoverText: 'hover:text-blue-50',
    },
  },
}

export default function Skills() {
  return (
    <>
      <SectionHeader
        variant="compact"
        title="Skills"
        subtitle="Technologies and tools I work with."
      />
      <section className="section-padding-sm">
        <div className="site-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, i) => (
              <SkillCategoryCard
                key={category.name}
                name={category.name}
                items={category.items}
                index={i}
                accent={categoryAccents[category.name]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
