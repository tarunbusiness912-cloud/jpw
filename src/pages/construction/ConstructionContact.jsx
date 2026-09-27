import { useState } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

import Navbar from '../../components/shared/Navbar'
import Footer from '../../components/shared/Footer'
import WhatsAppButton from '../../components/shared/WhatsAppButton'

function ConstructionContact() {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    packageType: '',
    siteSize: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    /*
     * Demo-only form behaviour.
     * No backend/database is connected.
     */

    setSubmitted(true)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f6f2] text-neutral-950">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="bg-neutral-950 text-white">
          <div className="jp-container">
            <div className="max-w-5xl py-20 sm:py-24 lg:py-32">
              <Link
                to="/construction"
                className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-white/50 transition-colors hover:text-white"
              >
                <ArrowLeft size={14} />
                Construction
              </Link>

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d3b27c] sm:text-xs">
                Start a conversation
              </p>

              <h1 className="mt-5 max-w-4xl font-['Manrope'] text-4xl font-700 leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                Let&apos;s build
                <br />
                something together.
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                Tell us about your construction requirements and
                the JP Wings team can discuss the project scope,
                package options and next steps with you.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}

        <section className="bg-[#f7f6f2]">
          <div className="jp-container">
            <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-28">

              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a47d48]">
                  Get in touch
                </p>

                <h2 className="mt-4 font-['Manrope'] text-3xl font-700 leading-[1.05] tracking-[-0.04em] sm:text-4xl">
                  Tell us about
                  <br />
                  your project.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
                  Whether you are planning a new home, commercial
                  project or another construction requirement, share
                  the details with us.
                </p>

                {/* CONTACT ITEMS */}

                <div className="mt-10 space-y-5">

                  {/* PHONE */}

                  <a
                    href="tel:+918073118587"
                    className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                      <Phone size={17} />
                    </span>

                    <span>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                        Call us
                      </span>

                      <span className="mt-1 block text-sm font-semibold text-neutral-950">
                        8073118587
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-neutral-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  {/* EMAIL */}

                  <a
                    href="mailto:jpwings24@gmail.com"
                    className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                      <Mail size={17} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                        Email
                      </span>

                      <span className="mt-1 block break-all text-sm font-semibold text-neutral-950">
                        jpwings24@gmail.com
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto shrink-0 text-neutral-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  {/* ADDRESS */}

                  <a
                    href="https://maps.app.goo.gl/DwhNiBMPWiaDhMQi8?g_st=ac"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                      <MapPin size={17} />
                    </span>

                    <span>
                      <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                        Visit us
                      </span>

                      <span className="mt-1 block text-sm font-semibold leading-6 text-neutral-950">
                        Jayanagar B Block,
                        <br />
                        Kalidasa Circle,
                        <br />
                        Davanagere, Karnataka — 577004
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto shrink-0 text-neutral-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                </div>

                {/* WHATSAPP */}

                <a
                  href="https://wa.me/918073118587"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full border border-neutral-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-950"
                >
                  Continue on WhatsApp
                  <ArrowUpRight size={15} />
                </a>
              </div>

              {/* =================================================
                  ENQUIRY FORM
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 24,
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
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10"
              >

                <div className="mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a47d48]">
                    Project enquiry
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Share your requirements
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    The following form is a demo enquiry interface.
                  </p>
                </div>

                {/* =================================================
                    SUCCESS MESSAGE
                ================================================= */}

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        marginBottom: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: 'auto',
                        marginBottom: 24,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        marginBottom: 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />

                        <div>
                          <p className="text-sm font-semibold text-emerald-900">
                            Enquiry details captured for this demo.
                          </p>

                          <p className="mt-1 text-xs leading-5 text-emerald-700">
                            This demo does not currently send or
                            store enquiries. Connect a backend or
                            email service before using the website
                            for live enquiries.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* NAME + PHONE */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full rounded-xl border border-neutral-200 bg-[#fafaf8] px-4 py-3.5 text-sm text-neutral-950 outline-none transition-all placeholder:text-neutral-300 focus:border-neutral-950 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                        className="w-full rounded-xl border border-neutral-200 bg-[#fafaf8] px-4 py-3.5 text-sm text-neutral-950 outline-none transition-all placeholder:text-neutral-300 focus:border-neutral-950 focus:bg-white"
                      />
                    </div>

                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-neutral-200 bg-[#fafaf8] px-4 py-3.5 text-sm text-neutral-950 outline-none transition-all placeholder:text-neutral-300 focus:border-neutral-950 focus:bg-white"
                    />
                  </div>

                  {/* PROJECT TYPE + PACKAGE */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="projectType"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                      >
                        Project Type
                      </label>

                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none rounded-xl border border-neutral-200 bg-[#fafaf8] px-4 py-3.5 text-sm text-neutral-950 outline-none transition-all focus:border-neutral-950 focus:bg-white"
                      >
                        <option value="">
                          Select project type
                        </option>

                        <option value="Residential">
                          Residential
                        </option>

                        <option value="Commercial">
                          Commercial
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="packageType"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                      >
                        Package Interest
                      </label>

                      <select
                        id="packageType"
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-neutral-200 bg-[#fafaf8] px-4 py-3.5 text-sm text-neutral-950 outline-none transition-all focus:border-neutral-950 focus:bg-white"
                      >
                        <option value="">
                          Select package
                        </option>

                        <option value="Economy">
                          Economy
                        </option>

                        <option value="Premium">
                          Premium
                        </option>

                        <option value="Luxury">
                          Luxury
                        </option>

                        <option value="Not sure">
                          Not sure yet
                        </option>
                      </select>
                    </div>

                  </div>

                  {/* SITE SIZE */}

                  <div>
                    <label
                      htmlFor="siteSize"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                    >
                      Approximate Site / Built-up Size
                    </label>

                    <input
                      id="siteSize"
                      name="siteSize"
                      type="text"
                      value={formData.siteSize}
                      onChange={handleChange}
                      placeholder="Example: 30 × 40 ft / 1200 sq ft"
                      className="w-full rounded-xl border border-neutral-200 bg-[#fafaf8] px-4 py-3.5 text-sm text-neutral-950 outline-none transition-all placeholder:text-neutral-300 focus:border-neutral-950 focus:bg-white"
                    />
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500"
                    >
                      Project Requirements
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us briefly about your project..."
                      className="w-full resize-none rounded-xl border border-neutral-200 bg-[#fafaf8] px-4 py-3.5 text-sm leading-6 text-neutral-950 outline-none transition-all placeholder:text-neutral-300 focus:border-neutral-950 focus:bg-white"
                    />
                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-neutral-950 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
                  >
                    Send Enquiry

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                  <p className="text-center text-[10px] leading-5 text-neutral-400">
                    Demo form — enquiry submission is not connected
                    to a backend yet.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="bg-neutral-950 py-20 text-white sm:py-24">
          <div className="jp-container">
            <div className="mx-auto max-w-3xl text-center">

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d3b27c]">
                JP Wings Construction & Developers
              </p>

              <h2 className="mt-5 font-['Manrope'] text-3xl font-700 leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
                Start a conversation with the JP Wings team about
                your construction requirements.
              </p>

              <a
                href="https://wa.me/918073118587"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-neutral-950 transition-all duration-300 hover:-translate-y-0.5"
              >
                WhatsApp Us

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  )
}

export default ConstructionContact