import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Button from './components/Button'
import Card from './components/Card'

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-coal-900 via-coal-800 to-coal-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.1),transparent_70%)]" />
        
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-12 flex justify-center">
              <Image
                src="/byterootlabslogo.png?v=2"
                alt="ByteRoot Labs"
                width={140}
                height={140}
                className="mx-auto"
                priority
              />
            </div>
            
            <h1 className="heading-xl text-white mb-8 slide-up mx-auto text-center">
               Crafting Digital Excellence with
              <span className="text-gradient block mt-4">ByteRoot Labs</span>
            </h1>
            
            <p className="text-xl text-white/80 mt-16 mb-12 slide-up leading-relaxed text-center">
              We transform ideas into powerful software solutions. From web applications to mobile apps, 
              we build scalable, innovative technology that drives your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
              <Button href="/services" variant="primary">
                Explore Services
              </Button>
              <Button href="/contact" variant="secondary">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-gradient mb-6 slide-up text-center">
              Our Expertise
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto slide-up leading-relaxed text-center">
              We specialize in building robust, scalable software solutions tailored to your business needs.
            </p>
          </div>
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <div className="text-gold-400 mb-6 flex justify-center">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9 9a9 9 0 009-9" />
                  </svg>
                </div>
                <h3 className="heading-sm text-white mb-4 text-center">Web Development</h3>
                <p className="text-white/70 text-center leading-relaxed">Modern, responsive web applications built with cutting-edge technologies and best practices.</p>
              </Card>
              
              <Card>
                <div className="text-gold-400 mb-6 flex justify-center">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="heading-sm text-white mb-4 text-center">Mobile Applications</h3>
                <p className="text-white/70 text-center leading-relaxed">Native and cross-platform mobile apps that deliver exceptional user experiences.</p>
              </Card>
              
              <Card>
                <div className="text-gold-400 mb-6 flex justify-center">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="heading-sm text-white mb-4 text-center">Cloud Solutions</h3>
                <p className="text-white/70 text-center leading-relaxed">Scalable cloud infrastructure and deployment strategies for modern applications.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24 bg-coal-800/50">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-gradient mb-6 slide-up text-center">
              Why ByteRoot Labs?
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto slide-up leading-relaxed text-center">
              We combine technical expertise with business insight to deliver solutions that drive real results.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-coal-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-lg">Expert Development Team</h4>
                  <p className="text-white/70 leading-relaxed">Our skilled developers stay current with the latest technologies and industry best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-coal-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-lg">Agile & Transparent Process</h4>
                  <p className="text-white/70 leading-relaxed">We keep you involved throughout the development process with regular updates and feedback loops.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-coal-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-lg">Scalable Solutions</h4>
                  <p className="text-white/70 leading-relaxed">We build applications that grow with your business, ensuring long-term success and ROI.</p>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="aspect-square bg-gradient-to-br from-gold-400/20 to-transparent rounded-2xl p-12 flex items-center justify-center">
                <Image
                  src="/byterootlabslogo.png?v=2"
                  alt="ByteRoot Labs"
                  width={250}
                  height={250}
                  className="opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-gradient mb-6 slide-up text-center">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto slide-up leading-relaxed text-center">
              Let&apos;s discuss your project and turn your vision into reality.
            </p>
          </div>
          <div className="text-center">
            <Card className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="text-gold-400 flex justify-center">
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="heading-md text-white text-center">Get In Touch</h3>
                <p className="text-white/70 text-lg leading-relaxed text-center">
                  Drop us a line at{' '}
                  <a 
                    href="mailto:byterootlabs@gmail.com" 
                    className="text-gold-400 hover:text-gold-300 font-medium"
                  >
                    byterootlabs@gmail.com
                  </a>
                  {' '}or use our contact form to tell us about your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button href="/contact" variant="primary">
                    Start Your Project
                  </Button>
                  <Button href="/services" variant="secondary">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}