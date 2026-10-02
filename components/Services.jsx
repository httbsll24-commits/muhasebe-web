'use client';

export default function Services() {
  const services = [
    { title: 'Mali Müşavirlik', desc: 'Genel muhasebe tutulması, beyanname düzenleme ve mali raporlama.' },
    { title: 'Şirket Kuruluşu', desc: 'Şahıs, Limited ve Anonim şirket kuruluş süreçlerinin yönetimi.' },
    { title: 'E-Dönüşüm Hizmetleri', desc: 'E-Fatura, E-Arşiv ve E-Defter entegrasyonu ve danışmanlığı.' },
    { title: 'Vergi Danışmanlığı', desc: 'Vergi mevzuatı takibi, teşvik ve vergi planlama hizmetleri.' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition">
              <h3 className="text-lg font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}