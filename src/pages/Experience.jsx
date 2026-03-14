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
      <section className="section-padding-sm">
        <div className="site-container max-w-4xl">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>
    </>
  )
}
