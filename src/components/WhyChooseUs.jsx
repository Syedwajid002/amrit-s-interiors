import { FadeIn } from '@/components/FadeIn'
import { SectionHeader } from '@/components/SectionHeader'
import { WHY_US } from '@/data'
import { HiCheckBadge } from 'react-icons/hi2'

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-[#FAF9F7]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Why Us" title="Why Choose Amrit" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="p-6 bg-white rounded-xl border border-gray-100 h-full">
                <HiCheckBadge className="text-[#B8956A] text-2xl mb-3" />
                <h3 className="font-[Manrope,sans-serif] font-semibold text-base text-[#2C2C2C]">{item.title}</h3>
                <p className="text-[#6B7280] text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
