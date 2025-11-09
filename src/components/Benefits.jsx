import { Sprout, Truck, ShieldCheck } from 'lucide-react'

const perks = [
  {
    title: 'Farm-fresh quality',
    desc: 'Sourced directly from partner farms for peak ripeness and unmatched flavor.',
    icon: Sprout,
  },
  {
    title: 'Fast, eco delivery',
    desc: 'Chilled, eco-friendly packaging keeps your fruits fresh and crisp.',
    icon: Truck,
  },
  {
    title: 'Hygiene & safety',
    desc: 'Strict quality checks and food-safe handling in every step.',
    icon: ShieldCheck,
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-green-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-10">Why FruitBox?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.title} className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <perk.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{perk.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
