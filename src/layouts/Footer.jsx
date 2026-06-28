import { Link } from 'react-router-dom'
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { COMPANY, NAV_LINKS, SERVICES } from '@/data'
import logo from '../x_files/amrit logo.jpeg'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Amrit Interiors logo" className="h-12 w-auto object-contain" loading="lazy" />
              <h3 className="font-[Manrope,sans-serif] font-bold text-xl">Amrit <span className="text-[#C0392B]">Kitchens</span> <span className="text-white">&amp; Bedrooms</span></h3>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Bespoke kitchens, bedrooms and interior furniture crafted with precision and care.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[Manrope,sans-serif] font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}><Link to={link.path} className="text-sm text-white/50 hover:text-[#B8956A] transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[Manrope,sans-serif] font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map(s => (
                <li key={s.title}><span className="text-sm text-white/50">{s.title}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[Manrope,sans-serif] font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/50"><HiPhone className="text-[#B8956A] flex-shrink-0" /><span>{COMPANY.phone}</span></li>
              <li className="flex items-center gap-2 text-white/50"><HiEnvelope className="text-[#B8956A] flex-shrink-0" /><span>{COMPANY.email}</span></li>
              <li className="flex items-start gap-2 text-white/50"><HiMapPin className="text-[#B8956A] flex-shrink-0 mt-0.5" /><span>{COMPANY.address}</span></li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href={COMPANY.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B8956A] transition-colors" aria-label="Instagram"><FaInstagram size={14} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B8956A] transition-colors" aria-label="Facebook"><FaFacebookF size={14} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Amrit Kitchen & Bedrooms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
