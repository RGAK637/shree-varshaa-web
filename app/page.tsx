import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Our Businesses</h1>
          <p className="text-gray-500 mt-1">Thiruvanmiyur, Chennai</p>
        </div>
      </header>

      {/* Cards */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Shree Varshaa Card */}
          <Link href="/shree-varshaa" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-orange-400 to-amber-500 p-8 text-white">
                <div className="text-5xl mb-3">🏪</div>
                <h2 className="text-2xl font-bold">Shree Varshaa Xerox & Stationery</h2>
                <p className="text-orange-100 mt-1 text-sm">Valmiki Street, Thiruvanmiyur · ⭐ 4.7</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Your one-stop shop for xerox, printout, scanning, lamination, binding, and rubber stamps.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-5">
                  <li>✅ Xerox &amp; Printout &amp; Scan</li>
                  <li>✅ Lamination</li>
                  <li>✅ Spiral Binding</li>
                  <li>✅ Rubber Stamp</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">📞 044 4230 0545</span>
                  <span className="inline-block bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full group-hover:bg-orange-600 transition-colors">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Nalam Products Card */}
          <Link href="/nalam-products" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-green-700 to-teal-600 p-8 text-white">
                <div className="text-5xl mb-3">🌿</div>
                <h2 className="text-2xl font-bold">Nalam Products</h2>
                <p className="text-green-100 mt-1 text-sm">Homemade Kukkari Powders · Vazhga Vaiyagam</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Homemade spice powders, health mix, and daily tiffin &amp; lunch delivery.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-5">
                  <li>✅ 9 Homemade Podi Varieties</li>
                  <li>✅ Health Mix &amp; Pulikachal Paste</li>
                  <li>✅ Daily Tiffin Delivery</li>
                  <li>✅ Lunch &amp; Dinner Orders</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">📞 96000 56763</span>
                  <span className="inline-block bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full group-hover:bg-green-800 transition-colors">
                    View Products →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer strip */}
        <div className="mt-12 text-center text-gray-400 text-xs space-y-1">
          <p>T. S. Ganessan: 98402 57907 &nbsp;·&nbsp; R. N. Rajan: 96000 56763</p>
          <p>D 41, Anand Apartments, 87/50, LB Road, Thiruvanmiyur, Chennai - 600 041</p>
        </div>
      </main>
    </div>
  );
}
