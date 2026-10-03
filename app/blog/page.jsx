'use client';
import BlogCards from '@/components/BlogCards';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0b1329] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">MALI REHBER</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Güncel Blog & Makaleler</h1>
          <p className="text-slate-400 mt-2 text-sm max-w-xl mx-auto">
            İşletmenizi büyütecek finansal ipuçları, vergi rehberleri ve sektörel analizler.
          </p>
        </div>

        {/* Blog Kartları Bileşeni */}
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <BlogCards />
        </div>
      </div>
    </main>
  );
}
