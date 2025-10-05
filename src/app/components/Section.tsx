interface SectionProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-gradient mb-6 slide-up">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-white/80 max-w-4xl mx-auto slide-up leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="fade-in">
          {children}
        </div>
      </div>
    </section>
  )
}