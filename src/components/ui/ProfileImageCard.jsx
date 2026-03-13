import { motion } from 'framer-motion'

export default function ProfileImageCard({ src, alt = 'Profile' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      {/* Outer ambient glow */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px] blur-[60px]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.25), transparent 60%)',
        }}
        aria-hidden
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ y: -12, scale: 1.02 }}
        className="relative"
      >
        {/* Gradient border container */}
        <div
          className="absolute -inset-[2px] rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #3B82F6, #22D3EE, #3B82F6)',
            opacity: 0.6,
          }}
          aria-hidden
        />

        {/* Animated gradient border glow */}
        <motion.div
          className="absolute -inset-[2px] rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #22D3EE, #3B82F6, #22D3EE)',
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />

        {/* Main card container */}
        <div className="relative rounded-2xl bg-[var(--color-surface)] p-1.5 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
          {/* Soft inner glow at top */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(180deg, rgba(34,211,238,0.08) 0%, transparent 40%)',
            }}
            aria-hidden
          />

          {/* Image container */}
          <div className="relative overflow-hidden rounded-xl bg-[var(--color-bg-elevated)]">
            {/* Subtle color overlay */}
            <div
              className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(34,211,238,0.2))',
              }}
              aria-hidden
            />

            <img
              src={src}
              alt={alt}
              className="aspect-square w-full object-cover"
              width={400}
              height={400}
              loading="eager"
            />

            {/* Inner edge highlights */}
            <div
              className="pointer-events-none absolute inset-0 rounded-xl"
              style={{
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -60px 100px rgba(2,6,23,0.5)',
              }}
              aria-hidden
            />

            {/* Bottom cyan reflection */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
              style={{
                background: 'linear-gradient(to top, rgba(34,211,238,0.12), transparent)',
              }}
              aria-hidden
            />
          </div>
        </div>

        {/* Corner accent glow */}
        <div
          className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)',
          }}
          aria-hidden
        />
      </motion.div>
    </motion.div>
  )
}
