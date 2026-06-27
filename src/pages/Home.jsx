import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiStar, HiArrowRight, HiCheckBadge } from 'react-icons/hi2'
import { FadeIn } from '@/components/FadeIn'
import { SectionHeader } from '@/components/SectionHeader'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Instagram from '@/components/Instagram'
import { SERVICES, PROJECTS, TESTIMONIALS, HERO_IMAGE } from '@/data'

function Hero() {
  return (
    <section className="relative w-full" style={{ height: '90vh', minHeight: '550px' }}>
      <img
        src={HERO_IMAGE}
        alt="Modern luxury kitchen"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <FadeIn>
            <p className="text-[#B8956A] text-sm font-semibold tracking-wide uppercase mb-3">Bespoke Interiors</p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[Manrope,sans-serif] font-bold leading-tight max-w-2xl">
              Beautiful Kitchens & Bedrooms Crafted for Modern Living
            </h1>
            <p className="text-white/70 mt-4 text-base md:text-lg max-w-lg leading-relaxed">
              Bespoke kitchens, bedrooms and interior furniture designed with precision, quality and attention to detail.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8956A] text-white text-sm font-medium rounded-lg hover:bg-[#6B4C3B] transition-colors">
                View Our Projects <HiArrowRight />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
                Book a Free Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="What We Do" title="Our Services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.slice(0, 4).map((s, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 bg-white">
                <div className="h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-[Manrope,sans-serif] font-semibold text-base text-[#2C2C2C]">{s.title}</h3>
                  <p className="text-[#6B7280] text-sm mt-1.5 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-[#2C2C2C] text-sm font-medium rounded-lg hover:border-[#2C2C2C] transition-colors">
            View All Services <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectsPreview() {
  return (
    <section className="py-20 px-6 bg-[#FAF9F7]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Our Work" title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.05}>
              <div className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-[#B8956A] text-xs font-semibold uppercase tracking-wide">{p.category}</span>
                  <h3 className="font-[Manrope,sans-serif] font-semibold text-[#2C2C2C] mt-1">{p.title}</h3>
                  <p className="text-[#6B7280] text-sm mt-1.5">{p.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C2C2C] text-white text-sm font-medium rounded-lg hover:bg-[#1A1A1A] transition-colors">
            View All Projects <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Reviews" title="What Our Clients Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="p-6 rounded-xl bg-[#FAF9F7] border border-gray-100 h-full flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <HiStar key={j} className="text-[#B8956A]" size={16} />
                  ))}
                </div>
                <p className="text-[#2C2C2C]/70 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <p className="font-[Manrope,sans-serif] font-semibold text-sm mt-4 text-[#2C2C2C]">{t.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-20 px-6 bg-[#2C2C2C]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-[Manrope,sans-serif] text-2xl md:text-3xl font-bold text-white">Ready to Transform Your Space?</h2>
          <p className="text-white/60 mt-3 text-base">Book a free consultation and let's bring your vision to life.</p>
          <div className="mt-7">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#B8956A] text-white text-sm font-medium rounded-lg hover:bg-[#6B4C3B] transition-colors">
              Book Free Consultation <HiArrowRight />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <WhyChooseUs />
      <Process />
      <TestimonialsSection />
      <Instagram />
      <CTA />
    </>
  )
}
