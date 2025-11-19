function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-orange-200">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-extrabold text-orange-900">Made for curious kids</h3>
          <p className="text-orange-800/80 mt-2">Simple, safe and fun mini-games that make learning feel like play.</p>
        </div>
        <div className="flex md:justify-end">
          <a href="#activities" className="px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg shadow-orange-400/30 transition-colors">Play Now</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
