import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  const phoneNumber = '918073118587'

  const message = encodeURIComponent(
    'Hello JP Wings Group, I would like to discuss a project.'
  )

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact JP Wings Group on WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_12px_40px_rgba(0,0,0,0.2)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
      "
    >
      <MessageCircle size={24} />
    </a>
  )
}

export default WhatsAppButton