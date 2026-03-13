import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import SkillBadge from '../components/ui/SkillBadge'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <>
      <PageHero
        title="Skills & expertise"
        subtitle="Technologies and tools I work with."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeader title="By category" />
          <div className="space-y-10">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.05 }}
              >
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <SkillBadge key={item} label={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
