import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[86vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
            Fun + Learning = Wow!
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-orange-900">
            Learn by Playing with Colorful Building Blocks
          </h1>
          <p className="mt-4 text-lg md:text-xl text-orange-800/80">
            A playful space where kids explore numbers, letters, shapes, and logic through delightful mini-games.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#activities" className="px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg shadow-orange-400/30 transition-colors">Start Playing</a>
            <a href="#about" className="px-5 py-3 rounded-xl bg-white border border-orange-300 text-orange-700 font-bold hover:bg-orange-50">What is this?</a>
          </div>
        </div>
        <div className="h-[360px] md:h-[520px]"></div>
      </div>
    </section>
  )
}

export default Hero
