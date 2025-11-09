export default function Plans() {
  const tiers = [
    { name: 'Starter', price: 19, includes: ['Any 3 fruits', '1-2 people', 'Weekly delivery'] },
    { name: 'Family', price: 35, includes: ['Any 6 fruits', '3-4 people', 'Weekly delivery'] },
    { name: 'Mega', price: 49, includes: ['Any 10 fruits', '5-6 people', 'Twice weekly'] },
  ]

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Flexible Plans</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-2"><span className="text-3xl font-extrabold">${tier.price}</span> <span className="text-gray-500 text-sm">/ box</span></p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-md bg-green-600 py-2 text-white font-medium hover:bg-green-700 transition">Select</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
