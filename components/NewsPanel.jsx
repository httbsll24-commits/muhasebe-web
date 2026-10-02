'use client';
import { useEffect, useState } from 'react';

export default function NewsPanel() {
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

  if (!news || news.length === 0) return null;

  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-3">
          Duyurular & Haberler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item) => (
            <div key={item._id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.content}</p>
              <span className="text-xs text-slate-400">
                {new Date(item.createdAt).toLocaleDateString('tr-TR')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}