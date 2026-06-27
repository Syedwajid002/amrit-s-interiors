import { FadeIn } from '@/components/FadeIn'
import { SectionHeader } from '@/components/SectionHeader'
import { PROCESS } from '@/data'

export default function Process() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="How It Works" title="Our Process" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {PROCESS.map((p, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#B8956A]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="font-[Manrope,sans-serif] font-bold text-[#B8956A] text-sm">{p.step}</span>
                </div>
                <h3 className="font-[Manrope,sans-serif] font-semibold text-sm text-[#2C2C2C]">{p.title}</h3>
                <p className="text-[#6B7280] text-xs mt-2 leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
