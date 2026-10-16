export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h2 className="text-2xl font-bold text-yellow-400">
            Hatice Başol
          </h2>

          <div className="hidden items-center gap-8 md:flex">
            <a href="/" className="hover:text-yellow-400">
              Ana Sayfa
            </a>

            <a
              href="/hizmetler"
              className="hover:text-yellow-400"
            >
              Hizmetler
            </a>

            <a href="#" className="hover:text-yellow-400">
              Blog
            </a>

            <a href="#" className="hover:text-yellow-400">
              İletişim
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"></div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold text-yellow-400">
              Mali Müşavirlik & Muhasebe Hizmetleri
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              İşletmenizin
              <span className="block text-yellow-400">
                Finansal Gücünü
              </span>
              Birlikte Yönetelim
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Muhasebe, vergi danışmanlığı, SGK işlemleri ve mali
              müşavirlik alanlarında profesyonel çözümler sunuyoruz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-yellow-500 px-8 py-4 font-bold text-slate-950">
                Randevu Oluştur
              </button>

              <button className="rounded-xl border border-yellow-500 px-8 py-4">
                Hizmetlerimiz
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
              <div className="mb-6 h-2 w-24 rounded-full bg-yellow-400"></div>

              <h3 className="text-2xl font-bold text-yellow-400">
                Güvenilir Mali Danışmanlık
              </h3>

              <p className="mt-4 text-slate-300">
                Vergi planlaması, muhasebe süreçleri, SGK işlemleri ve
                mali müşavirlik hizmetlerinde yanınızdayız.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl bg-slate-800 p-4">
                  ✓ Vergi Danışmanlığı
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  ✓ SGK Takibi
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  ✓ E-Fatura Desteği
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-4xl font-bold text-yellow-400">
              10+
            </h3>
            <p className="mt-2 text-slate-300">Yıl Deneyim</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-4xl font-bold text-yellow-400">
              500+
            </h3>
            <p className="mt-2 text-slate-300">Müşteri</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-4xl font-bold text-yellow-400">
              7/24
            </h3>
            <p className="mt-2 text-slate-300">Destek</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-4xl font-bold text-yellow-400">
              %100
            </h3>
            <p className="mt-2 text-slate-300">Güven</p>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-5xl font-bold text-yellow-400">
            Hizmetlerimiz
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Muhasebe Hizmetleri",
              "Vergi Danışmanlığı",
              "SGK İşlemleri",
              "Şirket Kuruluşu",
              "E-Fatura Danışmanlığı",
              "Mali Müşavirlik",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all hover:-translate-y-2 hover:border-yellow-400"
              >
                <h3 className="text-2xl font-bold text-yellow-400">
                  {item}
                </h3>

                <p className="mt-4 text-slate-300">
                  Profesyonel danışmanlık ve güvenilir hizmet.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <h2 className="mb-10 text-4xl font-bold text-yellow-400">
            Neden Bizi Tercih Etmelisiniz?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-xl font-bold">
                Güncel Mevzuat Takibi
              </h3>

              <p className="text-slate-300">
                Vergi ve SGK mevzuatındaki değişiklikleri sürekli takip
                ediyoruz.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold">
                Hızlı Destek
              </h3>

              <p className="text-slate-300">
                İşletmenizin ihtiyaçlarına hızlı çözümler üretiyoruz.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-bold">
                Güvenilir Hizmet
              </h3>

              <p className="text-slate-300">
                Şeffaf ve sürdürülebilir mali danışmanlık sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-yellow-500 p-12 text-slate-950">
          <h2 className="text-4xl font-bold">
            İşletmenize Değer Katmaya Hazırız
          </h2>

          <p className="mt-4 text-lg">
            Hemen iletişime geçin ve ücretsiz ön görüşme talep edin.
          </p>

          <button className="mt-8 rounded-xl bg-slate-950 px-8 py-4 font-bold text-white">
            Bize Ulaşın
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        © 2026 Hatice Başol Mali Müşavirlik
      </footer>
    </main>
  );
}