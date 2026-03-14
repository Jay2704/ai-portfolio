import { motion } from 'framer-motion'

export default function ProfileImageCard({ src, alt = 'Profile' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative mx-auto w-full"
    >
      <div className="pointer-events-none absolute -left-8 top-6 h-16 w-16 rounded-full bg-teal-100 md:h-20 md:w-20" />
      <div className="pointer-events-none absolute -right-7 bottom-8 h-20 w-20 rounded-full bg-cyan-100 md:h-24 md:w-24" />
      <div className="pointer-events-none absolute inset-3 rounded-full bg-gradient-to-br from-teal-50 to-sky-100" />
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white p-3 shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
        <div className="aspect-square overflow-hidden rounded-[1.5rem]">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            width={400}
            height={400}
            loading="eager"
          />
        </div>
      </div>
    </motion.div>
  )
}
