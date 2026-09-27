import { useMemo, useState } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/shared/Navbar'
import Footer from '../../components/shared/Footer'
import WhatsAppButton from '../../components/shared/WhatsAppButton'

import {
  constructionProjects,
  ongoingProjects,
} from '../../data/construction'

function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <button
        type="button"
        onClick={() => onClick(project)}
        className="block w-full text-left"
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[24px] bg-neutral-200">
          <div className="aspect-[4/3] overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
                onError={(event) => {
                  console.error(
                    'Project image failed:',
                    project.image
                  )

                  event.currentTarget.style.display = 'none'
                }}
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                Image unavailable
              </div>
            )}
          </div>

          {/* DARK GRADIENT */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          {/* STATUS */}
          <div className="absolute left-4 top-4">
            <span
              className={`rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] backdrop-blur-md ${
                project.status === 'Ongoing'
                  ? 'border-white/20 bg-black/45 text-white'
                  : 'border-white/30 bg-white/90 text-neutral-900'
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* OPEN ICON */}
          <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRight size={17} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                {project.title}
              </h3>

              <div className="mt-2 flex items-center gap-1.5 text-sm text-neutral-400">
                <MapPin size={13} />
                <span>{project.location}</span>
              </div>
            </div>
          </div>

          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a47d48]">
            {project.category}
          </p>
        </div>
      </button>
    </motion.article>
  )
}

function ProjectLightbox({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition hover:bg-black"
              aria-label="Close"
            >
              ×
            </button>

            {/* IMAGE */}
            <div className="bg-neutral-100">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-[72vh] w-full object-contain"
              />
            </div>

            {/* DETAILS */}
            <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a47d48]">
                  {project.status} · {project.category}
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                  {project.title}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-200">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ConstructionProjects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  /*
   * IMPORTANT:
   * The project page must contain BOTH:
   * 1. ongoingProjects
   * 2. constructionProjects
   */
  const allProjects = useMemo(
    () => [...ongoingProjects, ...constructionProjects],
    [],
  )

  const filters = [
    'All',
    'Ongoing',
    'Completed',
    'Residential',
    'Commercial',
  ]

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return allProjects
    }

    if (activeFilter === 'Ongoing') {
      return allProjects.filter(
        (project) => project.status === 'Ongoing',
      )
    }

    if (activeFilter === 'Completed') {
      return allProjects.filter(
        (project) => project.status === 'Completed',
      )
    }

    return allProjects.filter(
      (project) => project.category === activeFilter,
    )
  }, [activeFilter, allProjects])

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-neutral-950">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="border-b border-neutral-200 bg-[#f7f6f2]">
        <div className="jp-container">
          <div className="mx-auto max-w-4xl py-24 text-center sm:py-28 lg:py-32">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a47d48]">
              JP Wings Construction & Developers
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Our Projects
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
              Explore selected residential and commercial construction
              projects by JP Wings Construction & Developers.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <main className="jp-section">
        <div className="jp-container">
          {/* FILTERS */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                    active
                      ? 'border-neutral-950 bg-neutral-950 text-white'
                      : 'border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400 hover:text-neutral-950'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>

          {/* PROJECT COUNT */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-xs text-neutral-400">
              Showing{' '}
              <span className="font-semibold text-neutral-950">
                {filteredProjects.length}
              </span>{' '}
              {filteredProjects.length === 1
                ? 'project'
                : 'projects'}
            </p>

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              {activeFilter}
            </p>
          </div>

          {/* GRID */}
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={setSelectedProject}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="rounded-[28px] border border-neutral-200 bg-white px-6 py-20 text-center">
              <p className="text-sm text-neutral-500">
                No projects available in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-neutral-950 py-24 text-white sm:py-28">
        <div className="jp-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c6a16b]">
              Start Your Project
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Planning a new project?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-400">
              Discuss your construction requirements with JP Wings
              Construction & Developers.
            </p>

            <Link
              to="/construction/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-neutral-950 transition-transform duration-300 hover:scale-[1.03]"
            >
              Discuss a Project
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />

      {/* LIGHTBOX */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default ConstructionProjects