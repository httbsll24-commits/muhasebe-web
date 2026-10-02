'use client';

export default function ContactForm() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Bizimle İletişime Geçin</h2>
          <p className="text-slate-600 mt-2">Mali danışmanlık ve muhasebe hizmetlerimiz için form doldurabilirsiniz.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ad Soyad</label>
            <input type="text" placeholder="Adınız ve Soyadınız" className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">E-Posta Adresi</label>
            <input type="email" placeholder="ornek@email.com" className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mesajınız</label>
            <textarea rows={4} placeholder="Talebinizi detaylandırın..." className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition text-sm">
            Mesaj Gönder
          </button>
        </form>
      </div>
    </section>
  );
}