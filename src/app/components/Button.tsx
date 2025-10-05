import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const finalClasses = `${baseClasses} ${className}`

  if (href) {
    return (
      <Link href={href} className={finalClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={finalClasses}>
      {children}
    </button>
  )
}