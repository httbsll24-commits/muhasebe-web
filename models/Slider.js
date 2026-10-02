import mongoose from 'mongoose';

const SliderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Lütfen ana başlık girin.'],
    },
    subtitle: {
        type: String,
        required: [true, 'Lütfen alt başlık girin.'],
    },
    imageUrl: {
        type: String,
        default: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600',
    },
    buttonText: {
        type: String,
        default: 'Hizmetlerimizi İnceleyin',
    },
    buttonLink: {
        type: String,
        default: '/hizmetlerimiz',
    }
}, { timestamps: true });

export default mongoose.models.Slider || mongoose.model('Slider', SliderSchema);