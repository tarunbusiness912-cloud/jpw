import {
  Building2,
  Home,
  Landmark,
  Ruler,
} from 'lucide-react'

import ServiceCard from './ServiceCard'


const services = [
  {
    number: '01',
    title: 'Residential Construction',
    description:
      'Construction solutions for residential projects, shaped around the requirements, layout and vision of the client.',
    icon: Home,
  },
  {
    number: '02',
    title: 'Building Construction',
    description:
      'Construction support for building projects with an approach focused on planning, execution and practical project requirements.',
    icon: Building2,
  },
  {
    number: '03',
    title: 'Project Development',
    description:
      'A structured approach to developing construction projects from initial requirements through execution.',
    icon: Landmark,
  },
  {
    number: '04',
    title: 'Planning & Design Coordination',
    description:
      'Coordination around planning and design requirements so the project direction remains aligned with the intended outcome.',
    icon: Ruler,
  },
]


function ConstructionServices() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="max-w-2xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a47d48] sm:text-xs">
            What we offer
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-[-0.035em]
              sm:text-5xl
              md:text-[54px]
            "
          >
            Construction solutions
            <br />
            <span className="text-neutral-400">
              built around you.
            </span>
          </h2>

        </div>


        {/* SERVICES */}

        <div
          className="
            mt-12
            grid
            gap-4
            sm:mt-14
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {services.map((service) => (
            <ServiceCard
              key={service.number}
              {...service}
            />
          ))}

        </div>

      </div>
    </section>
  )
}


export default ConstructionServices