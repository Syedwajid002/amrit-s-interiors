import { FadeIn } from '@/components/FadeIn'
import { SectionHeader } from '@/components/SectionHeader'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'

export default function About() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="text-[#B8956A] text-sm font-semibold tracking-wide uppercase mb-3">About Us</p>
            <h1 className="font-[Manrope,sans-serif] text-3xl md:text-4xl font-bold text-[#2C2C2C] leading-tight">
              Crafting Premium Interiors for Over 20 Years
            </h1>
            <p className="text-[#6B7280] mt-5 text-base leading-relaxed">
              Amrit Kitchen & Bedrooms has been transforming homes across the United Kingdom since 2004. We combine traditional joinery skills with modern design to create furniture that is both beautiful and functional.
            </p>
            <p className="text-[#6B7280] mt-3 text-base leading-relaxed">
              Every project starts with understanding our clients — their lifestyle, their taste, their space. From there, we design, manufacture, and install furniture that is truly made to measure.
            </p>
            <div className="mt-7">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C2C2C] text-white text-sm font-medium rounded-lg hover:bg-[#1A1A1A] transition-colors">
                Get In Touch <HiArrowRight />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80"
              alt="Kitchen craftsmanship"
              className="w-full h-[380px] object-cover rounded-xl"
            />
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-[#FAF9F7]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Quality', desc: 'We never compromise on materials or craftsmanship. Every piece is built to last.' },
              { title: 'Precision', desc: 'Made-to-measure means millimetre-perfect. We ensure a flawless fit every time.' },
              { title: 'Care', desc: 'We treat every home as if it were our own, with respect and attention to detail.' },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-6 bg-white rounded-xl border border-gray-100 h-full">
                  <h3 className="font-[Manrope,sans-serif] font-semibold text-lg text-[#2C2C2C]">{v.title}</h3>
                  <p className="text-[#6B7280] text-sm mt-2 leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
