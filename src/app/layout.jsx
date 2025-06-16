import { Raleway } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const raleway = Raleway({
    subsets: ['latin'], // or other subsets as needed
    weight: ['400', '700'], // optional: specify weights you need
    display: 'swap', // optional: controls font-display property
});

export const metadata = {
    title: 'Lookout Mode',
    description: 'Kleding en accessoires voor vrouwen in Bussum!',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={raleway.className}>
            <body
                className={`${raleway.className} flex flex-col items-center justify-items-center min-h-screen`}
            >
                <header className='row-start-1 flex items-center mt-8 mb-4'>
                    <Image
                        // className='dark:invert'
                        src='/logo_LookoutMode.png'
                        alt='Lookout Mode logo'
                        width={400}
                        height={1}
                        priority
                    />
                </header>
                <main className='flex flex-col gap-[8px] items-center sm:items-start'>
                    {children}
                </main>
                <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
                    <a
                        className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                        href='https://www.instagram.com/lookoutmode'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            className='bg-transparent'
                            aria-hidden
                            src='/instagram.jpeg'
                            alt='Instagram icon'
                            width={26}
                            height={26}
                        />
                        Instagram
                    </a>
                    <a
                        className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                        href='#'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            aria-hidden
                            src='/window.svg'
                            alt='Window icon'
                            width={16}
                            height={16}
                        />
                        Privacy en veiligheid
                    </a>
                </footer>
            </body>
        </html>
    );
}
