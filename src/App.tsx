import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import './styles/App.css'

// Lazy-load pages (only downloaded when visited)
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact'));

// Home page = Hero + Services
function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}

// Router layout - Header/Footer persist across all routes
function RootLayout() {
  return (
    <div className="smooth-scroll">
      <ScrollRestoration />
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

// Router config
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:slug', element: <ProjectDetail /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);


export const App = () => {
  return <RouterProvider router={router} />;
}
