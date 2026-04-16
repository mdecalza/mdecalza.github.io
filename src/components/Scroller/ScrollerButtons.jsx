/* Matthew DeCalzadilla 2026 */

/* assets */

import leftArrowIcon from '/src/assets/icons/arrow-previous-left-icon.svg';
import rightArrowIcon from '/src/assets/icons/arrow-next-right-icon.svg';

/* hooks */

import { useState } from 'react';

ScrollerButtons.propTypes = {
    scrollerID: 0,
};

export default function ScrollerButtons({ scrollerID = 0 }) {
    const [ scrollIndex, setScrollIndex ] = useState(0);
    const gradientColor = 'rgb(29, 31, 36)';

    function scroll(direction) {
        const scrollSign = direction === 'right' ? 1 : -1;
        const scrollTarget = document.getElementById(`scroller-${ scrollerID }-column-${ scrollIndex + scrollSign }`);

        if (scrollTarget) {
            setScrollIndex(scrollIndex + scrollSign);

            scrollTarget.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }
    };

    function scrollLeft() {
        scroll('left');
    }

    function scrollRight() {
        scroll('right');
    }

    return (
        <div
        className='ScrollerButtonContainer fadeInDelayed d-flex w-100 h-100 position-absolute align-items-center justify-content-between'>
            <button
            type='button'
            className={ 'ScrollerButton h-25 d-flex flex-column justify-content-center btn border-0 rounded-0 rounded-end-pill' }
            style={{ backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), ${ gradientColor }` }}
            onPointerUp={ scrollLeft }>
                <div
                className='mx-auto fs-2'>
                    <img src={ leftArrowIcon } alt={ '◄' } style={{ filter: 'invert(1)', width: '33%', pointerEvents: 'none' }} />
                </div>
            </button>
            <button
            type='button'
            className={ 'ScrollerButton h-25 d-flex flex-column justify-content-center btn border-0 rounded-0 rounded-start-pill' }
            style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), ${ gradientColor }` }}
            onPointerUp={ scrollRight }>
                <div
                className='mx-auto fs-2'>
                    <img src={ rightArrowIcon } alt={ '►' } style={{ filter: 'invert(1)', width: '33%', pointerEvents: 'none' }} />
                </div>
            </button>
        </div>
    );
}