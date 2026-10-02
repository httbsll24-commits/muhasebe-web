import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import News from '@/models/News';

// 1. Tüm haberleri veritabanından getir
export async function GET() {
    try {
        await connectDB();
        const newsList = await News.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: newsList });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

// 2. Yeni haber ekle
export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();

        const newNews = await News.create(body);
        return NextResponse.json({ success: true, data: newNews }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}