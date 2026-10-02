'use client';

import { useEffect, useState } from 'react';

export default function NewsPanel() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Veritabanından haberleri çek
  const fetchNews = async () => {
    try {
      const res = await fetch('/api/news');
      const result = await res.json();

      if (result.success) {
        // Eğer veritabanı boşsa varsayılan haberleri ekle
        if (result.data.length === 0) {
          await seedInitialNews();
        } else {
          setNews(result.data);
        }
      }
    } catch (error) {
      console.error('Haberler yüklenirken hata oluştu:', error);
    } finally {
      setLoading(false);
    }
  };

  // Veritabanı boşsa ilk haberleri ekleme fonksiyonu
  const seedInitialNews = async () => {
    const defaultNews = [
      {
        title: '2026 Yılı Asgari Ücret ve Vergi İstisnaları Açıklandı',
        badge: 'Mevzuat',
        summary: 'Yeni yılda uygulanacak asgari ücret tutarları ve gelir vergisi matrah istisnalarına ilişkin detaylı rehber yayımlandı.',
        date: new Date().toLocaleDateString('tr-TR'),
        isImportant: true,
      },
      {
        title: 'E-Fatura ve E-Defter Uygulamalarında Yeni Dönem',
        badge: 'E-Dönüşüm',
        summary: 'Gelir İdaresi Başkanlığı tarafından e-fatura geçiş limitleri ve e-defter yükleme süreleriyle ilgili yeni tebliğ yayımlandı.',
        date: new Date().toLocaleDateString('tr-TR'),
        isImportant: false,
      },
      {
        title: 'Kurumlar Vergisi Beyanname Verme Süreleri Uzatıldı',
        badge: 'Duyuru',
        summary: 'Maliye Bakanlığı, mükelleflerden gelen talepler doğrultusunda beyanname sürelerinde düzenlemeye gitti.',
        date: new Date().toLocaleDateString('tr-TR'),
        isImportant: false,
      }
    ];

    for (const item of defaultNews) {
      await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
    }

    // Ekledikten sonra tekrar çek
    fetchNews();
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          Mevzuat ve Haberler Yükleniyor...
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Güncel Mevzuat & Haberler</h2>
            <p className="text-sm text-gray-600 mt-1">Maliye ve muhasebe dünyasındaki son gelişmeler</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <div 
              key={item._id} 
              className={`bg-white rounded-lg p-6 border shadow-sm hover:shadow-md transition ${
                item.isImportant ? 'border-amber-400 bg-amber-50/20' : 'border-gray-200'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {item.badge}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                {item.summary}
              </p>
              <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs font-medium text-blue-600 hover:underline cursor-pointer">
                  Devamını Oku &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}