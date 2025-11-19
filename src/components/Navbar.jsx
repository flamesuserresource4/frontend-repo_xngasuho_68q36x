import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-orange-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 shadow-lg shadow-orange-300/40" />
          <span className="text-xl font-extrabold tracking-tight text-orange-700">PlayLearn</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-orange-800/80 font-medium">
          <a href="#activities" className="hover:text-orange-900 transition-colors">Games</a>
          <a href="#about" className="hover:text-orange-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-orange-900 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-orange-300 text-orange-700">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
