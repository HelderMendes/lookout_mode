import { MailIcon, PhoneCall } from 'lucide-react';
import classes from './adress.module.css';

export default function Adress() {
    return (
        <div className='flex flex-col items-center gap-6 '>
            <div className={classes.container}>
                <h1 className={classes.masked_text}>
                    Huizerweg 45
                    <br />
                    1401 GH, Bussum
                </h1>
            </div>
            <div className={`${classes.container} flex flex-col`}>
                <h1 className={classes.masked_text}>e-mail via</h1>
                <a
                    href='mailto:info@lookoutmode.nl'
                    className='text-[20px] text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center gap-3'
                >
                    <MailIcon /> info@lookoutmode.nl
                </a>
            </div>
            <div className={`${classes.container} flex flex-col`}>
                <h1 className={classes.masked_text}>
                    <a href='tel:+310357859521'>bel via</a>
                </h1>
                <a
                    href='tel:+310357859521'
                    className=' font-light text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center gap-3 text-[20px] mb-12'
                >
                    <PhoneCall /> 035 785 9521{' '}
                </a>
            </div>
        </div>
    );
}
