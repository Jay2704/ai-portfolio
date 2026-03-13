import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import ContactCard from '../components/ui/ContactCard'
import { contactInfo } from '../data/contact'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validate = (name, value) => {
    if (name === 'name') return value.trim().length >= 2 ? '' : 'Name must be at least 2 characters'
    if (name === 'email') {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(value) ? '' : 'Please enter a valid email'
    }
    if (name === 'message') return value.trim().length >= 10 ? '' : 'Message must be at least 10 characters'
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((s) => ({ ...s, [name]: value }))
    if (touched[name]) setErrors((e) => ({ ...e, [name]: validate(name, value) }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((e) => ({ ...e, [name]: validate(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTouched = { name: true, email: true, message: true }
    const newErrors = {
      name: validate('name', formState.name),
      email: validate('email', formState.email),
      message: validate('message', formState.message),
    }
    setTouched(newTouched)
    setErrors(newErrors)
    if (Object.values(newErrors).every((err) => !err)) {
      // Would send to backend or mailto
      alert('Form is valid. Hook up your backend or mailto here.')
    }
  }

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Get in touch for collaboration or opportunities."
      />
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <ContactCard
                type="Mail"
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
              <ContactCard
                type="Linkedin"
                label="LinkedIn"
                value="Profile"
                href={contactInfo.linkedIn}
              />
              <ContactCard
                type="Github"
                label="GitHub"
                value="Profile"
                href={contactInfo.github}
              />
              <ContactCard type="MapPin" label="Location" value={contactInfo.location} />
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-lg font-medium text-[var(--color-text)]">
                Send a message
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text-muted)]">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] focus:outline-none"
                    placeholder="Your name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-muted)]">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] focus:outline-none"
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text-muted)]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    className="mt-1 w-full resize-y rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/60 focus:border-[var(--color-accent)] focus:outline-none"
                    placeholder="Your message..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-lg border border-[var(--color-accent)] bg-[var(--color-accent)]/10 py-2.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/20"
              >
                Send message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  )
}
