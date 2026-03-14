import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import { contactInfo } from '../data/contact'
import hpeLogo from '../assets/hpe.avif'
import ibmLogo from '../assets/IBM.svg'
import githubIcon from '../assets/icons/github.svg'
import leetcodeIcon from '../assets/leetcode.png'
import codeforcesIcon from '../assets/codeforces.png'
import codechefIcon from '../assets/codechef.avif'
import linkedinIcon from '../assets/icons/linkedin.svg'

export default function About() {
  const summaryParagraphs = [
    "I am a Software Engineer and AI researcher focused on building intelligent and scalable systems. My work combines machine learning, cloud infrastructure, and full stack development to create production ready applications that solve real world problems.",
    "My technical experience spans Python, JavaScript, React, Node.js, machine learning frameworks, and cloud platforms including AWS and Azure. I enjoy designing systems that integrate AI models with reliable backend architectures and modern user interfaces.",
    "I have worked with organizations such as Hewlett Packard Enterprise and IBM where I contributed to improving infrastructure automation, cloud deployment workflows, and debugging tools for enterprise applications. These experiences strengthened my ability to build systems that are reliable, maintainable, and scalable.",
    "Beyond technical development, I bring a leadership mindset to engineering. I focus on understanding problems deeply, collaborating across teams, and delivering solutions that create real impact. I enjoy taking ownership of projects from idea to deployment and continuously improving systems based on feedback and performance."
  ]

  const codingProfiles = [
    { label: 'GitHub', href: contactInfo.github, icon: githubIcon },
    { label: 'LeetCode', href: contactInfo.leetcode, icon: leetcodeIcon },
    { label: 'Codeforces', href: contactInfo.codeforces, icon: codeforcesIcon },
    { label: 'CodeChef', href: contactInfo.codechef, icon: codechefIcon },
    { label: 'LinkedIn', href: contactInfo.linkedIn, icon: linkedinIcon },
  ]

  return (
    <>
      <SectionHeader
        variant="compact"
        title="About"
        subtitle="Professional background and coding profiles."
      />
      <section className="section-padding">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10"
          >
            <div className="max-w-2xl lg:pr-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
                About Me
              </h2>
              <div className="mt-6 space-y-5 text-[var(--color-text-muted)]">
                {summaryParagraphs.map((p, i) => (
                  <p key={i} className="max-w-prose leading-7">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="surface-card p-5 md:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                Coding Profiles
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {codingProfiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card surface-card-hover flex h-32 flex-col items-center justify-center gap-3 p-4 text-center no-underline"
                  >
                    <img
                      src={profile.icon}
                      alt={`${profile.label} icon`}
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-text)]">
                      {profile.label}
                    </span>
                  </a>
                ))}
              </div>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                Worked With
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <img
                  src={hpeLogo}
                  alt="Hewlett Packard Enterprise"
                  className="h-14 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-3 object-contain"
                  loading="lazy"
                />
                <img
                  src={ibmLogo}
                  alt="IBM"
                  className="h-14 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-3 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
