import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Portfolio from '@/pages/Portfolio'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
