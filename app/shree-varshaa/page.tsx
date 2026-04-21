import Link from "next/link";

export const metadata = {
  title: "Shree Varshaa Enterprises - South Indian Catering Chennai",
  description: "Traditional South Indian catering services in Chennai. Daily lunch, special functions, Pooja, Valaikappu, Gruhapravesam catering.",
};

const services = [
  { icon: "🍽️", title: "Daily Lunch Services", desc: "Fresh, home-style South Indian meals delivered daily. Rice, sambar, rasam, kootu, and more." },
  { icon: "🙏", title: "Special Functions", desc: "Pooja, Valaikappu, Gruhapravesam, and all auspicious occasions catered with authentic flavors." },
  { icon: "🌅", title: "Breakfast Orders", desc: "Idli, dosa, pongal, upma, and traditional breakfast items for morning events." },
  { icon: "🌙", title: "Dinner Orders", desc: "Complete dinner spreads with rice, gravies, sides, and desserts for any gathering size." },
  { icon: "📦", title: "Special Orders", desc: "Custom menu planning for your specific event needs and dietary preferences." },
  { icon: "🪔", title: "Festival Specials", desc: "Festival sweets, sundal, kozhukattai, and traditional festival items made fresh." },
];

const specialMenu = [
  "Sambar Sadam", "Rasam Sadam", "Curd Rice", "Lemon Rice", "Tamarind Rice",
  "Coconut Rice", "Pongal", "Bisibelebath", "Puliyodarai", "Variety Rice",
  "Keerai Kootu", "Potato Fry", "Beans Poriyal", "Carrot Kootu", "Drumstick Sambar",
  "Appalam", "Pickle", "Chutney", "Papad", "Sweets (Ladoo / Kesari / Halwa)",
];

const varieties = [
  { name: "Podi Varieties", items: ["Idli Podi", "Dosai Podi", "Curry Leaf Podi", "Coriander Podi", "Garlic Podi", "Pepper Podi"] },
  { name: "Pickle Varieties", items: ["Mango Pickle", "Lemon Pickle", "Ginger Pickle", "Garlic Pickle", "Mixed Pickle", "Gooseberry Pickle"] },
  { name: "Applam Varieties", items: ["Plain Applam", "Pepper Applam", "Jeera Applam", "Garlic Applam", "Chilli Applam", "Rice Applam"] },
  { name: "Vadam Varieties", items: ["Rice Vadam", "Sago Vadam", "Chilli Vadam", "Urad Dal Vadam", "Masala Vadam", "Plain Vadam"] },
];

export default function ShreeVarshaaPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Nav */}
      <nav className="bg-white shadow-sm py-3 px-6">
        <Link href="/" className="text-orange-600 hover:text-orange-700 text-sm font-medium">← Back to Home</Link>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white py-16 px-6 text-center">
        <div className="text-6xl mb-4">🍱</div>
        <h1 className="text-4xl font-bold">Shree Varshaa Enterprises</h1>
        <p className="text-orange-100 text-xl mt-2 italic">&quot;Velniya Valiyagam&quot;</p>
        <p className="text-orange-100 mt-3 max-w-xl mx-auto">
          Authentic South Indian catering with the taste of home — for every occasion, big or small.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a href="tel:9840257907" className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full hover:bg-orange-50 transition-colors">
            📞 98402 57907
          </a>
          <a href="tel:9600956763" className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full hover:bg-orange-50 transition-colors">
            📞 96009 56763
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-14">
        {/* Services */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Special Functions Menu */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Special Functions Menu</h2>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {specialMenu.map((item) => (
                <div key={item} className="bg-orange-50 border border-orange-100 rounded-lg px-3 py-2 text-sm text-gray-700 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Varieties */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Home-Made Varieties Available</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {varieties.map((v) => (
              <div key={v.name} className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-semibold text-orange-600 mb-3">{v.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {v.items.map((item) => (
                    <span key={item} className="bg-amber-50 text-gray-600 text-xs px-3 py-1 rounded-full border border-amber-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div>
                <p className="text-orange-200 font-medium">TS Ganesan</p>
                <a href="tel:9840257907" className="text-xl font-bold hover:underline">98402 57907</a>
              </div>
              <div>
                <p className="text-orange-200 font-medium">R N Rajan</p>
                <a href="tel:9600956763" className="text-xl font-bold hover:underline">96009 56763</a>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-orange-200 font-medium">Email</p>
                <a href="mailto:shreevarshaacatering@gmail.com" className="font-medium hover:underline break-all">
                  shreevarshaacatering@gmail.com
                </a>
              </div>
              <div>
                <p className="text-orange-200 font-medium">Address</p>
                <p>D 41, Anand Apartments, 87/50, LB Road, Thiruvanmiyur, Chennai - 600 041</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919840257907"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              💬 WhatsApp Us
            </a>
            <a href="mailto:shreevarshaacatering@gmail.com" className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors">
              ✉️ Send Email
            </a>
          </div>
        </section>
      </div>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/919840257907"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors text-2xl z-50"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
