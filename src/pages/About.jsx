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
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12"
          >
            <div className="max-w-2xl lg:pr-4">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
                About Me
              </h2>
              <div className="mt-6 space-y-5 text-slate-300">
                {summaryParagraphs.map((p, i) => (
                  <p key={i} className="max-w-prose leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5 shadow-[0_0_40px_rgba(34,211,238,0.06)] md:p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Coding Profiles
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {codingProfiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-36 rounded-2xl border border-slate-700 bg-slate-950/40 p-4 text-center no-underline transition-all duration-300 hover:translate-y-[-3px] hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] flex flex-col items-center justify-center gap-2"
                  >
                    <img
                      src={profile.icon}
                      alt={`${profile.label} icon`}
                      className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-sm text-slate-300 transition-colors duration-300 group-hover:text-[var(--color-text)]">
                      {profile.label}
                    </span>
                  </a>
                ))}
              </div>

              <h3 className="mt-10 text-sm uppercase tracking-wider text-slate-400">
                Worked With
              </h3>
              <div className="mt-6 flex flex-wrap items-center gap-10">
                <img
                  src={hpeLogo}
                  alt="Hewlett Packard Enterprise"
                  className="h-10 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0 hover:opacity-100 hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.35)]"
                />
                <img
                  src={ibmLogo}
                  alt="IBM"
                  className="h-10 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0 hover:opacity-100 hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.35)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
