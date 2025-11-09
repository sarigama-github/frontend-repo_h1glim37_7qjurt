import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Benefits from './components/Benefits'
import Plans from './components/Plans'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Benefits />
        <Plans />

        <section id="contact" className="py-16 bg-green-50/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-8 bg-white border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight">Get in touch</h2>
              <p className="mt-2 text-gray-600">Questions about plans or custom boxes? We’d love to help.</p>
              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <input className="w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" placeholder="Your name" />
                <input type="email" className="w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" placeholder="Email address" />
                <textarea className="sm:col-span-2 w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" rows={4} placeholder="How can we help?" />
                <button className="sm:col-span-2 inline-flex justify-center rounded-md bg-green-600 px-5 py-3 text-white font-medium hover:bg-green-700 transition">Send message</button>
              </form>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">© {new Date().getFullYear()} FruitBox. Freshness delivered.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
