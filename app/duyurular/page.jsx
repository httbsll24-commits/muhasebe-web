'use client';
import { useEffect, useState } from 'react';

export default function DuyurularPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news');
        const json = await res.json();
        if (json.success) setNews(json.data);
      } catch (err) {
        console.error('Haberler çekilemedi:', err);
      }
    }
    fetchNews();
  }, []);

  return (
    <main className="min-h-screen bg-[#0b1329] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-slate-800 pb-6 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-amber-400">
            Mali Duyurular & Resmi Güncellemeler
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Vergi mevzuatı, e-dönüşüm takvimi ve resmi gazete duyuruları.
          </p>
        </div>

        {news.length === 0 ? (
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-8 text-center text-slate-400">
            Henüz eklenmiş güncel bir duyuru bulunmuyor.
          </div>
        ) : (
          <div className="space-y-6">
            {news.map((item) => (
              <div key={item._id} className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition">
                <div className="text-xs text-amber-400 font-semibold mb-2">
                  {new Date(item.createdAt).toLocaleDateString('tr-TR')}
                </div>
                <h2 className="text-xl font-bold mb-3 text-slate-100">{item.title}</h2>
                <p className="text-slate-300 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
