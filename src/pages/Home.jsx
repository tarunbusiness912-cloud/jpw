import { ArrowUpRight, Building2, Home as HomeIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import WhatsAppButton from '../components/shared/WhatsAppButton'

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f6f2] text-neutral-950">
      <Navbar />

      <main>

        {/* =====================================================
            WELCOME HERO
        ===================================================== */}
        <section className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#c7a26a]/10 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-neutral-300/20 blur-3xl" />

          <div className="jp-container relative">
            <div className="flex min-h-[calc(100svh-84px)] flex-col items-center justify-center py-20 text-center sm:py-24 lg:py-28">

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src="/images/branding/jp-wings-logo.png"
                  alt="JP Wings Group"
                  className="
                    mx-auto
                    h-28
                    w-auto
                    object-contain
                    sm:h-36
                    lg:h-40
                  "
                />
              </motion.div>

              {/* Small heading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="
                  mt-8
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-[#a47d48]
                  sm:text-xs
                "
              >
                Welcome to JP Wings Group
              </motion.p>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-5
                  max-w-5xl
                  font-['Manrope']
                  text-[clamp(3rem,7vw,6.5rem)]
                  font-800
                  leading-[0.92]
                  tracking-[-0.065em]
                "
              >
                Building your dreams.
                <br />
                <span className="text-neutral-400">
                  Designing your lifestyle.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                className="
                  mt-7
                  max-w-2xl
                  text-sm
                  leading-7
                  text-neutral-500
                  sm:text-base
                  sm:leading-8
                "
              >
                From constructing your dream home to designing every
                detail of your interiors, JP Wings Group brings your
                vision to life with solutions tailored to your needs.
              </motion.p>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                }}
                className="mt-12 flex items-center gap-3 text-neutral-400"
              >
                <span className="h-px w-8 bg-neutral-300" />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
                  Explore our businesses
                </span>

                <span className="h-px w-8 bg-neutral-300" />
              </motion.div>

            </div>
          </div>
        </section>

        {/* =====================================================
            TWO BUSINESSES
        ===================================================== */}
        <section className="bg-white">
          <div className="jp-container">
            <div className="py-20 sm:py-24 md:py-28 lg:py-32">

              {/* Section heading */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-2xl text-center"
              >
                <p className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#a47d48]
                  sm:text-xs
                ">
                  Our businesses
                </p>

                <h2 className="
                  mt-5
                  font-['Manrope']
                  text-4xl
                  font-700
                  leading-[1.02]
                  tracking-[-0.045em]
                  sm:text-5xl
                  md:text-6xl
                ">
                  Choose what
                  <br />
                  <span className="text-neutral-400">
                    you need.
                  </span>
                </h2>

                <p className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-neutral-500
                  sm:text-base
                  sm:leading-8
                ">
                  Explore our construction and interior design
                  businesses and find the right solution for your
                  project.
                </p>
              </motion.div>

              {/* BUSINESS CARDS */}
              <div className="mx-auto mt-12 max-w-6xl">

                <div className="grid gap-5 lg:grid-cols-2">

                  {/* ==========================================
                      CONSTRUCTION
                  ========================================== */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
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
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to="/construction"
                      className="
                        group
                        relative
                        block
                        min-h-[520px]
                        overflow-hidden
                        rounded-[30px]
                        bg-neutral-950
                        sm:min-h-[580px]
                      "
                    >
                      {/* Image */}
                      <img
                        src="/images/construction/hero/construction-hero-01.jpeg"
                        alt="JP Wings Construction and Developers"
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          opacity-75
                          transition-transform
                          duration-[1.3s]
                          ease-out
                          group-hover:scale-[1.045]
                        "
                      />

                      {/* Overlay */}
                      <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/40
                        to-black/10
                      " />

                      {/* Content */}
                      <div className="
                        absolute
                        inset-x-0
                        bottom-0
                        p-7
                        sm:p-9
                        lg:p-10
                      ">

                        <div className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          text-white
                          backdrop-blur-md
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        ">
                          <Building2
                            size={23}
                            strokeWidth={1.6}
                          />
                        </div>

                        <p className="
                          mt-8
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.28em]
                          text-[#d3b27c]
                        ">
                          Business 01
                        </p>

                        <h3 className="
                          mt-3
                          max-w-md
                          font-['Manrope']
                          text-3xl
                          font-700
                          leading-tight
                          tracking-[-0.04em]
                          text-white
                          sm:text-4xl
                        ">
                          JP Wings
                          <br />
                          Construction & Developers
                        </h3>

                        <p className="
                          mt-4
                          max-w-md
                          text-sm
                          leading-7
                          text-white/55
                        ">
                          Plan. Build. Develop.
                        </p>

                        <div className="
                          mt-7
                          flex
                          items-center
                          justify-between
                          border-t
                          border-white/15
                          pt-5
                        ">
                          <span className="
                            text-sm
                            font-medium
                            text-white/70
                          ">
                            Explore Construction
                          </span>

                          <div className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-neutral-950
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                          ">
                            <ArrowUpRight size={18} />
                          </div>
                        </div>

                      </div>
                    </Link>
                  </motion.div>

                  {/* ==========================================
                      INTERIORS
                  ========================================== */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
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
                      duration: 0.75,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to="/interiors"
                      className="
                        group
                        relative
                        block
                        min-h-[520px]
                        overflow-hidden
                        rounded-[30px]
                        bg-neutral-950
                        sm:min-h-[580px]
                      "
                    >
                      {/* Image */}
                      <img
                        src="/images/construction/hero/construction-hero-02.jpeg"
                        alt="JP Wings Interiors"
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          opacity-80
                          transition-transform
                          duration-[1.3s]
                          ease-out
                          group-hover:scale-[1.045]
                        "
                      />

                      {/* Overlay */}
                      <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/40
                        to-black/10
                      " />

                      {/* Content */}
                      <div className="
                        absolute
                        inset-x-0
                        bottom-0
                        p-7
                        sm:p-9
                        lg:p-10
                      ">

                        <div className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          text-white
                          backdrop-blur-md
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        ">
                          <HomeIcon
                            size={23}
                            strokeWidth={1.6}
                          />
                        </div>

                        <p className="
                          mt-8
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.28em]
                          text-[#d3b27c]
                        ">
                          Business 02
                        </p>

                        <h3 className="
                          mt-3
                          max-w-md
                          font-['Manrope']
                          text-3xl
                          font-700
                          leading-tight
                          tracking-[-0.04em]
                          text-white
                          sm:text-4xl
                        ">
                          JP Wings
                          <br />
                          Interiors
                        </h3>

                        <p className="
                          mt-4
                          max-w-md
                          text-sm
                          leading-7
                          text-white/55
                        ">
                          Design. Create. Experience.
                        </p>

                        <div className="
                          mt-7
                          flex
                          items-center
                          justify-between
                          border-t
                          border-white/15
                          pt-5
                        ">
                          <span className="
                            text-sm
                            font-medium
                            text-white/70
                          ">
                            Explore Interiors
                          </span>

                          <div className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-neutral-950
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                          ">
                            <ArrowUpRight size={18} />
                          </div>
                        </div>

                      </div>
                    </Link>
                  </motion.div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            GROUP STATEMENT
        ===================================================== */}
        <section className="bg-[#f7f6f2]">
          <div className="jp-container">
            <div className="py-20 sm:py-24 md:py-28 lg:py-36">

              <motion.div
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="mx-auto max-w-5xl text-center"
              >
                <p className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#a47d48]
                  sm:text-xs
                ">
                  JP Wings Group
                </p>

                <h2 className="
                  mt-6
                  font-['Manrope']
                  text-4xl
                  font-700
                  leading-[1.02]
                  tracking-[-0.05em]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                ">
                  Building your dreams.
                  <br />
                  <span className="text-neutral-400">
                    Designing your lifestyle.
                  </span>
                </h2>

                <p className="
                  mx-auto
                  mt-8
                  max-w-2xl
                  text-sm
                  leading-7
                  text-neutral-500
                  sm:text-base
                  sm:leading-8
                ">
                  From construction and development to interiors,
                  JP Wings Group brings together the services that
                  help shape the spaces you imagine.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT CTA
        ===================================================== */}
        <section className="bg-[#c7a26a]">
          <div className="jp-container">

            <div className="
              flex
              flex-col
              gap-8
              py-20
              sm:py-24
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:py-28
            ">

              <div>
                <p className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-neutral-800
                  sm:text-xs
                ">
                  Start a conversation
                </p>

                <h2 className="
                  mt-5
                  font-['Manrope']
                  text-4xl
                  font-700
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-neutral-950
                  sm:text-5xl
                  md:text-6xl
                ">
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
                  min-h-[52px]
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-neutral-950
                  px-7
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

      <Footer />

      <WhatsAppButton />
    </div>
  )
}

export default Home