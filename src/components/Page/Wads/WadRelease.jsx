/* 2024 Matthew DeCalzadilla */

import { createElement, useEffect, useState } from "react";

/* tests */
import checkTitle from "../../Scroller/__tests__/checkTitle";

/* components */
import WadScreenshot from "./WadScreenshot";

WadRelease.propTypes = {
    title: '',
    role: '',
    logoSrc: '',
    screenshotImageSources: [],
    quote: '',
    quoteCredit: '',
    quoteSource: '',
    quoteHREF: '',
};

export default function WadRelease({title = '', role = '', logoSrc = '', screenshotImageSources = [], quote = '', quoteCredit = '', quoteSource = '', quoteHREF = ''}) {
    const [screenshots, setScreenshots] = useState([]);

    useEffect(() => {
        let content = [];

        screenshotImageSources.forEach((source) => {
            content.push(createElement(WadScreenshot, {src: source}));
        });

        setScreenshots(content);
    }, [screenshotImageSources]);

    return (
        <div
        className='WadRelease mx-5'>
            <div
            style={{ minHeight: '150px', }}>
                <img
                src={logoSrc}
                alt={checkTitle(title) ? title : ''}
                id={checkTitle(title) ? title : ''} />
            </div>
            <div
            className='card w-50 mx-auto'>
                <p
                className='fs-6 my-auto p-1'>
                    {role}
                </p>
            </div>
            <div>
                {screenshots}
            </div>
            <figure
            className={`${checkTitle(quote) ? 'd-block' : 'd-none'} card text-center px-2 pt-3 pb-2`}>
                <blockquote
                className='blockquote p-1'>
                    <p><q>{quote}</q></p>
                </blockquote>
                <figcaption
                className='blockquote-footer p-1'>
                    <a href={quoteHREF}>{quoteCredit}</a>, &ndash; <cite title='source'>{quoteSource}</cite>
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
        </div>
    );
}