import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark } from 'react-icons/hi2'
import { FadeIn } from '@/components/FadeIn'
import { SectionHeader } from '@/components/SectionHeader'
import { PROJECTS } from '@/data'

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))]
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Our Work" title="Project Portfolio" />

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === cat ? 'bg-[#2C2C2C] text-white' : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.04}>
                <div
                  className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-md transition-shadow"
                  onClick={() => setSelected(p)}
                >
                  <div className="h-56 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative bg-white rounded-2xl overflow-hidden w-full max-w-2xl"
              style={{ maxHeight: '90vh', overflowY: 'auto' }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={selected.img} alt={selected.title} className="w-full h-64 md:h-80 object-cover" />
              <div className="p-6">
                <span className="text-[#B8956A] text-xs font-semibold uppercase tracking-wide">{selected.category}</span>
                <h3 className="font-[Manrope,sans-serif] text-xl font-bold text-[#2C2C2C] mt-1">{selected.title}</h3>
                <p className="text-[#6B7280] text-sm mt-3 leading-relaxed">{selected.desc}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md"
                aria-label="Close"
              >
                <HiXMark size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
