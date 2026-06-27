import { FadeIn } from '@/components/FadeIn'
import { SectionHeader } from '@/components/SectionHeader'
import { HiStar } from 'react-icons/hi2'
import { TESTIMONIALS } from '@/data'

export default function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Reviews" title="What Our Clients Say" />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="p-6 rounded-xl bg-[#FAF9F7] border border-[#F0EFEC] h-full">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <HiStar key={j} className="text-[#B8956A] text-sm" />
                  ))}
                </div>
                <p className="text-[#2C2C2C]/70 text-sm leading-relaxed">"{t.text}"</p>
                <p className="font-[Manrope,sans-serif] font-semibold text-sm mt-4">{t.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
