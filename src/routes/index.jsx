import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Experience = lazy(() => import('../pages/Experience'))
const Projects = lazy(() => import('../pages/Projects'))
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'))
const Skills = lazy(() => import('../pages/Skills'))
const Education = lazy(() => import('../pages/Education'))
const Contact = lazy(() => import('../pages/Contact'))

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]" />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'experience', element: <Experience /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:slug', element: <ProjectDetail /> },
      { path: 'skills', element: <Skills /> },
      { path: 'education', element: <Education /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
