import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { NAV_LINKS } from '@/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white/0'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
        <Link to="/" className="font-[Manrope,sans-serif] font-bold text-xl text-[#1A1A1A]">
          Amrit<span className="text-[#B8956A]">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-[#B8956A]' : 'text-[#2C2C2C]/70 hover:text-[#2C2C2C]'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-2 px-5 py-2.5 bg-[#2C2C2C] text-white text-sm font-medium rounded-lg hover:bg-[#1A1A1A] transition-colors">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-[#2C2C2C]" aria-label="Menu">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <Link key={link.path} to={link.path} className="text-[#2C2C2C] font-medium py-1 text-base">
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2 px-5 py-2.5 bg-[#2C2C2C] text-white text-sm font-medium rounded-lg text-center">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
