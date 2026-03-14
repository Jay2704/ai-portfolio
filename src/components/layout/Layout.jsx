import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTopButton from '../ui/BackToTopButton'
import ScrollProgress from '../ui/ScrollProgress'

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
}

export default function Layout() {
  const location = useLocation()

  return (
    <div className="px-2 py-3 md:px-4 md:py-6">
      <ScrollProgress />
      <div className="page-shell">
        <Navbar />
        <main className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <BackToTopButton />
    </div>
  )
}
