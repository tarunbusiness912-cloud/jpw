import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, X } from 'lucide-react'

function ProjectLightbox({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black sm:right-7 sm:top-7"
          >
            <X size={20} />
          </button>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex max-h-[92vh] max-w-[1400px] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-[78vh] w-auto max-w-[92vw] object-contain sm:max-h-[82vh]"
              />
            </div>

            <div className="mt-4 flex w-full max-w-[900px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d3b27c]">
                  {project.status}
                </p>

                <h3 className="mt-1 truncate text-base font-semibold text-white sm:text-lg">
                  {project.title}
                </h3>

                <p className="mt-1 text-xs text-white/45">
                  {project.location}
                </p>
              </div>

              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 sm:flex">
                <ArrowUpRight size={17} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectLightbox