import { useEffect, useRef, useState } from 'react'

const defaultOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const opts = { ...defaultOptions, ...options }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, opts)
    observer.observe(el)
    return () => observer.disconnect()
  }, [opts.threshold, opts.rootMargin])

  return [ref, isVisible]
}
