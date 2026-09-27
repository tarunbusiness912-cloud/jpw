import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

function ConstructionHero() {
  return (
    <section className="overflow-hidden bg-[#f7f6f2]">
      <div className="jp-container">
        <div className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-20">

          {/* TEXT */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a47d48] sm:text-xs"
            >
              JP Wings Construction & Developers
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                font-['Manrope']
                text-[clamp(3rem,6vw,5.8rem)]
                font-800
                leading-[0.9]
                tracking-[-0.065em]
              "
            >
              Plan.
              <br />
              Build.
              <br />
              <span className="text-neutral-400">
                Develop.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="mt-6 max-w-md text-sm leading-7 text-neutral-600 sm:text-base"
            >
              Construction solutions shaped around your
              requirements, from planning to execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/construction/contact"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-2
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
                Discuss a project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/construction/projects"
                className="
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-300
                  bg-white/60
                  px-6
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:border-neutral-950
                  hover:bg-white
                "
              >
                View projects
              </Link>
            </motion.div>
          </div>

          {/* COMPACT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.02,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-[28px]">
              <img
                src="/images/construction/hero/construction-hero-01.jpeg"
                alt="JP Wings construction project"
                className="aspect-[4/3] max-h-[520px] w-full object-cover lg:aspect-[5/4]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
                  Construction
                </p>

                <p className="mt-1 text-lg font-semibold text-white">
                  JP Wings
                </p>
              </div>
            </div>

            {/* PRICE */}
            <div className="
              absolute
              -bottom-4
              right-4
              rounded-2xl
              border
              border-white/70
              bg-white/95
              px-4
              py-3
              shadow-lg
              backdrop-blur-xl
              sm:right-6
            ">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                Starting price
              </p>

              <p className="mt-1 text-base font-bold">
                ₹2,400
                <span className="ml-1 text-[10px] font-medium text-neutral-400">
                  / sq ft
                </span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ConstructionHero