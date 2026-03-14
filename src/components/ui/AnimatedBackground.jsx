export default function AnimatedBackground({ variant = 'grid' }) {
  if (variant === 'grid') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
          }}
        />
        <div
          className="absolute -left-24 top-0 h-72 w-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.12), transparent 70%)' }}
        />
        <div
          className="absolute -bottom-12 right-0 h-72 w-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.08), transparent 72%)' }}
        />
      </div>
    )
  }

  return null
}
