import { ArrowUpRight, MapPin } from 'lucide-react'

function PackageCard({
  title,
  category,
  status,
  location,
  image,
  isDemo,
}) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-[22px] bg-neutral-200">
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

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
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
            items-center
            justify-center
            rounded-full
            bg-white
            text-neutral-950
            transition-all
            duration-300
            group-hover:scale-105
          "
        >
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950 sm:text-xl">
            {title}
          </h3>

          <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-400">
            <MapPin size={12} />
            <span>{location}</span>
          </div>
        </div>

        <span
          className="
            shrink-0
            rounded-full
            border
            border-neutral-200
            px-3
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-neutral-500
          "
        >
          {status}
        </span>
      </div>

      <p
        className="
          mt-3
          text-xs
          font-medium
          uppercase
          tracking-[0.12em]
          text-[#a47d48]
        "
      >
        {category}
      </p>
    </article>
  )
}

export default PackageCard