import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ConstructionHome from './pages/construction/ConstructionHome'
import ConstructionPackages from './pages/construction/ConstructionPackages'
import ConstructionProjects from './pages/construction/ConstructionProjects'
import ConstructionContact from './pages/construction/ConstructionContact'

import ScrollToTop from './components/shared/ScrollToTop'

function InteriorsPlaceholder() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f6f2] px-6">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a47d48]">
          JP Wings Interiors
        </p>

        <h1 className="mt-4 text-4xl font-semibold">
          Interiors
        </h1>

        <p className="mt-3 text-neutral-500">
          Interiors section is being developed by Member 2.
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/construction"
          element={<ConstructionHome />}
        />

        <Route
          path="/construction/packages"
          element={<ConstructionPackages />}
        />

        <Route
          path="/construction/projects"
          element={<ConstructionProjects />}
        />

        <Route
          path="/construction/contact"
          element={<ConstructionContact />}
        />

        <Route
          path="/interiors"
          element={<InteriorsPlaceholder />}
        />

        <Route
          path="/interiors/services"
          element={<InteriorsPlaceholder />}
        />

        <Route
          path="/interiors/portfolio"
          element={<InteriorsPlaceholder />}
        />

        <Route
          path="/interiors/contact"
          element={<InteriorsPlaceholder />}
        />

        <Route
          path="*"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App