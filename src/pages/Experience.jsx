import SectionHeader from '../components/ui/SectionHeader'
import ExperienceTimeline from '../components/ui/ExperienceTimeline'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <>
      <SectionHeader
        variant="compact"
        title="Experience"
        subtitle="Roles, companies, and key achievements."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeader title="Timeline" subtitle="Career progression and impact." />
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>
    </>
  )
}
