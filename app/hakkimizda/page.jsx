'use client';

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-[#0b1329] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">KURUMSAL</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Hakkımızda</h1>
          <p className="text-slate-400 mt-2 text-sm max-w-2xl mx-auto">
            10 yılı aşkın tecrübemizle işletmenizin finansal süreçlerinde güvenilir çözüm ortağınızız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-amber-400 mb-4">Vizyonumuz</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Teknolojik gelişmelere hızla adapte olarak, e-dönüşüm ve dijital muhasebe süreçlerinde mükelleflerimize en hızlı, güvenilir ve sürdürülebilir mali danışmanlık hizmetini sunmak.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-amber-400 mb-4">Misyonumuz</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Mevzuat değişikliklerini anlık takip ederek işletmelerin vergi yükümlülüklerini eksiksiz yerine getirmelerini sağlamak ve doğru finansal planlama ile büyümelerine katkıda bulunmak.
            </p>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">Neden Bizimle Çalışmalısınız?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="p-4">
              <div className="text-2xl font-extrabold text-amber-400 mb-1">%100</div>
              <div className="text-xs text-slate-400">Şeffaf & Doğru Raporlama</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-extrabold text-amber-400 mb-1">7/24</div>
              <div className="text-xs text-slate-400">Mevzuat Danışmanlığı</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-extrabold text-amber-400 mb-1">Dijital</div>
              <div className="text-xs text-slate-400">E-Dönüşüm Entegrasyonu</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}