import { FadeIn } from '@/components/FadeIn'
import { SectionHeader } from '@/components/SectionHeader'
import { FaInstagram } from 'react-icons/fa'
import { INSTAGRAM_IMAGES } from '@/data'

export default function Instagram() {
  return (
    <section className="py-20 px-6 bg-[#FAF9F7]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="@amritkitchenbedrooms" title="Follow Us on Instagram" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <a
                href="https://www.instagram.com/amritkitchenbedrooms?igsh=bGZ2ZDl4YTdnY2M="
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-lg"
                style={{ aspectRatio: '1/1' }}
              >
                <img src={img} alt="Instagram" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <FaInstagram className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://www.instagram.com/amritkitchenbedrooms?igsh=bGZ2ZDl4YTdnY2M=" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#2C2C2C] hover:text-[#B8956A] transition-colors">
            <FaInstagram /> Follow @amritkitchenbedrooms
          </a>
        </div>
      </div>
    </section>
  )
}
