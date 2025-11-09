const fruits = [
  { name: 'Mango', price: 6.5, img: 'https://images.unsplash.com/photo-1615485737651-6fcd274972a3?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Blueberries', price: 5.0, img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Kiwi', price: 4.2, img: 'https://images.unsplash.com/photo-1601493700677-4c4f8b5711a2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Apple', price: 3.0, img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Strawberries', price: 5.8, img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Pineapple', price: 4.9, img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop' },
]

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Picks</h2>
            <p className="text-gray-600">Freshly sourced every week</p>
          </div>
          <a href="#plans" className="text-green-700 font-medium hover:underline">See subscription plans</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fruits.map((fruit) => (
            <div key={fruit.name} className="group rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={fruit.img} alt={fruit.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{fruit.name}</h3>
                  <span className="text-green-700 font-semibold">${fruit.price.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">Sweet, ripe, and full of nutrients.</p>
                <button className="mt-4 w-full rounded-md bg-green-600 py-2 text-white font-medium hover:bg-green-700 transition">Add to box</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
