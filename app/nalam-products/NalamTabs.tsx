"use client";

import { useState } from "react";

const products = [
  { icon: "🌶️", name: "Idly Milahai Podi", tamil: "இட்லி மிளகாய் பொடி", desc: "Classic spicy chilly powder — the perfect sidekick for idly and dosa", ingredients: "Chilly, Gram Dhal, Orid Dhal, Asafoetida, Sesame, Salt", color: "from-red-500 to-orange-500" },
  { icon: "🫘", name: "Paruppu Podi", tamil: "பருப்பு பொடி", desc: "Lentil powder — best enjoyed with hot rice and a drizzle of ghee", ingredients: "Toor Dhal, Chilly, Dhaniya, Pepper, Fenugreek, Cumin, Asafoetida", color: "from-yellow-500 to-amber-500" },
  { icon: "🍲", name: "Sambar Podi", tamil: "சாம்பார் பொடி", desc: "Rich, aromatic sambar powder for a flavourful sambar every time", ingredients: "Toor Dhal, Chilly, Dhaniya, Pepper, Fenugreek, Cumin, Asafoetida", color: "from-orange-500 to-red-600" },
  { icon: "🥣", name: "Rasam Podi", tamil: "ரசம் பொடி", desc: "Tangy and peppery rasam powder — comforting and digestive", ingredients: "Toor Dhal, Chilly, Dhaniya, Pepper, Fenugreek, Cumin, Asafoetida", color: "from-amber-400 to-yellow-600" },
  { icon: "🌿", name: "Karuvepilai Podi", tamil: "கறுவேப்பிலை பொடி", desc: "Fragrant curry leaves powder — nutritious, aromatic, and delicious", ingredients: "Curry Leaves, Cumin, Dhaniya, Orid Dhal, Chilly, Pepper", color: "from-green-500 to-teal-600" },
  { icon: "💚", name: "Kollu Podi", tamil: "கொள்ளு பொடி", desc: "Horse gram powder — traditional, healthy, and flavourful", ingredients: "Fried Gram, Chilly, Cumin, Garlic, Salt", color: "from-lime-600 to-green-700" },
  { icon: "🟠", name: "Andhra Paruppu Podi", tamil: "ஆந்திர பருப்பு பொடி", desc: "Bold Andhra-style spicy dhal powder with a distinctive kick", ingredients: "Fried Gram, Chilly, Cumin, Garlic, Salt", color: "from-orange-600 to-red-500" },
  { icon: "🌾", name: "Health Mix", tamil: "ஹெல்த் மிக்ஸ்", desc: "Multi-grain nutrition powder for children and adults — energising and wholesome", ingredients: "Ragi, Pearl Millet, Samai Wheat, Green Full Moong Dhal, Fried Dhall, Corn, Barley, Sago, Rice, Bengal Gram Dhal, Cashew Nut, Badam, Kasa Kasa, Vellari Vidai, Red Rice, Foxtail Millet, Cardamom", color: "from-yellow-600 to-amber-700" },
  { icon: "🟤", name: "Pulikachal Paste", tamil: "புளிக்கச்சல் பேஸ்ட்", desc: "Ready-to-use tamarind paste — quick, tangy Pulikachal rice in minutes", ingredients: "Tamarind, Chilly, Sesame, Groundnut, Salt, Spices", color: "from-amber-700 to-orange-800" },
];

const highlights = [
  { icon: "🏠", title: "Home Made", desc: "Prepared fresh at home with traditional recipes." },
  { icon: "🚫", title: "No Preservatives", desc: "Pure, natural ingredients only." },
  { icon: "✅", title: "FSSAI Certified", desc: "Reg. No. 22420550000184" },
  { icon: "🥗", title: "100% Vegetarian", desc: "All products are certified vegetarian (VEG)." },
];

const tiffinItems = [
  { icon: "🌅", label: "Breakfast Tiffin", desc: "Idly, Dosa, Pongal, Upma & more" },
  { icon: "☀️", label: "Lunch Delivery", desc: "Rice, Sambar, Rasam, Kootu, Sides" },
  { icon: "🌙", label: "Dinner Orders", desc: "Fresh dinner meals on order" },
  { icon: "📦", label: "Monthly Subscription", desc: "Regular tiffin delivery packages" },
  { icon: "🏠", label: "Home Delivery", desc: "Delivered fresh to your door" },
  { icon: "🌿", label: "No Preservatives", desc: "Pure home-cooked, every day" },
];

export default function NalamTabs() {
  const [tab, setTab] = useState<"products" | "kitchen">("products");

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-10">

      {/* Highlights */}
      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.title} className="bg-white rounded-2xl p-5 shadow-sm text-center border border-green-100">
              <div className="text-4xl mb-2">{h.icon}</div>
              <h3 className="font-bold text-gray-800 mb-1">{h.title}</h3>
              <p className="text-gray-500 text-xs">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tab Toggle */}
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl shadow-md p-1.5 flex gap-1 border border-green-100">
          <button
            onClick={() => setTab("products")}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
              tab === "products"
                ? "bg-gradient-to-r from-green-700 to-teal-600 text-white shadow-md scale-105"
                : "text-gray-500 hover:text-green-700 hover:bg-green-50"
            }`}
          >
            🌶️ Products
          </button>
          <button
            onClick={() => setTab("kitchen")}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
              tab === "kitchen"
                ? "bg-gradient-to-r from-green-700 to-teal-600 text-white shadow-md scale-105"
                : "text-gray-500 hover:text-green-700 hover:bg-green-50"
            }`}
          >
            🍱 Kitchen
          </button>
        </div>
      </div>

      {/* Products Tab */}
      {tab === "products" && (
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
            <p className="text-gray-500 mt-1 text-sm">9 varieties · Home made · Hygiene / Tasty</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                <div className={`bg-gradient-to-r ${p.color} px-5 py-4`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{p.icon}</span>
                    <div>
                      <h3 className="text-white font-bold leading-tight">{p.name}</h3>
                      <p className="text-white/70 text-xs">{p.tamil}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs leading-relaxed">
                      <span className="font-semibold text-gray-500">Ingredients: </span>{p.ingredients}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <p className="text-green-700 text-sm">
              ✅ Best Before: 3 months from date of manufacturing · Store in dry containers · No Preservatives
            </p>
          </div>
        </section>
      )}

      {/* Kitchen Tab */}
      {tab === "kitchen" && (
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Daily Tiffin & Lunch Delivery</h2>
            <p className="text-gray-500 mt-1 text-sm">Fresh home-cooked meals delivered to your doorstep</p>
          </div>
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-green-100">
            <div className="bg-gradient-to-r from-green-700 to-teal-600 px-8 py-6 text-white">
              <div className="flex items-center gap-4">
                <span className="text-5xl">🍱</span>
                <div>
                  <h3 className="text-2xl font-bold">Nalam Kitchen</h3>
                  <p className="text-green-200 mt-0.5">Home-cooked · Hygienic · Tasty</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {tiffinItems.map((item) => (
                  <div key={item.label} className="flex gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
                <p className="text-amber-800 font-semibold text-sm mb-3">📞 To subscribe or place a daily order</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="tel:9600056763" className="bg-green-700 text-white font-bold px-6 py-2 rounded-full hover:bg-green-800 transition-colors">
                    96000 56763 — Rajan
                  </a>
                  <a href="tel:9840257907" className="bg-white border border-green-700 text-green-700 font-bold px-6 py-2 rounded-full hover:bg-green-50 transition-colors">
                    98402 57907 — Ganessan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="bg-gradient-to-br from-green-800 to-teal-700 text-white rounded-3xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Place Your Order</h2>
        <div className="grid sm:grid-cols-2 gap-8 text-sm">
          <div className="space-y-5">
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-green-200 text-xs font-semibold uppercase tracking-wide mb-1">R. N. Rajan</p>
              <a href="tel:9600056763" className="text-2xl font-bold hover:underline block">96000 56763</a>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-green-200 text-xs font-semibold uppercase tracking-wide mb-1">T. S. Ganessan</p>
              <a href="tel:9840257907" className="text-2xl font-bold hover:underline block">98402 57907</a>
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-green-200 text-xs font-semibold uppercase tracking-wide mb-1">Address</p>
              <p className="font-medium leading-relaxed">D 41, Anand Apartments,<br />87/50, LB Road, Thiruvanmiyur,<br />Chennai - 600 041</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-green-200 text-xs font-semibold uppercase tracking-wide mb-1">FSSAI Reg. No.</p>
              <p className="font-mono font-bold">22420550000184</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/919600056763" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg">
            💬 WhatsApp — Rajan
          </a>
          <a href="https://wa.me/919840257907" target="_blank" rel="noopener noreferrer" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow-lg">
            💬 WhatsApp — Ganessan
          </a>
        </div>
      </section>
    </div>
  );
}
