import { useState } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { SectionHeader } from '@/components/SectionHeader'
import { COMPANY } from '@/data'
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Get In Touch" title="Contact Us" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <FadeIn>
              <div>
                <h3 className="font-[Manrope,sans-serif] font-semibold text-xl text-[#2C2C2C] mb-4">Book a Free Consultation</h3>
                <p className="text-[#6B7280] leading-relaxed mb-8">
                  Get in touch to discuss your project. We offer free home consultations where we measure your space, discuss your ideas, and provide a no-obligation quote.
                </p>

                <div className="space-y-4 mb-8">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-[#2C2C2C] hover:text-[#B8956A] transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF9F7] flex items-center justify-center flex-shrink-0"><HiPhone className="text-[#B8956A]" /></div>
                    <span className="text-sm font-medium">{COMPANY.phone}</span>
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-[#2C2C2C] hover:text-[#B8956A] transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF9F7] flex items-center justify-center flex-shrink-0"><HiEnvelope className="text-[#B8956A]" /></div>
                    <span className="text-sm font-medium">{COMPANY.email}</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FAF9F7] flex items-center justify-center flex-shrink-0"><HiMapPin className="text-[#B8956A]" /></div>
                    <span className="text-sm text-[#6B7280]">{COMPANY.address}</span>
                  </div>
                </div>

                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-white text-sm font-medium rounded-lg transition-colors"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <FaWhatsapp size={18} /> Message on WhatsApp
                </a>

                {/* Map */}
                <div className="mt-8 h-48 rounded-xl overflow-hidden border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d-0.1278!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzI2LjUiTg!5e0!3m2!1sen!2suk!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Map"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn delay={0.1}>
              {submitted ? (
                <div className="flex items-center justify-center h-full min-h-[300px]">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#B8956A]/10 flex items-center justify-center mx-auto mb-4">
                      <HiEnvelope className="text-[#B8956A] text-xl" />
                    </div>
                    <h3 className="font-[Manrope,sans-serif] font-semibold text-xl text-[#2C2C2C]">Message Sent!</h3>
                    <p className="text-[#6B7280] text-sm mt-2">We will get back to you within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-[#2C2C2C] block mb-1.5">Full Name</label>
                      <input id="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#B8956A] transition-colors" placeholder="John Smith" />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-[#2C2C2C] block mb-1.5">Email</label>
                      <input id="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#B8956A] transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-[#2C2C2C] block mb-1.5">Phone</label>
                      <input id="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#B8956A] transition-colors" placeholder="+44 7000 000000" />
                    </div>
                    <div>
                      <label htmlFor="service" className="text-sm font-medium text-[#2C2C2C] block mb-1.5">Service</label>
                      <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#B8956A] transition-colors">
                        <option value="">Select a service</option>
                        <option>Kitchen</option>
                        <option>Bedroom</option>
                        <option>Wardrobe</option>
                        <option>Media Wall</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-[#2C2C2C] block mb-1.5">Message</label>
                    <textarea id="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#B8956A] transition-colors resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full py-3 bg-[#2C2C2C] text-white rounded-lg font-medium text-sm hover:bg-[#1A1A1A] transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
