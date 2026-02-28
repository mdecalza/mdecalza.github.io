/* Matthew DeCalzadilla 2026 */

/* components */

import { useEffect, useState } from 'react';

/* assets */

import leftArrowIcon from '/src/assets/icons/arrow-previous-left-icon.svg';
import rightArrowIcon from '/src/assets/icons/arrow-next-right-icon.svg';

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
    const [mouseHover, setMouseHover] = useState(false);
    const [scrollIntervalID, setScrollIntervalID] = useState(0);

    const scrollRate = 4.5;
    const intervalRate = 12.5;
    const gradientColor = 'rgb(29, 31, 36)';

    useEffect(() => {
        if (mouseHover) {
            setScrollIntervalID(setInterval(() => {
                document.getElementById(`scroller-${ scrollerID }`).scrollBy(scrollRate * (direction === 'right' ? 1.0 : -1.0), 0.0);
            }, intervalRate));
        }
    }, [ mouseHover, direction, scrollerID ]);

    function mouseOff() {
        setMouseHover(false);
        clearInterval(scrollIntervalID);
    }

    return (
        <button
        type='button'
        className={ `ScrollerButton h-25 d-flex flex-column justify-content-center btn border-0 rounded-0 ${ direction === 'right' ? 'rounded-start-pill' : 'rounded-end-pill' }` }
        onMouseDown={() => { setMouseHover(true) }}
        onTouchStart={() => { setMouseHover(true) }}
        onMouseUp={ mouseOff }
        onMouseLeave={ mouseOff }
        onTouchCancel={ mouseOff }
        style={{ backgroundImage: `linear-gradient(to ${ direction }, rgba(0, 0, 0, 0), ${ gradientColor }` }}>
            <div
            className='mx-auto fs-2'>
                { direction === 'right' ? <img src={ rightArrowIcon } alt={ '►' } style={{ filter: 'invert(1)', width: '33%', pointerEvents: 'none' }} /> : <img src={ leftArrowIcon } alt={ '◄' } style={{ filter: 'invert(1)', width: '33%', pointerEvents: 'none' }} /> }
            </div>
        </button>
    )
}