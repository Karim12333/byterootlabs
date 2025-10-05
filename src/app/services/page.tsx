import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'
import Card from '../components/Card'

export const metadata = { title: 'Services — ByteRoot Labs' }

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coal-900 via-coal-800 to-coal-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="heading-xl text-white mb-8 slide-up">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto slide-up leading-relaxed">
              We offer comprehensive software development and AI services to help businesses thrive in the digital age. 
              From agentic AI solutions to cloud deployments, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <Section 
        title="What We Do" 
        subtitle="Comprehensive software and AI solutions tailored to your business needs."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <div className="text-gold-400 mb-6">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9 9a9 9 0 009-9" />
              </svg>
            </div>
            <h3 className="heading-md text-white mb-4">Web Development</h3>
            <p className="text-white/70 mb-6">
              Modern, responsive web applications built with cutting-edge technologies like React, Next.js, and Node.js. 
              We create fast, scalable, and SEO-optimized websites that drive results.
            </p>
            <ul className="text-white/60 space-y-2 mb-6">
              <li>• Custom Web Applications</li>
              <li>• E-commerce Platforms</li>
              <li>• Progressive Web Apps (PWAs)</li>
              <li>• API Development & Integration</li>
              <li>• Performance Optimization</li>
            </ul>
            <Button href="/contact" variant="secondary">
              Get Started
            </Button>
          </Card>
          
          <Card>
            <div className="text-gold-400 mb-6">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3C9.79 3 8 4.79 8 7c0 1.1.45 2.1 1.17 2.83A4.002 4.002 0 0012 14c1.38 0 2.63-.7 3.36-1.86A3.99 3.99 0 0016 7c0-2.21-1.79-4-4-4zM9 17c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-1zm6-9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM9 8c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z" />
              </svg>
            </div>
            <h3 className="heading-md text-white mb-4">Agentic AI Solutions</h3>
            <p className="text-white/70 mb-6">
              Intelligent autonomous agents and AI-powered software that can think, learn, and act independently. 
              We create sophisticated AI systems that automate complex workflows and decision-making processes.
            </p>
            <ul className="text-white/60 space-y-2 mb-6">
              <li>• Autonomous AI Agents</li>
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Intelligent Automation Systems</li>
              <li>• AI-Powered Analytics & Insights</li>
            </ul>
            <Button href="/contact" variant="secondary">
              Get Started
            </Button>
          </Card>
          
          <Card>
            <div className="text-gold-400 mb-6">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="heading-md text-white mb-4">Cloud Solutions</h3>
            <p className="text-white/70 mb-6">
              Scalable cloud infrastructure and deployment strategies. We help you leverage the power of cloud computing 
              for better performance, security, and cost efficiency.
            </p>
            <ul className="text-white/60 space-y-2 mb-6">
              <li>• AWS & Azure Deployment</li>
              <li>• DevOps & CI/CD Pipelines</li>
              <li>• Microservices Architecture</li>
              <li>• Database Design & Migration</li>
              <li>• Server Management & Monitoring</li>
            </ul>
            <Button href="/contact" variant="secondary">
              Get Started
            </Button>
          </Card>
          
          <Card>
            <div className="text-gold-400 mb-6">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="heading-md text-white mb-4">Consulting & Strategy</h3>
            <p className="text-white/70 mb-6">
              Technical consulting and digital strategy to help you make informed decisions about your technology stack, 
              architecture, and development roadmap.
            </p>
            <ul className="text-white/60 space-y-2 mb-6">
              <li>• Technology Assessment</li>
              <li>• Architecture Planning</li>
              <li>• Code Review & Audits</li>
              <li>• Digital Transformation</li>
              <li>• Team Training & Mentoring</li>
            </ul>
            <Button href="/contact" variant="secondary">
              Get Started
            </Button>
          </Card>
        </div>
      </Section>

      {/* Process */}
      <Section 
        title="Our Process"
        subtitle="A streamlined approach that delivers results on time and within budget."
        className="bg-coal-800/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-coal-900 font-bold text-xl">1</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Discovery</h4>
            <p className="text-white/70 text-sm">We understand your goals, requirements, and constraints to create the perfect solution.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-coal-900 font-bold text-xl">2</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Planning</h4>
            <p className="text-white/70 text-sm">Detailed project planning, architecture design, and timeline creation for optimal results.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-coal-900 font-bold text-xl">3</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Development</h4>
            <p className="text-white/70 text-sm">Agile development with regular updates, testing, and feedback throughout the process.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-coal-900 font-bold text-xl">4</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Deployment</h4>
            <p className="text-white/70 text-sm">Seamless deployment with ongoing support and maintenance to ensure long-term success.</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section 
        title="Ready to Start Your Project?"
        subtitle="Let's discuss your requirements and create something amazing together."
      >
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <h3 className="heading-md text-white">Get a Free Consultation</h3>
              <p className="text-white/70">
                Contact us today to discuss your project requirements and get a detailed proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">
                  Start Your Project
                </Button>
                <Button href="/about" variant="secondary">
                  Learn About Us
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