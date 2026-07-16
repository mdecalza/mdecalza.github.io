/* Matthew DeCalzadilla 2024—2025 */

import { createElement, useEffect, useState } from 'react';

/* tests */
import checkTitle from '/src/components/Scroller/__tests__/checkTitle';

/* components */
import WadScreenshot from '/src/components/Page/Wads/WadScreenshot';

/* assets */
import wadDownloadText from '/src/assets/wads/wad-download.png';

WadRelease.propTypes = {
    title: '',
    role: '',
    logoSrc: '',
    screenshotImageSources: [],
    slideshow: true,
    quote: '',
    quoteCredit: '',
    quoteSource: '',
    quoteHREF: '',
    directDownloadLink: '',
    links: [],
};

export default function WadRelease({
    title = '',
    role = '',
    logoSrc = '',
    screenshotImageSources = [],
    slideshow = true,
    quote = '',
    quoteCredit = '',
    quoteSource = '',
    quoteHREF = '',
    directDownloadLink = '',
    links = [],
}) {
    const [ screenshots, setScreenshots ] = useState([]);
    const [ slideshowIndex, setSlideshowIndex ] = useState(0);

    if (slideshow && screenshotImageSources.length > 1) {
        setTimeout(() => {
            setSlideshowIndex((slideshowIndex + 1) % screenshotImageSources.length);
        }, 5000);
    }

    useEffect(() => {
        let content = [];

        screenshotImageSources.forEach((source) => {
            content.push(createElement(WadScreenshot, { src: source }));
        });

        setScreenshots(content);
    }, [ screenshotImageSources ]);

    return (
        <div
        className='WadRelease fadeInDelayed d-flex flex-column justify-content-start align-items-center my-4'>
            <div
            className='d-flex flex-column justify-content-center mb-3'
            style={{ maxHeight: '88px' }}>
                <div
                className='my-4'>
                    <img
                    src={ logoSrc }
                    alt={ checkTitle(title) ? title : '' }
                    id={ checkTitle(title) ? title : '' }
                    style={{ maxWidth: '90vw' }} />
                </div>
            </div>
            <div>
                <div
                className='card w-50 mx-auto shadow-sm px-1'>
                    <p
                    className='fs-6 m-1'>
                        { role }
                    </p>
                </div>
                { screenshots[slideshowIndex] }
                <figure
                className={`${checkTitle(quote) ? 'd-block' : 'd-none'} card text-center mx-3 px-2 pt-3 pb-2 shadow`}>
                    <blockquote
                    className='blockquote p-1'>
                        <p><q>{ quote }</q></p>
                    </blockquote>
                    <figcaption
                    className='blockquote-footer p-1'>
                        <a href={ quoteHREF }>{ quoteCredit }</a>, &ndash; <cite title='source'>{ quoteSource }</cite>
                    </figcaption>
                </figure>
                { directDownloadLink === '' ? <></> : <div
                className='pb-3'>
                    <a
                    href={ directDownloadLink }
                    className='growOnHover btn btn-warning rounded-3 py-3 px-4 shadow'
                    type='button'>
                        <img src={ wadDownloadText } />
                    </a>
                </div> }
                <div
                className='d-flex flex-wrap justify-content-center'>
                    { links }
                </div>
            </div>
        </div>
    );
}