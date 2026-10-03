import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import News from '@/models/News';

// Haber/Duyuru Listeleme
export async function GET() {
    try {
        await connectMongo();
        const news = await News.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: news });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Veriler çekilemedi' }, { status: 500 });
    }
}

// Yeni Haber/Duyuru Ekleme
export async function POST(req) {
    try {
        await connectMongo();
        const body = await req.json();
        const newNews = await News.create(body);
        return NextResponse.json({ success: true, data: newNews }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Ekleme başarısız' }, { status: 400 });
    }
}

// Haber/Duyuru Güncelleme (PUT)
export async function PUT(req) {
    try {
        await connectMongo();
        const { id, title, content } = await req.json();
        const updatedNews = await News.findByIdAndUpdate(
            id, { title, content }, { new: true }
        );
        return NextResponse.json({ success: true, data: updatedNews });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Güncelleme başarısız' }, { status: 400 });
    }
}

// Haber/Duyuru Silme (DELETE)
export async function DELETE(req) {
    try {
        await connectMongo();
        const { id } = await req.json();
        await News.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Silme başarısız' }, { status: 400 });
    }
}
