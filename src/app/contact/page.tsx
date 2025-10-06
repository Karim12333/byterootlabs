import Footer from '../components/Footer'
import Section from '../components/Section'
import Navbar from '../components/Navbar'

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-20">
        <Section title="Contact" subtitle="Share the details of your project, outlining your objectives, system expectations, data and integration requirements, and projected timeline, to help us craft a strategic plan that transforms your goals into measurable outcomes.">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl border border-white/10 bg-coal/60 p-8 text-center">
              <div className="mb-4 text-base text-white/70">Email</div>
              <a className="text-2xl font-medium text-gold-400 hover:text-gold-300 transition-colors duration-300" href="mailto:byterootlabs@gmail.com">
                byterootlabs@gmail.com
              </a>
              <p className="mt-6 text-white/70">(We reply within 24–48h)</p>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  )
}