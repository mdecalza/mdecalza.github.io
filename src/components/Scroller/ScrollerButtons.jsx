import { useEffect, useState } from "react";

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
        className='ScrollerButtonContainer position-absolute fadeInDelayed d-flex justify-content-between w-100 z-1'>
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

    const scrollRate = 2.5;
    const intervalRate = 12.5;
    const gradientColor = 'rgb(29, 31, 36)';

    useEffect(() => {
        if (mouseHover) {
            setScrollIntervalID(setInterval(() => {
                document.getElementById(`scroller-${ scrollerID }`).scrollBy(scrollRate * (direction === 'right' ? 1.0 : -1.0), 0.0);
            }, intervalRate));
        }
    }, [ mouseHover, direction, scrollerID ]);

    return (
        <div
        className='ScrollerButton h-100 d-flex flex-column justify-content-center'
        style={{
            backgroundImage: `linear-gradient(to ${ direction }, rgba(0, 0, 0, 0), ${ gradientColor }`,
        }}
        onMouseEnter={() => { setMouseHover(true); }}
        onMouseLeave={() => {
            setMouseHover(false);
            clearInterval(scrollIntervalID);
        }}>
            <div
            className='mx-auto fs-2'>
                { direction === 'right' ? '►' : '◄' }
            </div>
        </div>
    )
}