import './accessoires.css';

export default function Accessoires() {
    const text =
        ' ❤ EVOL  ❤ HTIW EDAM ❤ EVOL  ❤ HTIW EDAM ❤ EVOL  ❤ HTIW EDAM  ';

    return (
        <div className='accessoires '>
            <div className='frame'>
                <div className='text'>
                    {[...text].map((char, index) => (
                        <span
                            key={index}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
