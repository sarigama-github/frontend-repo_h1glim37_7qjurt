import { ShoppingCart, Leaf } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-green-500 text-white flex items-center justify-center">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">FruitBox</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#products" className="hover:text-gray-900 transition">Products</a>
            <a href="#benefits" className="hover:text-gray-900 transition">Benefits</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </nav>

          <button className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition">
            <ShoppingCart className="h-4 w-4" />
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </header>
  )
}
