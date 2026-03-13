import SectionHeader from '../components/ui/SectionHeader'
import SkillCategoryCard from '../components/ui/SkillCategoryCard'
import { skillCategories } from '../data/skills'

const categoryAccents = {
  Languages: {
    cardBorder: 'border-blue-500/20',
    cardHoverBorder: 'hover:border-blue-400/45',
    cardHoverShadow: 'hover:shadow-[0_0_36px_rgba(59,130,246,0.18)]',
    titleClass: 'text-blue-100',
    strokeGradient: 'linear-gradient(135deg, rgba(59,130,246,0.24), rgba(96,165,250,0.12))',
    bloomGradient: 'radial-gradient(circle, rgba(59,130,246,0.18), transparent 62%)',
    overlayGradient: 'linear-gradient(135deg, rgba(30,58,138,0.18), rgba(59,130,246,0.06))',
    badge: {
      border: 'border-blue-400/30',
      bg: 'bg-blue-500/10',
      text: 'text-blue-100/90',
      hoverBorder: 'hover:border-blue-300/50',
      hoverBg: 'hover:bg-blue-500/20',
      hoverText: 'hover:text-blue-50',
      hoverShadow: 'hover:shadow-[0_0_16px_rgba(59,130,246,0.18)]',
    },
  },
  Frontend: {
    cardBorder: 'border-cyan-500/20',
    cardHoverBorder: 'hover:border-cyan-400/45',
    cardHoverShadow: 'hover:shadow-[0_0_36px_rgba(34,211,238,0.18)]',
    titleClass: 'text-cyan-100',
    strokeGradient: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(103,232,249,0.12))',
    bloomGradient: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 62%)',
    overlayGradient: 'linear-gradient(135deg, rgba(8,47,73,0.22), rgba(34,211,238,0.06))',
    badge: {
      border: 'border-cyan-400/30',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-100/90',
      hoverBorder: 'hover:border-cyan-300/50',
      hoverBg: 'hover:bg-cyan-500/20',
      hoverText: 'hover:text-cyan-50',
      hoverShadow: 'hover:shadow-[0_0_16px_rgba(34,211,238,0.18)]',
    },
  },
  Backend: {
    cardBorder: 'border-violet-500/20',
    cardHoverBorder: 'hover:border-violet-400/45',
    cardHoverShadow: 'hover:shadow-[0_0_36px_rgba(139,92,246,0.18)]',
    titleClass: 'text-violet-100',
    strokeGradient: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(167,139,250,0.12))',
    bloomGradient: 'radial-gradient(circle, rgba(139,92,246,0.2), transparent 62%)',
    overlayGradient: 'linear-gradient(135deg, rgba(76,29,149,0.2), rgba(139,92,246,0.06))',
    badge: {
      border: 'border-violet-400/30',
      bg: 'bg-violet-500/10',
      text: 'text-violet-100/90',
      hoverBorder: 'hover:border-violet-300/50',
      hoverBg: 'hover:bg-violet-500/20',
      hoverText: 'hover:text-violet-50',
      hoverShadow: 'hover:shadow-[0_0_16px_rgba(139,92,246,0.18)]',
    },
  },
  'AI / ML': {
    cardBorder: 'border-indigo-500/20',
    cardHoverBorder: 'hover:border-indigo-400/45',
    cardHoverShadow: 'hover:shadow-[0_0_36px_rgba(99,102,241,0.2)]',
    titleClass: 'text-indigo-100',
    strokeGradient: 'linear-gradient(135deg, rgba(99,102,241,0.22), rgba(59,130,246,0.12))',
    bloomGradient: 'radial-gradient(circle, rgba(99,102,241,0.22), transparent 62%)',
    overlayGradient: 'linear-gradient(135deg, rgba(49,46,129,0.2), rgba(59,130,246,0.06))',
    badge: {
      border: 'border-indigo-400/30',
      bg: 'bg-indigo-500/10',
      text: 'text-indigo-100/90',
      hoverBorder: 'hover:border-indigo-300/50',
      hoverBg: 'hover:bg-indigo-500/20',
      hoverText: 'hover:text-indigo-50',
      hoverShadow: 'hover:shadow-[0_0_16px_rgba(99,102,241,0.2)]',
    },
  },
  'Cloud / DevOps': {
    cardBorder: 'border-teal-500/20',
    cardHoverBorder: 'hover:border-teal-400/45',
    cardHoverShadow: 'hover:shadow-[0_0_36px_rgba(20,184,166,0.18)]',
    titleClass: 'text-teal-100',
    strokeGradient: 'linear-gradient(135deg, rgba(20,184,166,0.22), rgba(45,212,191,0.12))',
    bloomGradient: 'radial-gradient(circle, rgba(45,212,191,0.2), transparent 62%)',
    overlayGradient: 'linear-gradient(135deg, rgba(17,94,89,0.2), rgba(20,184,166,0.06))',
    badge: {
      border: 'border-teal-400/30',
      bg: 'bg-teal-500/10',
      text: 'text-teal-100/90',
      hoverBorder: 'hover:border-teal-300/50',
      hoverBg: 'hover:bg-teal-500/20',
      hoverText: 'hover:text-teal-50',
      hoverShadow: 'hover:shadow-[0_0_16px_rgba(20,184,166,0.18)]',
    },
  },
  Databases: {
    cardBorder: 'border-emerald-500/20',
    cardHoverBorder: 'hover:border-emerald-400/45',
    cardHoverShadow: 'hover:shadow-[0_0_36px_rgba(16,185,129,0.18)]',
    titleClass: 'text-emerald-100',
    strokeGradient: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(52,211,153,0.12))',
    bloomGradient: 'radial-gradient(circle, rgba(52,211,153,0.2), transparent 62%)',
    overlayGradient: 'linear-gradient(135deg, rgba(6,78,59,0.2), rgba(16,185,129,0.06))',
    badge: {
      border: 'border-emerald-400/30',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-100/90',
      hoverBorder: 'hover:border-emerald-300/50',
      hoverBg: 'hover:bg-emerald-500/20',
      hoverText: 'hover:text-emerald-50',
      hoverShadow: 'hover:shadow-[0_0_16px_rgba(16,185,129,0.18)]',
    },
  },
  Tools: {
    cardBorder: 'border-amber-500/20',
    cardHoverBorder: 'hover:border-amber-400/45',
    cardHoverShadow: 'hover:shadow-[0_0_36px_rgba(245,158,11,0.16)]',
    titleClass: 'text-amber-100',
    strokeGradient: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(251,191,36,0.12))',
    bloomGradient: 'radial-gradient(circle, rgba(251,191,36,0.2), transparent 62%)',
    overlayGradient: 'linear-gradient(135deg, rgba(120,53,15,0.2), rgba(245,158,11,0.06))',
    badge: {
      border: 'border-amber-400/30',
      bg: 'bg-amber-500/10',
      text: 'text-amber-100/90',
      hoverBorder: 'hover:border-amber-300/50',
      hoverBg: 'hover:bg-amber-500/20',
      hoverText: 'hover:text-amber-50',
      hoverShadow: 'hover:shadow-[0_0_16px_rgba(245,158,11,0.16)]',
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
      <section className="px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
