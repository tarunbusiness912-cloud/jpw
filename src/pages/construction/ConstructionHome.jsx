import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

import Navbar from '../../components/shared/Navbar'
import Footer from '../../components/shared/Footer'
import WhatsAppButton from '../../components/shared/WhatsAppButton'

import ConstructionHero from '../../components/construction/ConstructionHero'
import ServiceCard from '../../components/construction/ServiceCard'
import PackageCard from '../../components/construction/PackageCard'
import ProjectCard from '../../components/construction/ProjectCard'
import ProjectLightbox from '../../components/construction/ProjectLightbox'

import {
  constructionServices,
  constructionPackages,
  constructionProjects,
  ongoingProjects,
} from '../../data/construction'

function ConstructionHome() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f6f2] text-neutral-950">
      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <ConstructionHero />


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="bg-white">
          <div className="jp-container">
            <div
              className="
                grid
                gap-8
                py-16
                sm:py-20
                lg:grid-cols-[0.7fr_1.3fr]
                lg:items-center
                lg:gap-20
                lg:py-24
              "
            >
              {/* LEFT */}

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#a47d48]
                    sm:text-xs
                  "
                >
                  JP Wings Construction & Developers
                </p>

                <h2
                  className="
                    mt-4
                    font-['Manrope']
                    text-3xl
                    font-700
                    leading-[1.05]
                    tracking-[-0.04em]
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Built around
                  <br />
                  your requirements.
                </h2>
              </div>


              {/* RIGHT */}

              <div>
                <p
                  className="
                    max-w-2xl
                    text-base
                    leading-8
                    text-neutral-600
                  "
                >
                  JP Wings Construction & Developers provides
                  construction solutions tailored to the needs of
                  each project, with options that can be customized
                  according to client requirements.
                </p>

                <Link
                  to="/construction/contact"
                  className="
                    group
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-neutral-950
                  "
                >
                  Discuss your project

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-300
                      transition-all
                      duration-300
                      group-hover:border-neutral-950
                      group-hover:bg-neutral-950
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="bg-[#f7f6f2]">
          <div className="jp-container">
            <div className="py-16 sm:py-20 lg:py-24">

              {/* HEADER */}

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-[#a47d48]
                      sm:text-xs
                    "
                  >
                    Services
                  </p>

                  <h2
                    className="
                      mt-4
                      font-['Manrope']
                      text-3xl
                      font-700
                      tracking-[-0.04em]
                      sm:text-4xl
                      md:text-5xl
                    "
                  >
                    What we do.
                  </h2>
                </div>
              </div>


              {/* SERVICE CARDS */}

              <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {constructionServices.map((service, index) => (
                  <motion.div
                    key={service.number}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                    }}
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            STARTING PRICE
        ===================================================== */}

        <section className="bg-neutral-950 text-white">
          <div className="jp-container">
            <div
              className="
                flex
                flex-col
                gap-5
                py-10
                sm:py-12
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#d3b27c]
                  "
                >
                  Starting construction price
                </p>

                <p
                  className="
                    mt-2
                    text-3xl
                    font-semibold
                    tracking-tight
                    sm:text-4xl
                  "
                >
                  ₹2,400

                  <span
                    className="
                      ml-2
                      text-sm
                      font-normal
                      text-white/40
                    "
                  >
                    / sq ft
                  </span>
                </p>
              </div>

              <p
                className="
                  max-w-md
                  text-xs
                  leading-6
                  text-white/45
                "
              >
                Final pricing depends on project requirements
                and quotation.
              </p>
            </div>
          </div>
        </section>


        {/* =====================================================
            PACKAGES
        ===================================================== */}

        <section className="bg-white">
          <div className="jp-container">
            <div className="py-16 sm:py-20 lg:py-24">

              {/* HEADER */}

              <div className="flex items-end justify-between gap-5">
                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-[#a47d48]
                      sm:text-xs
                    "
                  >
                    Packages
                  </p>

                  <h2
                    className="
                      mt-4
                      font-['Manrope']
                      text-3xl
                      font-700
                      tracking-[-0.04em]
                      sm:text-4xl
                      md:text-5xl
                    "
                  >
                    Choose your package.
                  </h2>
                </div>

                <Link
                  to="/construction/packages"
                  className="
                    hidden
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    sm:inline-flex
                  "
                >
                  View all

                  <ArrowUpRight size={16} />
                </Link>
              </div>


              {/* PACKAGE CARDS */}

              <div className="mt-9 grid gap-4 lg:grid-cols-3">
                {constructionPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.07,
                    }}
                  >
                    <PackageCard
                      {...pkg}
                      featured={pkg.id === 'premium'}
                    />
                  </motion.div>
                ))}
              </div>


              {/* MOBILE LINK */}

              <Link
                to="/construction/packages"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  sm:hidden
                "
              >
                View all packages

                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>


        {/* =====================================================
            ONGOING PROJECTS
        ===================================================== */}

        <section className="bg-neutral-950 text-white">
          <div className="jp-container">
            <div className="py-16 sm:py-20 lg:py-24">

              {/* HEADER */}

              <div
                className="
                  flex
                  flex-col
                  gap-6
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-[#d3b27c]
                      sm:text-xs
                    "
                  >
                    Currently underway
                  </p>

                  <h2
                    className="
                      mt-4
                      font-['Manrope']
                      text-3xl
                      font-700
                      tracking-[-0.04em]
                      sm:text-4xl
                      md:text-5xl
                    "
                  >
                    Ongoing projects.
                  </h2>
                </div>

                <div className="flex flex-col items-start gap-4">
                  <p
                    className="
                      max-w-md
                      text-sm
                      leading-7
                      text-white/45
                    "
                  >
                    Explore construction projects currently
                    underway with JP Wings Construction &
                    Developers.
                  </p>

                  <Link
                    to="/construction/projects"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    View all projects

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        transition-all
                        duration-300
                        group-hover:border-white
                        group-hover:bg-white
                        group-hover:text-neutral-950
                      "
                    >
                      <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>


              {/* ONGOING PROJECT GRID */}

              <div
                className="
                  mt-10
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >
                {ongoingProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.1,
                    }}
                  >
                    <ProjectCard
                      project={project}
                      onClick={setSelectedProject}
                      dark
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            SELECTED PROJECTS
        ===================================================== */}

        <section className="bg-[#f7f6f2]">
          <div className="jp-container">
            <div className="py-16 sm:py-20 lg:py-24">

              {/* HEADER */}

              <div className="flex items-end justify-between gap-5">
                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-[#a47d48]
                      sm:text-xs
                    "
                  >
                    Projects
                  </p>

                  <h2
                    className="
                      mt-4
                      font-['Manrope']
                      text-3xl
                      font-700
                      tracking-[-0.04em]
                      sm:text-4xl
                      md:text-5xl
                    "
                  >
                    Selected work.
                  </h2>
                </div>

                <Link
                  to="/construction/projects"
                  className="
                    hidden
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    sm:inline-flex
                  "
                >
                  View projects

                  <ArrowUpRight size={16} />
                </Link>
              </div>


              {/* PROJECT GRID */}

              <div
                className="
                  mt-9
                  grid
                  gap-x-5
                  gap-y-10
                  sm:grid-cols-2
                "
              >
                {constructionProjects.slice(0, 4).map(
                  (project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.1,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.06,
                      }}
                    >
                      <ProjectCard
                        project={project}
                        onClick={setSelectedProject}
                      />
                    </motion.div>
                  ),
                )}
              </div>


              {/* MOBILE LINK */}

              <Link
                to="/construction/projects"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  sm:hidden
                "
              >
                View all projects

                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="bg-[#c7a26a]">
          <div className="jp-container">
            <div
              className="
                flex
                flex-col
                gap-7
                py-16
                sm:py-20
                lg:flex-row
                lg:items-end
                lg:justify-between
                lg:py-24
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-neutral-800
                  "
                >
                  Start a project
                </p>

                <h2
                  className="
                    mt-4
                    font-['Manrope']
                    text-3xl
                    font-700
                    leading-[1.05]
                    tracking-[-0.04em]
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Have a project
                  <br />
                  in mind?
                </h2>
              </div>

              <Link
                to="/construction/contact"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-neutral-950
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-neutral-800
                "
              >
                Contact JP Wings

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </div>
          </div>
        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      <WhatsAppButton />


      {/* =====================================================
          PROJECT LIGHTBOX
      ===================================================== */}

      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  )
}

export default ConstructionHome