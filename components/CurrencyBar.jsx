'use client';
import { useEffect, useState } from 'react';

export default function CurrencyBar() {
  const [rates, setRates] = useState({ USD: '34.20', EUR: '37.50', BIST: '9,150' });

  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1">
            <strong className="text-amber-400">USD/TRY:</strong> {rates.USD} ₺
          </span>
          <span className="flex items-center gap-1">
            <strong className="text-amber-400">EUR/TRY:</strong> {rates.EUR} ₺
          </span>
          <span className="flex items-center gap-1">
            <strong className="text-amber-400">BİST 100:</strong> {rates.BIST}
          </span>
        </div>
        <div className="text-slate-400 hidden sm:block">
          Başol Mali Müşavirlik & Danışmanlık
        </div>
      </div>
    </div>
  );
}