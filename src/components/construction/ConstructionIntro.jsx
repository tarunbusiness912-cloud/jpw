import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

function ConstructionIntro() {
  const points = [
    'Planning and development support',
    'Construction solutions tailored to requirements',
    'Flexible approach for different project needs',
  ]

  return (
    <section className="bg-[#f7f6f2] px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

        {/* IMAGE */}

        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
            alt="Modern residential architecture"
            className="
              aspect-[4/5]
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.03]
              sm:aspect-[5/4]
              lg:aspect-[4/5]
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
            <div className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-neutral-900 shadow-lg backdrop-blur-md">
              JP Wings Construction & Developers
            </div>
          </div>
        </div>


        {/* CONTENT */}

        <div>

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a47d48] sm:text-xs">
            Construction & Developers
          </p>


          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              leading-[1.02]
              tracking-[-0.04em]
              sm:text-5xl
              md:text-[56px]
              lg:text-6xl
            "
          >
            More than
            <br />
            just a structure.
          </h2>


          <p
            className="
              mt-7
              max-w-xl
              text-lg
              leading-8
              text-neutral-600
              sm:mt-8
              sm:text-xl
              sm:leading-9
            "
          >
            Every construction project begins with an idea.
            Our role is to help turn that idea into a carefully
            planned and thoughtfully executed space.
          </p>


          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-neutral-500
              sm:mt-6
              sm:text-base
            "
          >
            Project requirements, scope and execution can be
            customized according to the client's needs.
          </p>


          {/* POINTS */}

          <div className="mt-8 space-y-0 border-t border-neutral-200 sm:mt-10">

            {points.map((point) => (
              <div
                key={point}
                className="
                  flex
                  items-center
                  gap-3
                  border-b
                  border-neutral-200
                  py-4
                "
              >
                <Check
                  size={17}
                  strokeWidth={2}
                  className="shrink-0 text-[#a47d48]"
                />

                <span className="text-sm font-medium text-neutral-700 sm:text-base">
                  {point}
                </span>
              </div>
            ))}

          </div>


          {/* CTA */}

          <Link
            to="/construction/packages"
            className="
              mt-8
              inline-flex
              min-h-[50px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-neutral-950
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-neutral-800
              sm:mt-10
              sm:w-fit
            "
          >
            Explore packages
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </div>
    </section>
  )
}

export default ConstructionIntro