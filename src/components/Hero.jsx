import { Star, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-800 px-3 py-1 text-xs font-medium">
              <Star className="h-3.5 w-3.5" /> Fresh • Seasonal • Handpicked
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Fresh fruit boxes delivered to your door
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Curated, ready-to-eat fruits from trusted farms. Flexible plans, cancel anytime.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#plans" className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-white font-medium hover:bg-green-700 transition">
                Choose a Plan
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#products" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium text-green-700 bg-green-100 hover:bg-green-200 transition">
                Explore Fruits
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} className="h-8 w-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/48?img=${i+1}`} alt="Customer" />
                ))}
              </div>
              <p>
                <span className="font-semibold text-gray-900">2,500+</span> happy subscribers
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white shadow-xl p-4">
              <img
                src="https://images.unsplash.com/photo-1587049352851-8d4e89133931?q=80&w=1680&auto=format&fit=crop"
                alt="Fruit box"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4">
              <p className="text-sm font-semibold">This week’s box</p>
              <p className="text-xs text-gray-600">Mangoes, Blueberries, Kiwi, Apples</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
