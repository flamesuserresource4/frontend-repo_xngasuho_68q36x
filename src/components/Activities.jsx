import { Sparkles, Shapes, PencilRuler, Dice5 } from 'lucide-react'
import { useState } from 'react'

const games = [
  {
    id: 'shapes',
    title: 'Shape Match',
    icon: Shapes,
    color: 'from-orange-400 to-amber-500',
    desc: 'Drag and drop to match shapes and learn their names.'
  },
  {
    id: 'numbers',
    title: 'Number Pop',
    icon: Dice5,
    color: 'from-pink-400 to-rose-500',
    desc: 'Pop the numbers in order to count along!'
  },
  {
    id: 'letters',
    title: 'ABC Trace',
    icon: PencilRuler,
    color: 'from-lime-400 to-green-500',
    desc: 'Trace letters to learn the alphabet.'
  },
]

function Activities() {
  const [selected, setSelected] = useState('shapes')

  return (
    <section id="activities" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,146,60,0.12),transparent_40%),_radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="inline-flex items-center gap-2 text-orange-700 font-semibold">
              <Sparkles className="text-orange-500" size={18} /> Featured Games
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-900 mt-2">Pick a Game</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map(({ id, title, icon: Icon, color, desc }) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={`group text-left rounded-2xl p-5 bg-white/80 border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all ${selected===id ? 'ring-2 ring-orange-400' : ''}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg shadow-orange-300/40`}>
                <Icon size={24} />
              </div>
              <h3 className="mt-4 font-extrabold text-orange-900 text-xl">{title}</h3>
              <p className="text-orange-800/80 mt-1 text-sm">{desc}</p>
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white border border-orange-200 p-5 md:p-6 shadow-sm">
          {selected === 'shapes' && <ShapeMatch />}
          {selected === 'numbers' && <NumberPop />}
          {selected === 'letters' && <AbcTrace />}
        </div>
      </div>
    </section>
  )
}

function ShapeMatch() {
  const shapes = [
    { name: 'Circle', cls: 'rounded-full' },
    { name: 'Square', cls: '' },
    { name: 'Triangle', cls: 'clip-triangle' },
  ]
  return (
    <div>
      <p className="text-orange-800/90">Click the shape that matches the name!</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {shapes.map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-2">
            <div className={`w-20 h-20 bg-orange-400 ${s.cls} flex-shrink-0`}></div>
            <button className="px-3 py-1 rounded-lg bg-orange-100 text-orange-800 font-semibold">{s.name}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function NumberPop() {
  const nums = [1,2,3,4,5,6,7,8,9]
  return (
    <div>
      <p className="text-orange-800/90">Tap numbers in order from 1 to 9!</p>
      <div className="grid grid-cols-3 gap-3 mt-4">
        {nums.map(n => (
          <button key={n} className="aspect-square rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 text-white text-2xl font-extrabold shadow-lg">
            {n}
          </button>
        ))}
      </div>
    </div>
  )
}

function AbcTrace() {
  const letters = ['A','B','C','D','E','F']
  return (
    <div>
      <p className="text-orange-800/90">Trace letters with your finger or mouse.</p>
      <div className="flex flex-wrap gap-3 mt-4">
        {letters.map(l => (
          <div key={l} className="w-16 h-20 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-3xl font-black text-orange-700">
            {l}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activities
