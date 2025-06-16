import Accessoires from '@/components/Accessoires';
import Adress from '@/components/Adress';
import Merken from '@/components/Merken';
import Slider from '@/components/Slider';

export default function HomePage() {
    return (
        <>
            <Merken />
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ flex: '0 0 70%', paddingRight: '16px' }}>
                    {/* First column content */}
                    <Slider />
                </div>
                <div style={{ flex: '0 0 30%', marginTop: '-20px' }}>
                    {/* Second column content */}
                    <Adress />
                    <Accessoires />
                </div>
            </div>
        </>
    );
}
