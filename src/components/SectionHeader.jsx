export function SectionHeader({ label, title, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && <p className="text-[#B8956A] text-sm font-semibold tracking-wide uppercase mb-2">{label}</p>}
      <h2 className="text-2xl md:text-3xl font-[Manrope,sans-serif] font-bold text-[#2C2C2C]">{title}</h2>
    </div>
  )
}
