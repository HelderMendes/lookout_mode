import Accessoires from '@/components/Accessoires';
import Adress from '@/components/Adress';
import Merken from '@/components/Merken';
import Slider from '@/components/Slider';

export default function HomePage() {
    return (
        <>
            <Merken />
            <div className='w-full flex lg:flex-row flex-col gap-24 lg:gap-0'>
                <div className='w-full lg:w-[70%] lg:pr-4 mb-10 lg:mb-0'>
                    {/* First column content */}
                    <Slider />
                </div>
                <div className='w-full lg:w-[30%] lg:-mt-5 hidden lg:flex flex-col gap-4'>
                    {/* Second column content */}
                    <>
                        <Adress />
                        <Accessoires />
                    </>
                </div>
                <div className='max-w-full sm:max-w-[94%]  w-full flex flex-col gap-0 md:flex-row md:gap-12 items-center justify-between lg:hidden'>
                    <Adress />
                    <Accessoires />
                </div>
            </div>
        </>
    );
}
