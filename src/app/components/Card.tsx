interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`card flex flex-col h-full ${hover ? 'hover-lift' : ''} ${className}`}>
      {children}
    </div>
  )
}