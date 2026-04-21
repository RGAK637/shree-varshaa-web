import Link from "next/link";

export const metadata = {
  title: "Nalam Kitchen - Homemade Podi, Pickles & More | Chennai",
  description: "Fresh homemade podi, pickles, applam, and vadam made with traditional recipes. No preservatives. Order now from Nalam Kitchen, Chennai.",
};

const products = [
  {
    icon: "🌶️",
    name: "Podi Varieties",
    desc: "Freshly ground podis that make every meal special",
    items: [
      { name: "Idli Podi", detail: "Classic spiced lentil powder" },
      { name: "Dosai Podi", detail: "Perfectly paired with crispy dosas" },
      { name: "Curry Leaf Podi", detail: "Aromatic and flavourful" },
      { name: "Coriander Podi", detail: "Fresh herb-infused powder" },
      { name: "Garlic Podi", detail: "Bold and fragrant" },
      { name: "Pepper Podi", detail: "Spicy peppercorn blend" },
    ],
  },
  {
    icon: "🫙",
    name: "Pickle Varieties",
    desc: "Traditional pickles made with fresh ingredients",
    items: [
      { name: "Mango Pickle", detail: "Tangy raw mango classic" },
      { name: "Lemon Pickle", detail: "Zesty and bold" },
      { name: "Ginger Pickle", detail: "Digestive and spicy" },
      { name: "Garlic Pickle", detail: "Rich, pungent flavour" },
      { name: "Mixed Pickle", detail: "Best of everything" },
      { name: "Gooseberry Pickle", detail: "Vitamin C rich classic" },
    ],
  },
  {
    icon: "🥨",
    name: "Applam Varieties",
    desc: "Thin, crispy accompaniments for every meal",
    items: [
      { name: "Plain Applam", detail: "Light and crispy" },
      { name: "Pepper Applam", detail: "Peppery bite" },
      { name: "Jeera Applam", detail: "Cumin scented" },
      { name: "Garlic Applam", detail: "Garlicky crunch" },
      { name: "Chilli Applam", detail: "Spicy kick" },
      { name: "Rice Applam", detail: "Classic rice base" },
    ],
  },
  {
    icon: "🍥",
    name: "Vadam Varieties",
    desc: "Sun-dried traditional wafers, made fresh",
    items: [
      { name: "Rice Vadam", detail: "Classic rice based" },
      { name: "Sago Vadam", detail: "Light and translucent" },
      { name: "Chilli Vadam", detail: "Fiery and crunchy" },
      { name: "Urad Dal Vadam", detail: "Protein-rich crunch" },
      { name: "Masala Vadam", detail: "Spiced blend" },
      { name: "Plain Vadam", detail: "Simple and pure" },
    ],
  },
];

const whyUs = [
  { icon: "🏠", title: "Homemade", desc: "Made fresh at home with traditional recipes passed down generations." },
  { icon: "🚫", title: "No Preservatives", desc: "Pure, natural ingredients — no artificial colours or preservatives." },
  { icon: "👩‍🍳", title: "Traditional Recipes", desc: "Authentic flavours you grew up loving, prepared with care." },
  { icon: "🚚", title: "Home Delivery", desc: "Fresh products delivered to your doorstep in Chennai." },
];

export default function NalamKitchenPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Nav */}
      <nav className="bg-white shadow-sm py-3 px-6">
        <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">← Back to Home</Link>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <div className="text-6xl mb-4">🫙</div>
        <h1 className="text-4xl font-bold">Nalam Kitchen</h1>
        <p className="text-blue-200 text-xl mt-2">Homemade Goodness, Delivered Fresh</p>
        <p className="text-blue-100 mt-3 max-w-xl mx-auto">
          Authentic homemade podis, pickles, applam, and vadam — crafted with love and traditional recipes, free from preservatives.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a href="tel:9840257907" className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-full hover:bg-blue-50 transition-colors">
            📞 98402 57907
          </a>
          <a href="tel:9600956763" className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-full hover:bg-blue-50 transition-colors">
            📞 96009 56763
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-14">
        {/* Why Us */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Nalam Kitchen?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-white rounded-xl p-5 shadow-sm text-center">
                <div className="text-3xl mb-2">{w.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{w.title}</h3>
                <p className="text-gray-500 text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Products</h2>
          <div className="space-y-8">
            {products.map((cat) => (
              <div key={cat.name} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 flex items-center gap-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{cat.name}</h3>
                    <p className="text-blue-200 text-sm">{cat.desc}</p>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="border border-blue-100 rounded-lg p-3 hover:border-blue-300 transition-colors">
                      <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Order Now</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div>
                <p className="text-blue-200 font-medium">TS Ganesan</p>
                <a href="tel:9840257907" className="text-xl font-bold hover:underline">98402 57907</a>
              </div>
              <div>
                <p className="text-blue-200 font-medium">R N Rajan</p>
                <a href="tel:9600956763" className="text-xl font-bold hover:underline">96009 56763</a>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-blue-200 font-medium">Email</p>
                <a href="mailto:shreevarshaacatering@gmail.com" className="font-medium hover:underline break-all">
                  shreevarshaacatering@gmail.com
                </a>
              </div>
              <div>
                <p className="text-blue-200 font-medium">Address</p>
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
              💬 WhatsApp Order
            </a>
            <a href="mailto:shreevarshaacatering@gmail.com" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
              ✉️ Email Us
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
