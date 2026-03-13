import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTopButton from '../ui/BackToTopButton'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  )
}
