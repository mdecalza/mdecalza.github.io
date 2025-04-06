/* Copyright © 2024—2025 Matthew DeCalzadilla */

import { createElement, useEffect, useState } from 'react';

/* page components */
import Home from './Home/Home.jsx';
import Bio from './Bio/Bio.jsx';
import Websites from './Websites/Websites.jsx';
import Games from './Games/Games.jsx';
import Wads from './Wads/Wads.jsx';
import Art from './Art/Art.jsx';
import Music from './Music/Music.jsx';

/* other components */
import Background from '../Background/Background.jsx';
import Footer from '../Footer/Footer.jsx';

Page.propTypes = {
    pageType: 'home',
}

export default function Page({pageType = 'home'}) {
    const [pageElement, setPageElement] = useState(createElement(Home));

    useEffect(() => {
        switch (pageType.toLowerCase()) {
            case 'bio':
                setPageElement(createElement(Bio));
                break;
            case 'websites':
                setPageElement(createElement(Websites));
                break;
            case 'games':
                setPageElement(createElement(Games));
                break;
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
        className='Page d-flex flex-column w-100 pt-5 text-white text-center'>
            <div
            style={{ height: '100px', }}></div>
            <Background/>
            {pageElement}
            <Footer/>
        </div>  
    );
}