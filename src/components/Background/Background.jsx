/* 2024 Matthew DeCalzadilla */

import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

/* background filepaths */
import homeBackground from '../../assets/background/bg3.mp4';

export default function Background() {
    const location = useLocation();
    const [backgroundSource, setBackgroundSource] = useState(homeBackground);
    const [videoBackground, setVideoBackground] = useState(false);

    const imageBackgroundElement = (
        <img
        className='Background'
        src={backgroundSource}
        ></img>
    );

    const videoBackgroundElement = (
        <video
        className='Background'
        src={backgroundSource}
        autoPlay
        playsInline
        muted
        loop
        preload={'auto'}
        ></video>
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
        className='BackgroundTop'></div>
        { videoBackground ? videoBackgroundElement : imageBackgroundElement }
        </>
    );
}