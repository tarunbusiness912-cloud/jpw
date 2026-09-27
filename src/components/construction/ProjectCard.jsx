import { ArrowUpRight, MapPin } from 'lucide-react'

function ProjectCard({ project, onClick, dark = false }) {
  // Prevent the entire page from crashing if bad data is supplied.
  if (!project) {
    return null
  }

  const {
    title = 'Project',
    category = 'Construction',
    status = 'Project',
    location = 'Davanagere, Karnataka',
    image,
    isDemo = false,
  } = project

  return (
    <article className="group">
      {/* IMAGE */}
      <button
        type="button"
        onClick={() => onClick?.(project)}
        className="
          relative
          block
          w-full
          cursor-zoom-in
          overflow-hidden
          rounded-[22px]
          bg-neutral-200
          text-left
        "
        aria-label={`View ${title}`}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="
              aspect-[16/10]
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.035]
            "
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-neutral-200 text-sm text-neutral-400">
            Image unavailable
          </div>
        )}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
            opacity-70
            transition-opacity
            duration-500
            group-hover:opacity-90
          "
        />

        {isDemo && (
          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              border
              border-white/20
              bg-black/40
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
              backdrop-blur-md
            "
          >
            Demo image
          </span>
        )}

        <div
          className="
            absolute
            bottom-4
            right-4
            flex
            h-10
            w-10
            translate-y-2
            items-center
            justify-center
            rounded-full
            bg-white
            text-neutral-950
            opacity-0
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={16} />
        </div>
      </button>

      {/* PROJECT INFO */}
      <div className="mt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              className={`text-lg font-semibold tracking-tight sm:text-xl ${
                dark ? 'text-white' : 'text-neutral-950'
              }`}
            >
              {title}
            </h3>

            <div
              className={`mt-2 flex items-center gap-1.5 text-xs ${
                dark ? 'text-white/45' : 'text-neutral-400'
              }`}
            >
              <MapPin size={12} />
              <span>{location}</span>
            </div>
          </div>

          <span
            className={`shrink-0 rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] ${
              dark
                ? 'border-white/15 text-white/55'
                : 'border-neutral-200 text-neutral-500'
            }`}
          >
            {status}
          </span>
        </div>

        <p
          className={`mt-3 text-xs font-medium uppercase tracking-[0.12em] ${
            dark ? 'text-[#d3b27c]' : 'text-[#a47d48]'
          }`}
        >
          {category}
        </p>
      </div>
    </article>
  )
}

export default ProjectCard