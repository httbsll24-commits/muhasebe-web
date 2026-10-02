import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Lütfen bir başlık girin.'],
    },
    badge: {
        type: String,
        default: 'Mevzuat',
    },
    summary: {
        type: String,
        required: [true, 'Lütfen özet metni girin.'],
    },
    date: {
        type: String,
        default: () => new Date().toLocaleDateString('tr-TR'),
    },
    isImportant: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

export default mongoose.models.News || mongoose.model('News', NewsSchema);