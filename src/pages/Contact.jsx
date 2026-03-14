import { motion } from 'framer-motion'
import { Mail, Copy, Check, MapPin } from 'lucide-react'
import { useState } from 'react'
import SectionHeader from '../components/ui/SectionHeader'
import { contactInfo, socialLinks } from '../data/contact'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent('Portfolio Inquiry')}&body=${encodeURIComponent('Hello Jay,\n\nI found your portfolio and would like to connect.\n\n')}`
  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(contactInfo.email)}`

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <SectionHeader
        variant="compact"
        title="Contact"
        subtitle="Get in touch for collaboration or opportunities."
      />
      <section className="section-padding-sm">
        <div className="site-container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="surface-card p-8 text-center md:p-12"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
              <Mail size={28} className="text-[var(--color-cyan)]" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-[var(--color-text)]">
              Let's Connect
            </h3>
            <p className="mx-auto mt-3 max-w-md text-[var(--color-text-muted)]">
              I'm open to collaboration, full-time roles, and interesting problems.
              Feel free to reach out via email.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={mailtoLink}
                className="btn-primary w-full sm:w-auto"
              >
                <Mail size={18} />
                Email Me
              </a>
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                Open in Gmail
              </a>
              <button
                onClick={handleCopyEmail}
                className="btn-secondary w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Email
                  </>
                )}
              </button>
            </div>

            <p className="mt-6 text-sm text-[var(--color-text-muted)]">
              or email me directly at{' '}
              <a
                href={mailtoLink}
                className="font-medium text-[var(--color-cyan)] no-underline hover:underline"
              >
                {contactInfo.email}
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <h4 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Connect with me
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.map(({ label, href, logo }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card surface-card-hover group flex items-center gap-3 px-5 py-3 no-underline"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2">
                    <img src={logo} alt={label} className="h-full w-full object-contain" />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex justify-center"
          >
            <div className="surface-card flex items-center gap-3 px-5 py-3">
              <MapPin size={18} className="text-[var(--color-accent)]" />
              <span className="text-sm text-[var(--color-text-muted)]">{contactInfo.location}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
