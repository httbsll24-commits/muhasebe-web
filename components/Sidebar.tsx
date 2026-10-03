'use client';
import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { name: '📊 Dashboard', href: '/dashboard' },
    { name: '🧾 Faturalar', href: '/dashboard/faturalar' },
    { name: '📄 Beyannameler', href: '/dashboard/beyannameler' },
    { name: '📁 Evraklar', href: '/dashboard/evraklar' },
    { name: '💰 Gelir / Gider', href: '/dashboard/gelir-gider' },
    { name: '📈 Raporlar', href: '/dashboard/raporlar' },
    { name: '🔔 Bildirimler', href: '/dashboard/bildirimler' },
    { name: '⚙️ Hesap Ayarları', href: '/dashboard/ayarlar' },
  ];

  return (
    <aside className="w-64 bg-[#0b1329] text-white min-h-screen border-r border-slate-800 p-4">
      <div className="mb-8 px-2">
        <span className="font-extrabold text-lg text-amber-400 block">MÜŞTERİ PORTALI</span>
        <span className="text-xs text-slate-400">Başol Mali Müşavirlik</span>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}