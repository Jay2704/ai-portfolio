import PageHero from '../components/ui/PageHero'
import SectionHeader from '../components/ui/SectionHeader'
import SkillCategoryCard from '../components/ui/SkillCategoryCard'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <>
      <PageHero
        title="Skills & expertise"
        subtitle="Technologies and tools I work with."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeader title="By category" subtitle="Grouped for clarity." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, i) => (
              <SkillCategoryCard
                key={category.name}
                name={category.name}
                items={category.items}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
