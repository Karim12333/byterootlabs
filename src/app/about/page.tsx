import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'
import Card from '../components/Card'

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coal-900 via-coal-800 to-coal-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-12 inline-block">
              <Image
                src="/byterootlabslogo.png"
                alt="ByteRoot Labs"
                width={100}
                height={100}
                className="mx-auto rounded-xl"
              />
            </div>
            <h1 className="heading-xl text-white mb-8 slide-up">
              About <span className="text-gradient">ByteRoot Labs</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto slide-up leading-relaxed">
              We are passionate AI engineers and software developers dedicated to building innovative agentic AI solutions 
              that help businesses automate, optimize, and succeed in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section 
        title="Our Mission" 
        subtitle="Building the future, one line of code at a time."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="heading-md text-white mb-6">Empowering Intelligent Automation</h3>
            <p className="text-white/70 mb-6">
              At ByteRoot Labs, we believe AI should augment human intelligence and automate complex workflows. 
              Our mission is to partner with businesses to transform their operations with intelligent agentic solutions 
              that can think, learn, and act autonomously.
            </p>
            <p className="text-white/70 mb-6">
              We combine cutting-edge AI technologies with deep business understanding to deliver autonomous systems that 
              not only solve current challenges but continuously evolve and improve with your business.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gold-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-coal-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/80">Quality-driven development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gold-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-coal-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/80">Client-focused approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gold-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-coal-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/80">Continuous innovation</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gold-400/20 to-transparent rounded-2xl p-12 flex items-center justify-center">
              <Image
                src="/byterootlabslogo.png"
                alt="ByteRoot Labs"
                width={280}
                height={280}
                className="opacity-90 rounded-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section 
        title="Our Values"
        subtitle="The principles that guide everything we do."
        className="bg-coal-800/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="text-gold-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="heading-sm text-white mb-3">Excellence</h3>
            <p className="text-white/70">
              We strive for excellence in every project, ensuring our code is clean, efficient, and maintainable.
            </p>
          </Card>
          
          <Card>
            <div className="text-gold-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="heading-sm text-white mb-3">Collaboration</h3>
            <p className="text-white/70">
              We work closely with our clients as true partners, ensuring transparent communication throughout the process.
            </p>
          </Card>
          
          <Card>
            <div className="text-gold-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="heading-sm text-white mb-3">Innovation</h3>
            <p className="text-white/70">
              We stay at the forefront of technology, constantly learning and adopting new tools and methodologies.
            </p>
          </Card>
        </div>
      </Section>

      {/* Expertise Areas */}
      <Section 
        title="Our Expertise Areas"
        subtitle="We deliver excellence through deep knowledge in key technology domains."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <div className="text-gold-400 mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9 9a9 9 0 009-9" />
              </svg>
            </div>
            <h3 className="heading-sm text-white mb-3">Full-Stack Development</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Modern web applications with responsive frontends, robust backends, and seamless user experiences.
            </p>
          </Card>

          <Card>
            <div className="text-gold-400 mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="heading-sm text-white mb-3">Cloud Architecture</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Scalable cloud infrastructure and microservices architecture.
            </p>
          </Card>

          <Card>
            <div className="text-gold-400 mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="heading-sm text-white mb-3">Security & Performance</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Advanced security implementations, performance optimization, and best practices for reliable software systems.
            </p>
          </Card>

          <Card>
            <div className="text-gold-400 mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="heading-sm text-white mb-3">Data Engineering</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Database design, data pipeline development, and analytics solutions for data-driven decision making.
            </p>
          </Card>

          <Card>
            <div className="text-gold-400 mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="heading-sm text-white mb-3">Innovation & Research</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Technology research, prototype development, and emerging technology integration.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section 
        title="Let's Work Together"
        subtitle="Ready to turn your ideas into reality? We'd love to hear from you."
      >
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="text-gold-400">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="heading-md text-white">Start Your Project Today</h3>
              <p className="text-white/70">
                Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">
                  Get In Touch
                </Button>
                <Button href="/services" variant="secondary">
                  View Services
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Footer />
    </main>
  )
}