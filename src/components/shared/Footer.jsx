import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const phone = '8073118587'
  const whatsapp = '918073118587'
  const email = 'jpwings24@gmail.com'

  const address =
    'Jayanagar B Block, Kalidasa Circle, Davanagere, Karnataka — 577004'

  const whatsappMessage = encodeURIComponent(
    'Hello JP Wings Group, I would like to discuss a project.'
  )

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="jp-container">

        {/* Main footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.7fr_0.7fr_1fr] lg:gap-10 lg:py-24">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex"
            >
              <img
                src="/images/branding/jp-wings-logo.png"
                alt="JP Wings Group"
                className="
                  h-14
                  w-auto
                  object-contain
                  brightness-0
                  invert
                  opacity-95
                "
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/45">
              Building your dreams. Designing your lifestyle.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/30
                  hover:text-white
                "
              >
                <MessageCircle size={17} />
              </a>

              <a
                href="https://www.instagram.com/jpwings_24_dvg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/30
                  hover:text-white
                "
              >
                <Instagram size={17} />
              </a>
            </div>
          </div>

          {/* Construction */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d3b27c]">
              Construction
            </p>

            <nav className="mt-5 space-y-3">
              <Link
                to="/construction"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/construction/packages"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Packages
              </Link>

              <Link
                to="/construction/projects"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Projects
              </Link>

              <Link
                to="/construction/contact"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Group */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d3b27c]">
              JP Wings Group
            </p>

            <nav className="mt-5 space-y-3">
              <Link
                to="/"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Group Home
              </Link>

              <Link
                to="/interiors"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Interiors
              </Link>

              <a
                href="https://www.instagram.com/jpwings_24_dvg"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/55 transition-colors hover:text-white"
              >
                Instagram
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d3b27c]">
              Contact
            </p>

            <div className="mt-5 space-y-4">

              <a
                href={`tel:+91${phone}`}
                className="group flex items-start gap-3"
              >
                <Phone
                  size={16}
                  className="mt-1 shrink-0 text-white/35"
                />

                <span className="text-sm text-white/55 transition-colors group-hover:text-white">
                  +91 {phone}
                </span>
              </a>

              <a
                href={`mailto:${email}`}
                className="group flex items-start gap-3"
              >
                <Mail
                  size={16}
                  className="mt-1 shrink-0 text-white/35"
                />

                <span className="break-all text-sm text-white/55 transition-colors group-hover:text-white">
                  {email}
                </span>
              </a>

              <a
                href="https://maps.app.goo.gl/DwhNiBMPWiaDhMQi8?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <MapPin
                  size={16}
                  className="mt-1 shrink-0 text-white/35"
                />

                <span className="text-sm leading-6 text-white/55 transition-colors group-hover:text-white">
                  {address}
                </span>
              </a>
            </div>

            <Link
              to="/construction/contact"
              className="
                group
                mt-7
                inline-flex
                min-h-[48px]
                items-center
                gap-3
                rounded-full
                bg-white
                px-5
                text-sm
                font-semibold
                text-neutral-950
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Start a conversation

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} JP Wings Group. All rights reserved.
          </p>

          <p>
            Construction & Developers · Davanagere
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer