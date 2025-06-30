/* Matthew DeCalzadilla 2024—2025 */

import { createElement, useEffect, useState } from 'react';

/* tests */
import checkTitle from '/src/components/Scroller/__tests__/checkTitle';

/* components */
import WadScreenshot from '/src/components/Page/Wads/WadScreenshot';

WadRelease.propTypes = {
    title: '',
    role: '',
    logoSrc: '',
    screenshotImageSources: [],
    quote: '',
    quoteCredit: '',
    quoteSource: '',
    quoteHREF: '',
    links: [],
};

export default function WadRelease({title = '', role = '', logoSrc = '', screenshotImageSources = [], quote = '', quoteCredit = '', quoteSource = '', quoteHREF = '', links = [] }) {
    const [ screenshots, setScreenshots ] = useState([]);

    useEffect(() => {
        let content = [];

        screenshotImageSources.forEach((source) => {
            content.push(createElement(WadScreenshot, { src: source }));
        });

        setScreenshots(content);
    }, [ screenshotImageSources ]);

    return (
        <div
        className='WadRelease fadeInDelayed d-flex flex-column justify-content-start align-items-center me-5'>
            <div
            className='d-flex flex-column justify-content-center my-2'
            style={{ height: '128px' }}>
                <div
                className='my-4'>
                    <img
                    src={ logoSrc }
                    alt={ checkTitle(title) ? title : '' }
                    id={ checkTitle(title) ? title : '' } />
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
                { screenshots }
                <figure
                className={`${checkTitle(quote) ? 'd-block' : 'd-none'} card text-center px-2 pt-3 pb-2 shadow`}>
                    <blockquote
                    className='blockquote p-1'>
                        <p><q>{ quote }</q></p>
                    </blockquote>
                    <figcaption
                    className='blockquote-footer p-1'>
                        <a href={ quoteHREF }>{ quoteCredit }</a>, &ndash; <cite title='source'>{ quoteSource }</cite>
                    </figcaption>
                </figure>
                <div
                className='pt-2'>
                    <a
                    href=''
                    className='d-none btn btn-primary'
                    type='button'>
                        Download
                    </a>
                </div>
                <div
                className='d-flex flex-wrap justify-content-center'>
                    { links }
                </div>
            </div>
        </div>
    );
}