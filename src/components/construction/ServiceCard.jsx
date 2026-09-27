import { ArrowUpRight } from 'lucide-react'


function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
}) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-neutral-200
        bg-[#f7f6f2]
        p-6
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-neutral-300
        hover:bg-neutral-950
        hover:text-white
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        sm:p-7
        lg:min-h-[330px]
        lg:p-8
      "
    >

      {/* TOP */}

      <div className="flex items-start justify-between">

        <span
          className="
            text-xs
            font-bold
            tracking-[0.15em]
            text-[#a47d48]
            transition-colors
            duration-500
            group-hover:text-[#d3b27c]
          "
        >
          {number}
        </span>


        <div
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
            text-neutral-900
            transition-all
            duration-500
            group-hover:border-white/10
            group-hover:bg-white/10
            group-hover:text-white
          "
        >
          {Icon && <Icon size={20} strokeWidth={1.7} />}
        </div>

      </div>


      {/* CONTENT */}

      <div className="mt-16 sm:mt-20">

        <h3
          className="
            max-w-[230px]
            text-xl
            font-semibold
            leading-tight
            tracking-tight
            sm:text-[22px]
          "
        >
          {title}
        </h3>


        <p
          className="
            mt-4
            max-w-[280px]
            text-sm
            leading-7
            text-neutral-500
            transition-colors
            duration-500
            group-hover:text-white/55
          "
        >
          {description}
        </p>

      </div>


      {/* ARROW */}

      <div
        className="
          absolute
          bottom-6
          right-6
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-neutral-200
          text-neutral-500
          transition-all
          duration-500
          group-hover:border-white/10
          group-hover:bg-white
          group-hover:text-neutral-950
          sm:bottom-7
          sm:right-7
        "
      >
        <ArrowUpRight size={16} />
      </div>

    </article>
  )
}


export default ServiceCard