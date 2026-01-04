/* Matthew DeCalzadilla 2024—2025 */

import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

/* background filepaths */
import homeBackground from '/src/assets/background/bg.png';

export default function Background() {
    const location = useLocation();
    const [backgroundSource, setBackgroundSource] = useState(homeBackground);
    const [videoBackground, setVideoBackground] = useState(false);

    const imageBackgroundElement = (
        <img
        src={ backgroundSource } />
    );

    const videoBackgroundElement = (
        <video
        src={ backgroundSource }
        autoPlay
        playsInline
        muted
        loop
        preload={ 'auto' }></video>
    );

    useEffect(() => {
        const filetype = backgroundSource.substring(backgroundSource.lastIndexOf('.')+1);
        setVideoBackground(filetype === 'mp4');
    }, [backgroundSource])

    useEffect(() => {
        switch (location.pathname.toLowerCase()) {
            default:
                setBackgroundSource(homeBackground);
                break;
        }
    }, [location.pathname]);

    return (
        <>
        <div
        className='BackgroundTop overflow-hidden'></div>
        <div
        className='Background overflow-hidden'>
            { videoBackground ? videoBackgroundElement : imageBackgroundElement }
        </div>
        </>
    );
}