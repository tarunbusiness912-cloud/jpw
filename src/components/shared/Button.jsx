import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Button({
  children,
  to,
  href,
  variant = 'dark',
  icon = true,
  className = '',
  onClick,
}) {
  const classes = `
    inline-flex
    items-center
    justify-center
    gap-3
    rounded-full
    px-6
    py-3.5
    text-sm
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-0.5
    ${variant === 'dark'
      ? 'bg-neutral-900 text-white hover:bg-neutral-800'
      : ''}
    ${variant === 'light'
      ? 'bg-white text-neutral-900 hover:bg-neutral-100'
      : ''}
    ${variant === 'outline'
      ? 'border border-neutral-900/20 text-neutral-900 hover:bg-neutral-900 hover:text-white'
      : ''}
    ${variant === 'gold'
      ? 'bg-[#b48a52] text-white hover:bg-[#8e693b]'
      : ''}
    ${className}
  `

  const content = (
    <>
      <span>{children}</span>

      {icon && (
        <ArrowUpRight
          size={17}
          strokeWidth={1.8}
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
      >
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  )
}

export default Button