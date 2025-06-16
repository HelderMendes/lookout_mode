'use client';
import { useState, useEffect, useRef } from 'react';
import classes from './slider.module.css';

const images = [
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–01.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–10.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–05.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–15.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–02.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–11.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–06.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–16.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–03.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–12.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–07.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–17.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–04.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–13.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–08.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–18.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–09.jpg',
    '/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–14.jpg',
];

export default function Slider() {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    // Advance to next slide
    function next() {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }

    // Go to previous slide
    function prev() {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    // Auto-advance every 2.5 seconds
    useEffect(() => {
        timerRef.current = setInterval(next, 2500); // 2500ms = 2.5s
        return () => clearInterval(timerRef.current);
    }, []);

    // Optional: Pause auto-slide on hover
    function handleMouseEnter() {
        clearInterval(timerRef.current);
    }
    function handleMouseLeave() {
        timerRef.current = setInterval(next, 3000);
    }

    return (
        <div
            className={classes.slider}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {images.map((src, i) => (
                <div
                    key={src}
                    className={`${classes.slide} ${
                        i === index ? classes.active : ''
                    }`}
                >
                    <img src={src} alt={`Slide ${i + 1}`} />
                </div>
            ))}
            <div className={classes.nav}>
                <button
                    className={classes.firstBtn}
                    onClick={prev}
                    aria-label='Previous slide'
                >
                    &#x2039;
                </button>
                <button
                    className={classes.latestBtn}
                    onClick={next}
                    aria-label='Next slide'
                >
                    &#x203a;
                </button>
            </div>
        </div>
    );
}
