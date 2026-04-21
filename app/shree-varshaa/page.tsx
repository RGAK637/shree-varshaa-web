import Link from "next/link";

export const metadata = {
  title: "Shree Varshaa Xerox & Stationery | Thiruvanmiyur, Chennai",
  description: "Xerox, Printout, Scan, Lamination, Binding, and Rubber Stamp services in Thiruvanmiyur, Chennai. Open until 9 PM.",
};

const services = [
  { icon: "🖨️", title: "Xerox", desc: "Fast and clear photocopying for documents of all sizes." },
  { icon: "🖥️", title: "Printout", desc: "Black & white and colour printouts for all your needs." },
  { icon: "📄", title: "Scan", desc: "High-quality document scanning to digital formats." },
  { icon: "🗂️", title: "Lamination", desc: "Document lamination for protection and a professional finish." },
  { icon: "📚", title: "Binding", desc: "Spiral binding for books, reports, and presentations." },
  { icon: "🔖", title: "Rubber Stamp", desc: "Custom rubber stamps made quickly for personal and business use." },
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
        <div className="text-6xl mb-4">🏪</div>
        <h1 className="text-4xl font-bold">Shree Varshaa Xerox & Stationery</h1>
        <div className="flex items-center justify-center gap-1 mt-2 text-yellow-200">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="text-sm">4.7 on Google Maps</span>
        </div>
        <p className="text-orange-100 mt-3 max-w-xl mx-auto">
          Your trusted shop for xerox, printout, scanning, lamination, binding, and rubber stamps in Thiruvanmiyur.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a href="tel:04442300545" className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full hover:bg-orange-50 transition-colors">
            📞 044 4230 0545
          </a>
          <a href="tel:9840257907" className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full hover:bg-orange-50 transition-colors">
            📱 98402 57907
          </a>
        </div>
        <p className="text-orange-100 text-sm mt-4">🕘 Open until 9 PM</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-14">

        {/* Services */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div className="space-y-4">
              <div>
                <p className="text-orange-200 font-medium">T.S. Ganessan</p>
                <a href="tel:04442300545" className="block text-lg font-bold hover:underline">📞 044 4230 0545</a>
                <a href="tel:9840257907" className="block text-lg font-bold hover:underline">📱 98402 57907</a>
              </div>
              <div>
                <p className="text-orange-200 font-medium">Hours</p>
                <p className="font-medium">🕘 Open · Closes 9 PM</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-orange-200 font-medium">Email</p>
                <a href="mailto:shree.varshaa.enterprises@gmail.com" className="font-medium hover:underline break-all">
                  shree.varshaa.enterprises@gmail.com
                </a>
              </div>
              <div>
                <p className="text-orange-200 font-medium">Address</p>
                <p>Shop No. 65/28, Valmiki St, Kamaraj Nagar, Thiruvanmiyur, Chennai - 600 041</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.google.com/?q=Shree+Varshaa+Xerox+Stationery+Thiruvanmiyur+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-50 transition-colors"
            >
              📍 Get Directions
            </a>
            <a
              href="https://wa.me/919840257907"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              💬 WhatsApp
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
