import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/TRY', {
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            throw new Error('Döviz verisi alınamadı');
        }

        const data = await res.json();

        const usd = (1 / data.rates.USD).toFixed(2);
        const eur = (1 / data.rates.EUR).toFixed(2);

        return NextResponse.json({
            success: true,
            data: {
                USD: usd,
                EUR: eur,
                guncelleme: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
            }
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            data: { USD: '34.20', EUR: '37.50', guncelleme: 'Canlı' }
        });
    }
}
