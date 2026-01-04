/* Matthew DeCalzadilla 2024—2025 */

import { createElement, useEffect, useState } from 'react';

/* page components */
import Home from '/src/components/Page/Home/Home.jsx';
import Wads from '/src/components/Page/Wads/Wads.jsx';
import Art from '/src/components/Page/Art/Art.jsx';
import Music from '/src/components/Page/Music/Music.jsx';

/* other components */
import Background from '/src/components/Background/Background.jsx';
import Footer from '/src/components/Footer/Footer.jsx';

Page.propTypes = {
    pageType: 'home',
}

export default function Page({pageType = 'home'}) {
    const [pageElement, setPageElement] = useState(createElement(Home));

    useEffect(() => {
        document.body.scrollTo(0, 0);

        switch (pageType.toLowerCase()) {
            case 'art':
                setPageElement(createElement(Art));
                break;
            case 'music':
                setPageElement(createElement(Music));
                break;
            case 'wads':
                setPageElement(createElement(Wads))
                break;
            case 'home':
            default:
                setPageElement(createElement(Home));
                break;
        }
    }, [pageType]);

    return (
        <div
        className='Page d-flex flex-column w-100 h-100 text-white text-center'>
            <div
            className='mt-5'
            style={{ height: '100px', }}></div>
            <Background />
            { pageElement }
            <Footer />
        </div>  
    );
}