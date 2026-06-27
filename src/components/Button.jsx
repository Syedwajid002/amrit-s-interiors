import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'

export function Button({ children, to, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300'
  const styles = {
    primary: 'bg-[#2C2C2C] text-white hover:bg-[#1A1A1A]',
    outline: 'border border-[#2C2C2C]/20 text-[#2C2C2C] hover:border-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white',
    gold: 'bg-[#B8956A] text-white hover:bg-[#6B4C3B]',
  }

  if (to) {
    return <Link to={to} className={`${base} ${styles[variant]} ${className}`}>{children}</Link>
  }
  return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>
}

export function ButtonArrow({ children, to, variant = 'primary' }) {
  return (
    <Button to={to} variant={variant}>
      {children}
      <HiArrowRight className="text-sm" />
    </Button>
  )
}
