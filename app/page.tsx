import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
          <p className="text-gray-500 mt-1">Traditional South Indian food, made with love</p>
        </div>
      </header>

      {/* Cards */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Shree Varshaa Card */}
          <Link href="/shree-varshaa" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-orange-400 to-amber-500 p-8 text-white">
                <div className="text-5xl mb-3">🍱</div>
                <h2 className="text-2xl font-bold">Shree Varshaa Enterprises</h2>
                <p className="text-orange-100 mt-1 text-sm">Velniya Valiyagam</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Traditional South Indian catering for daily meals, special functions, and festivals.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>✅ Daily Lunch & Dinner Services</li>
                  <li>✅ Pooja, Valaikappu, Gruhapravesam</li>
                  <li>✅ Festival Sweets & Snacks</li>
                  <li>✅ 20+ Special Menu Items</li>
                </ul>
                <span className="inline-block bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full group-hover:bg-orange-600 transition-colors">
                  View Details →
                </span>
              </div>
            </div>
          </Link>

          {/* Nalam Kitchen Card */}
          <Link href="/nalam-kitchen" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
                <div className="text-5xl mb-3">🫙</div>
                <h2 className="text-2xl font-bold">Nalam Kitchen</h2>
                <p className="text-blue-100 mt-1 text-sm">Homemade Goodness, Delivered Fresh</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Authentic homemade podi, pickles, applam, and vadam — made fresh with traditional recipes.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>✅ Podi Varieties (6+ types)</li>
                  <li>✅ Traditional Pickles (6+ types)</li>
                  <li>✅ Applam & Vadam Varieties</li>
                  <li>✅ Fresh, No Preservatives</li>
                </ul>
                <span className="inline-block bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full group-hover:bg-blue-600 transition-colors">
                  View Products →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Contact strip */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>📞 98402 57907 &nbsp;|&nbsp; 96009 56763 &nbsp;|&nbsp; ✉️ shreevarshaacatering@gmail.com</p>
          <p className="mt-1">D 41, Anand Apartments, 87/50, LB Road, Thiruvanmiyur, Chennai - 600 041</p>
        </div>
      </main>
    </div>
  );
}
