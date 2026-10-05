'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0b1329] border-r border-slate-800 p-4 min-h-screen flex flex-col gap-2">
      <div className="mb-4 px-2">
        <h3 className="text-lg font-bold text-amber-500">Müşteri Portalı</h3>
        <p className="text-xs text-slate-400">Hatice Başol</p>
      </div>

      <Link
        href="/dashboard"
        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-200 hover:bg-slate-800 transition font-medium text-sm"
      >
        <span>📊</span>
        <span>Dashboard</span>
      </Link>

      <Link
        href="/admin/calc"
        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-amber-400 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition font-semibold text-sm"
      >
        <span>🧮</span>
        <span>KDV Hesaplama</span>
      </Link>

      <Link
        href="/admin"
        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sky-400 bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/20 transition font-semibold text-sm"
      >
        <span>⚙️</span>
        <span>Admin Paneli</span>
      </Link>
    </aside>
  );
}