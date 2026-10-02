'use client';

export default function HizmetlerimizPage() {
  const services = [
    {
      title: 'Mali Müşavirlik & Muhasebe',
      desc: 'Genel muhasebe kayıtlarının tutulması, vergi beyannamelerinin hazırlanması ve resmi kurumlara sunulması süreçlerinin eksiksiz yönetimi.'
    },
    {
      title: 'Şirket Kuruluşu & Tescil',
      desc: 'Şahıs, Limited ve Anonim şirket kuruluş işlemleri, ana sözleşme hazırlanması, ticaret odası ve vergi dairesi tescil süreçleri.'
    },
    {
      title: 'E-Dönüşüm Hizmetleri',
      desc: 'E-Fatura, E-Arşiv, E-İrsaliye ve E-Defter sistemlerine geçiş danışmanlığı ve yazılım entegrasyonu desteği.'
    },
    {
      title: 'Vergi Danışmanlığı & Planlama',
      desc: 'Mevzuat değişikliklerine uygun vergi planlaması, vergi avantajları ve muafiyet takibi ile risk yönetimi.'
    },
    {
      title: 'SGK & Personel Danışmanlığı',
      desc: 'Bordrolama hizmetleri, işe giriş-çıkış bildirgeleri, SGK teşvik analizleri ve iş hukuku danışmanlığı.'
    },
    {
      title: 'Finansal Raporlama',
      desc: 'Şirket yöneticilerine ve yatırımcılara yönelik periyodik nakit akış, kar-zarar ve bilanço analiz raporlamaları.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#0b1329] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">ÇÖZÜMLERİMİZ</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Hizmetlerimiz</h1>
          <p className="text-slate-400 mt-2 text-sm max-w-xl mx-auto">
            İşletmenizin ihtiyacına özel profesyonel mali ve finansal hizmetler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div key={index} className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition">
              <h2 className="text-lg font-bold text-amber-400 mb-3">{item.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}