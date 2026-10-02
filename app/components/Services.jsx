export default function Services() {
  const services = [
    {
      title: "Mali Müşavirlik & Muhasebe",
      desc: "Defter tutma, beyanname süreçleri ve mevzuata uygun finansal raporlama hizmetleri.",
      icon: "📊"
    },
    {
      title: "Vergi & Danışmanlık",
      desc: "Vergi planlaması, teşvik yönetimi, vergi incelemeleri ve risk analizleri.",
      icon: "⚖️"
    },
    {
      title: "E-Dönüşüm Süreçleri",
      desc: "E-Fatura, E-Arşiv, E-Defter entegrasyonu ve dijital muhasebe danışmanlığı.",
      icon: "💻"
    },
    {
      title: "Şirket Kuruluş & Birleşme",
      desc: "Şahıs, Limited, Anonim şirket kuruluşları ve şirket birleşme/devir işlemleri.",
      icon: "🏢"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200" id="hizmetler">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Uzmanlık Alanlarımız
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900">
            İşletmeniz İçin Bütüncül Çözümler
          </h3>
          <p className="text-gray-600 text-sm mt-3">
            Sektördeki tecrübemiz ve dinamik kadromuzla sunduğumuz temel mali hizmetlerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-amber-500/50 hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 bg-amber-500/10 text-2xl flex items-center justify-between rounded-lg mb-4 group-hover:bg-amber-500 group-hover:scale-110 transition-all">
                <span className="p-2">{item.icon}</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}