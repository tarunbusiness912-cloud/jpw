import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [constructionOpen, setConstructionOpen] = useState(false)

  const location = useLocation()

  const isConstructionActive =
    location.pathname.startsWith('/construction')

  const closeMenu = () => {
    setOpen(false)
    setConstructionOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#f7f6f2]/90 backdrop-blur-xl">
      <div className="jp-container">
        <div className="flex h-[72px] items-center justify-between lg:h-[80px]">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group shrink-0"
          >
            <img
              src="/images/branding/jp-wings-logo.png"
              alt="JP Wings Group"
              className="
                h-11
                w-auto
                object-contain
                transition-transform
                duration-300
                group-hover:scale-[1.03]
                sm:h-12
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">

            {/* Home */}
            <Link
              to="/"
              className={`
                relative
                py-2
                text-[13px]
                font-medium
                transition-colors
                duration-300
                ${
                  location.pathname === '/'
                    ? 'text-neutral-950'
                    : 'text-neutral-500 hover:text-neutral-950'
                }
              `}
            >
              Home

              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-px
                  bg-neutral-950
                  transition-all
                  duration-300
                  ${
                    location.pathname === '/'
                      ? 'w-full'
                      : 'w-0'
                  }
                `}
              />
            </Link>

            {/* Construction Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setConstructionOpen(true)}
              onMouseLeave={() => setConstructionOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setConstructionOpen((value) => !value)
                }
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-1.5
                  py-2
                  text-[13px]
                  font-medium
                  transition-colors
                  duration-300
                  ${
                    isConstructionActive
                      ? 'text-neutral-950'
                      : 'text-neutral-500 hover:text-neutral-950'
                  }
                `}
              >
                Construction

                <ChevronDown
                  size={14}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      constructionOpen
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-px
                    bg-neutral-950
                    transition-all
                    duration-300
                    ${
                      isConstructionActive
                        ? 'w-full'
                        : 'w-0'
                    }
                  `}
                />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {constructionOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      absolute
                      left-1/2
                      top-full
                      mt-3
                      w-[230px]
                      -translate-x-1/2
                      overflow-hidden
                      rounded-2xl
                      border
                      border-black/[0.07]
                      bg-white
                      p-2
                      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                    "
                  >
                    <Link
                      to="/construction"
                      onClick={() =>
                        setConstructionOpen(false)
                      }
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        transition-colors
                        hover:bg-[#f7f6f2]
                      "
                    >
                      <div>
                        <p className="text-sm font-semibold text-neutral-950">
                          Overview
                        </p>
                        <p className="mt-0.5 text-[11px] text-neutral-400">
                          Construction & Developers
                        </p>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="
                          text-neutral-400
                          transition-transform
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </Link>

                    <Link
                      to="/construction/projects"
                      onClick={() =>
                        setConstructionOpen(false)
                      }
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        transition-colors
                        hover:bg-[#f7f6f2]
                      "
                    >
                      <div>
                        <p className="text-sm font-semibold text-neutral-950">
                          Projects
                        </p>
                        <p className="mt-0.5 text-[11px] text-neutral-400">
                          Selected construction work
                        </p>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="
                          text-neutral-400
                          transition-transform
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </Link>

                    <Link
                      to="/construction/packages"
                      onClick={() =>
                        setConstructionOpen(false)
                      }
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        transition-colors
                        hover:bg-[#f7f6f2]
                      "
                    >
                      <div>
                        <p className="text-sm font-semibold text-neutral-950">
                          Packages
                        </p>
                        <p className="mt-0.5 text-[11px] text-neutral-400">
                          Economy · Premium · Luxury
                        </p>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="
                          text-neutral-400
                          transition-transform
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interiors */}
            <Link
              to="/interiors"
              className={`
                relative
                py-2
                text-[13px]
                font-medium
                transition-colors
                duration-300
                ${
                  location.pathname.startsWith('/interiors')
                    ? 'text-neutral-950'
                    : 'text-neutral-500 hover:text-neutral-950'
                }
              `}
            >
              Interiors

              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-px
                  bg-neutral-950
                  transition-all
                  duration-300
                  ${
                    location.pathname.startsWith('/interiors')
                      ? 'w-full'
                      : 'w-0'
                  }
                `}
              />
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/construction/contact"
            className="
              hidden
              min-h-[44px]
              items-center
              gap-2
              rounded-full
              bg-neutral-950
              px-5
              text-[13px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-neutral-800
              lg:inline-flex
            "
          >
            Discuss a project
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-neutral-200
              bg-white
              text-neutral-950
              transition-all
              duration-300
              hover:border-neutral-300
              lg:hidden
            "
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              overflow-hidden
              border-t
              border-black/[0.06]
              bg-[#f7f6f2]
              lg:hidden
            "
          >
            <div className="jp-container py-5">

              {/* Home */}
              <Link
                to="/"
                onClick={closeMenu}
                className="
                  flex
                  min-h-[52px]
                  items-center
                  justify-between
                  border-b
                  border-black/[0.06]
                  text-[15px]
                  font-medium
                  text-neutral-950
                "
              >
                Home
                <ArrowUpRight size={17} />
              </Link>

              {/* Construction accordion */}
              <div className="border-b border-black/[0.06]">
                <button
                  type="button"
                  onClick={() =>
                    setConstructionOpen(
                      (value) => !value
                    )
                  }
                  className="
                    flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-between
                    text-[15px]
                    font-medium
                    text-neutral-950
                  "
                >
                  <span>Construction</span>

                  <ChevronDown
                    size={18}
                    className={`
                      transition-transform
                      duration-300
                      ${
                        constructionOpen
                          ? 'rotate-180'
                          : ''
                      }
                    `}
                  />
                </button>

                <AnimatePresence>
                  {constructionOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: 'auto',
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mb-3 ml-3 border-l border-neutral-200 pl-4">

                        <Link
                          to="/construction"
                          onClick={closeMenu}
                          className="
                            flex
                            min-h-[44px]
                            items-center
                            justify-between
                            text-sm
                            text-neutral-600
                            transition-colors
                            hover:text-neutral-950
                          "
                        >
                          Overview
                          <ArrowUpRight size={15} />
                        </Link>

                        <Link
                          to="/construction/projects"
                          onClick={closeMenu}
                          className="
                            flex
                            min-h-[44px]
                            items-center
                            justify-between
                            text-sm
                            text-neutral-600
                            transition-colors
                            hover:text-neutral-950
                          "
                        >
                          Projects
                          <ArrowUpRight size={15} />
                        </Link>

                        <Link
                          to="/construction/packages"
                          onClick={closeMenu}
                          className="
                            flex
                            min-h-[44px]
                            items-center
                            justify-between
                            text-sm
                            text-neutral-600
                            transition-colors
                            hover:text-neutral-950
                          "
                        >
                          Packages
                          <ArrowUpRight size={15} />
                        </Link>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Interiors */}
              <Link
                to="/interiors"
                onClick={closeMenu}
                className="
                  flex
                  min-h-[52px]
                  items-center
                  justify-between
                  border-b
                  border-black/[0.06]
                  text-[15px]
                  font-medium
                  text-neutral-950
                "
              >
                Interiors
                <ArrowUpRight size={17} />
              </Link>

              {/* CTA */}
              <Link
                to="/construction/contact"
                onClick={closeMenu}
                className="
                  mt-5
                  flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-neutral-950
                  px-6
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Discuss a project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar