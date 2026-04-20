/* Matthew DeCalzadilla 2026 */

/* assets */

import leftArrowIcon from '/src/assets/icons/arrow-previous-left-icon.svg';
import rightArrowIcon from '/src/assets/icons/arrow-next-right-icon.svg';

/* hooks */

import { useCallback, useEffect, useState } from 'react';

ScrollerButtons.propTypes = {
    scrollerID: 0,
    numCols: 0,
};

export default function ScrollerButtons({ scrollerID = 0, numCols = 0 }) {
    const [ scrollIndex, setScrollIndex ] = useState(0);

    const scrollerButtonClasses = 'ScrollerButton h-25 d-flex flex-column justify-content-center btn border-0 rounded-0';
    const scrollerButtonIconStyle = { filter: 'invert(1)', width: '33%', pointerEvents: 'none' };
    const scrollerButtonChildClasses = 'mx-auto fs-2';
    const gradientColor = 'rgb(29, 31, 36)';

    function clamp(number, min, max) {
        return Math.min(Math.max(number, min), max);
    }

    const updateScrollIndex = useCallback(() => {
        let col = 0;
        for (let cumulativeWidthOfScrollerChildren = 0.0; col < numCols; ++col) {
            const targetColumn = document.getElementById(`scroller-${ scrollerID }-column-${ col }`);

            if (!targetColumn) {
                break;
            }

            cumulativeWidthOfScrollerChildren += targetColumn.clientWidth;

            if (cumulativeWidthOfScrollerChildren >= document.getElementById(`scroller-${ scrollerID }`).scrollLeft + document.body.clientWidth / 2.0) {
                break;
            }
        }

        setScrollIndex(clamp(col, 0, numCols - 1));
    }, [ numCols, scrollerID ]);

    useEffect(() => {
        const scrollerElement = document.getElementById(`scroller-${ scrollerID }`);

        if (!scrollerElement) {
            return;
        }

        scrollerElement.addEventListener('scroll', updateScrollIndex);
        return () => scrollerElement.removeEventListener('scroll', updateScrollIndex);
    }, [ updateScrollIndex, scrollerID ]);

    function scroll(direction) {
        const scrollSign = direction === 'left' || direction === 'up' || direction === 'back' ? -1 : 1;
        const scrollerElement = document.getElementById(`scroller-${ scrollerID }`);

        const targetIndex = clamp(scrollIndex + scrollSign, 0, numCols - 1);
        const targetColumn = document.getElementById(`scroller-${ scrollerID }-column-${ targetIndex }`);

        if (!scrollerElement || !targetColumn) {
            return;
        }

        const targetScroll = targetColumn.offsetLeft + targetColumn.clientWidth / 2.0 - document.body.clientWidth / 2.0;
        scrollerElement.scrollTo({ left: targetScroll, behavior: 'smooth' });
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
            className={ `${ scrollerButtonClasses } rounded-end-pill` }
            style={{ backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), ${ gradientColor }` }}
            onPointerUp={ scrollLeft }>
                <div
                className={ scrollerButtonChildClasses }>
                    <img src={ leftArrowIcon } alt={ '◄' } style={ scrollerButtonIconStyle } />
                </div>
            </button>
            <button
            type='button'
            className={ `${ scrollerButtonClasses } rounded-start-pill` }
            style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), ${ gradientColor }` }}
            onPointerUp={ scrollRight }>
                <div
                className={ scrollerButtonChildClasses }>
                    <img src={ rightArrowIcon } alt={ '►' } style={ scrollerButtonIconStyle } />
                </div>
            </button>
        </div>
    );
}