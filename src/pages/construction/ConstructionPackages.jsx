import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

import Navbar from '../../components/shared/Navbar'
import Footer from '../../components/shared/Footer'
import WhatsAppButton from '../../components/shared/WhatsAppButton'

import { constructionPackages } from '../../data/construction'

function ConstructionPackages() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f6f2] text-neutral-950">
      <Navbar />

      <main>
        {/* =====================================================
            HEADER
        ===================================================== */}

        <section className="bg-neutral-950 text-white">
          <div className="jp-container">
            <div className="max-w-4xl py-20 sm:py-24 lg:py-32">
              <Link
                to="/construction"
                className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-white/50 transition-colors hover:text-white"
              >
                <ArrowLeft size={14} />
                Construction
              </Link>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d3b27c] sm:text-xs">
                Construction Packages
              </p>

              <h1 className="mt-5 font-['Manrope'] text-4xl font-700 leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                Choose the approach
                <br />
                that fits your project.
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                JP Wings Construction & Developers offers
                construction options that can be customized
                according to project requirements.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            STARTING PRICE
        ===================================================== */}

        <section className="border-b border-neutral-200 bg-white">
          <div className="jp-container">
            <div className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#a47d48]">
                  Starting Construction Price
                </p>

                <p className="mt-1 text-2xl font-semibold tracking-tight">
                  ₹2,400
                  <span className="ml-2 text-sm font-normal text-neutral-400">
                    / sq ft
                  </span>
                </p>
              </div>

              <p className="max-w-md text-xs leading-6 text-neutral-400">
                Final pricing depends on project requirements
                and quotation.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PACKAGES
        ===================================================== */}

        <section className="bg-[#f7f6f2]">
          <div className="jp-container">
            <div className="py-16 sm:py-20 lg:py-28">
              <div className="grid gap-6 lg:grid-cols-3">

                {constructionPackages.map((pkg, index) => (
                  <motion.article
                    key={pkg.id}
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
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white"
                  >
                    {/* =================================================
                        PACKAGE IMAGE
                    ================================================= */}

                    <div className="relative overflow-hidden bg-neutral-200">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        onError={(event) => {
                          console.error(
                            `Package image failed to load: ${pkg.image}`,
                          )
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
                          {pkg.subtitle}
                        </p>

                        <h2 className="mt-1 text-3xl font-semibold tracking-tight text-white">
                          {pkg.title}
                        </h2>
                      </div>
                    </div>

                    {/* =================================================
                        PACKAGE CONTENT
                    ================================================= */}

                    <div className="p-6 sm:p-7">

                      {/* PRICE */}

                      {pkg.price && (
                        <p className="text-sm font-semibold text-[#a47d48]">
                          {pkg.price}
                        </p>
                      )}

                      {/* DESCRIPTION */}

                      {pkg.description && (
                        <p className="mt-4 text-sm leading-7 text-neutral-500">
                          {pkg.description}
                        </p>
                      )}

                      {/* =================================================
                          FEATURES
                      ================================================= */}

                      {Array.isArray(pkg.features) &&
                        pkg.features.length > 0 && (
                          <div className="mt-7">

                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                              Includes
                            </p>

                            <ul className="mt-4 space-y-3">
                              {pkg.features.map(
                                (feature, featureIndex) => (
                                  <li
                                    key={`${pkg.id}-feature-${featureIndex}`}
                                    className="flex items-start gap-3 text-sm leading-6 text-neutral-600"
                                  >
                                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f2eadf] text-[#a47d48]">
                                      <Check size={12} />
                                    </span>

                                    <span>{feature}</span>
                                  </li>
                                ),
                              )}
                            </ul>

                          </div>
                        )}

                      {/* =================================================
                          NOTE
                      ================================================= */}

                      {pkg.note && (
                        <div className="mt-7 border-t border-neutral-100 pt-5">
                          <p className="text-xs leading-6 text-neutral-400">
                            {pkg.note}
                          </p>
                        </div>
                      )}

                      {/* =================================================
                          CTA
                      ================================================= */}

                      <Link
                        to="/construction/contact"
                        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
                      >
                        Discuss this package

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </motion.article>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CUSTOMIZATION
        ===================================================== */}

        <section className="bg-white">
          <div className="jp-container">
            <div className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:py-24">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a47d48]">
                  Your Requirements
                </p>

                <h2 className="mt-4 font-['Manrope'] text-3xl font-700 leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Every project
                  <br />
                  can be customized.
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-neutral-600">
                  Package scope, project requirements and final
                  pricing can be discussed with JP Wings
                  Construction & Developers before proceeding.
                </p>

                <p className="mt-5 text-xs leading-6 text-neutral-400">
                  Detailed package inclusions, specifications and
                  other commercial details are to be confirmed by
                  JP Wings.
                </p>

                <Link
                  to="/construction/contact"
                  className="group mt-7 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
                >
                  Discuss your requirements

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  )
}

export default ConstructionPackages