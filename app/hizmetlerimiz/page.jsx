import Link from 'next/link';

export default function HizmetlerimizPage() {
  const services = [
    { title: 'Mali Müşavirlik & Defter Tutma', desc: 'Kanuni defterlerin tutulması, beyannamelerin hazırlanması ve bildirimlerin yapılması.' },
    { title: 'Vergi Danışmanlığı', desc: 'Vergi planlaması, teşvik yönetimi ve mevzuat değişikliklerine uyum süreci.' },
    { title: 'E-Dönüşüm Hizmetleri', desc: 'E-Fatura, E-Arşiv, E-Defter ve E-İrsaliye geçişi ve operasyonel destek.' },
    { title: 'Şirket Kuruluşu & Danışmanlık', desc: 'LTD, A.Ş. ve Şahıs firmalarının kuruluş, devir ve tasfiye işlemleri.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hizmetlerimiz</h1>
        <p className="text-gray-600 mb-8">Sunduğumuz profesyonel mali ve finansal çözümler</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {services.map((s, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <Link href="/" className="inline-block text-blue-600 font-medium hover:underline">
          &larr; Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}