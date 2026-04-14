/* Matthew DeCalzadilla 2026 */

/* assets */

import leftArrowIcon from '/src/assets/icons/arrow-previous-left-icon.svg';
import rightArrowIcon from '/src/assets/icons/arrow-next-right-icon.svg';
import { useEffect, useState } from 'react';

ScrollerButtons.propTypes = {
    scrollerID: 0,
};

ScrollerButton.propTypes = {
    scrollerID: 0,
    direction: 'right',
};

export default function ScrollerButtons({ scrollerID = 0 }) {
    return (
        <div
        className='ScrollerButtonContainer fadeInDelayed d-flex w-100 h-100 position-absolute align-items-center justify-content-between'>
            <ScrollerButton
            scrollerID={ scrollerID }
            direction={ 'left' } />
            <ScrollerButton
            scrollerID={ scrollerID }
            direction={ 'right' } />
        </div>
    );
}

function ScrollerButton({ scrollerID = 0, direction = 'right' }) {
    const [ scrollSpeed, setScrollSpeed ] = useState(0.0);

    const gradientColor = 'rgb(29, 31, 36)';
    const scrollerElement = document.getElementById(`scroller-${ scrollerID }`);

    function setSpeed() {
        setScrollSpeed(Math.log(window.innerWidth * 10.0));
    }

    useEffect(() => {
        setSpeed();
        window.addEventListener('resize', setSpeed);
        return () => {
            window.removeEventListener('resize', setSpeed);
        };
    }, []);

    const scroll = () => {
        let i = 0;
        const interval = setInterval(() => {
            scrollerElement.scrollBy({ left: direction === 'right' ? scrollSpeed : -scrollSpeed, behavior: 'smooth' });

            if (++i >= 50) {
                clearInterval(interval);
            }
        }, 7);
    };

    return (
        <button
        type='button'
        className={ `ScrollerButton h-25 d-flex flex-column justify-content-center btn border-0 rounded-0 ${ direction === 'right' ? 'rounded-start-pill' : 'rounded-end-pill' }` }
        onPointerUp={ scroll }
        style={{ backgroundImage: `linear-gradient(to ${ direction }, rgba(0, 0, 0, 0), ${ gradientColor }` }}>
            <div
            className='mx-auto fs-2'>
                { direction === 'right' ? <img src={ rightArrowIcon } alt={ '►' } style={{ filter: 'invert(1)', width: '33%', pointerEvents: 'none' }} /> : <img src={ leftArrowIcon } alt={ '◄' } style={{ filter: 'invert(1)', width: '33%', pointerEvents: 'none' }} /> }
            </div>
        </button>
    )
}