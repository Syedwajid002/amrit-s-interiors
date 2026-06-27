import { FadeIn } from '@/components/FadeIn'
import { SectionHeader } from '@/components/SectionHeader'
import { SERVICES } from '@/data'

export default function Services() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="What We Offer" title="Our Services" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="group rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="h-48 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-[Manrope,sans-serif] font-semibold text-base text-[#2C2C2C]">{s.title}</h3>
                    <p className="text-[#6B7280] text-sm mt-2 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
