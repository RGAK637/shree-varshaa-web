import Link from "next/link";
import NalamTabs from "./NalamTabs";

export const metadata = {
  title: "Nalam Products & Kitchen - Homemade Powders & Tiffin | Chennai",
  description: "Authentic homemade spice powders, health mix, and daily tiffin/lunch delivery. No preservatives. FSSAI certified. Thiruvanmiyur, Chennai.",
};

export default function NalamProductsPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Nav */}
      <nav className="bg-white shadow-sm py-3 px-6">
        <Link href="/" className="text-green-700 hover:text-green-800 text-sm font-medium">← Back to Home</Link>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-teal-700 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-9xl flex items-center justify-center select-none pointer-events-none">🌿🌶️🌿</div>
        <div className="relative z-10">
          <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm mb-4 backdrop-blur-sm">
            Vazhga Vaiyagam &nbsp;·&nbsp; Vazhga Valamudan
          </div>
          <h1 className="text-5xl font-bold">Nalam Products & Kitchen</h1>
          <p className="text-green-200 text-xl mt-2 font-medium">Homemade Kukkari Powders</p>
          <p className="text-green-100 text-base mt-2 italic">&quot;Taste it.... Feel it..... Enjoy it...&quot;</p>
          <p className="text-green-200 text-sm mt-4 max-w-lg mx-auto">
            Authentic spice powders and daily tiffin — made at home with traditional recipes, no preservatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="tel:9600056763" className="bg-white text-green-800 font-bold px-6 py-3 rounded-full hover:bg-green-50 transition-colors shadow">
              📞 96000 56763 — R. N. Rajan
            </a>
            <a href="tel:9840257907" className="bg-white/20 text-white border border-white/40 font-bold px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
              📞 98402 57907 — T. S. Ganessan
            </a>
          </div>
        </div>
      </div>

      {/* Tabs + Content */}
      <NalamTabs />

      {/* WhatsApp float */}
      <a
        href="https://wa.me/919600056763"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors text-2xl z-50"
        title="WhatsApp Order"
      >
        💬
      </a>
    </div>
  );
}
