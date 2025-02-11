/* 2024 Matthew DeCalzadilla */

import { useEffect, useState } from 'react';
import { Link } from 'react-router';

Thumbnail.propTypes = {
    to: { pathname: '/', },
    imgSrc: '',
    isInnerLink: false
};

export default function Thumbnail({ to = { pathname: '/' }, imgSrc = '', isInnerLink = !to.pathname.includes('://') }) {
    const thumbnailButtonClasses = 'mx-auto my-3 btn btn-transparent';
    const thumbnailImageClasses = 'Thumbnail fadeInDelayed growOnHover rounded-4 border border-2 border-light border-opacity-75 shadow';

    return (
        isInnerLink
        ?
        <Link
        to={ to }
        className={ thumbnailButtonClasses }
        type='button'>
            <img
            src={ imgSrc }
            className={ thumbnailImageClasses } />
        </Link>
        :
        <a
        href={ to.pathname }
        target='_blank'
        className={ thumbnailButtonClasses }
        type='button'>
            <img
            src={ imgSrc }
            className={ thumbnailImageClasses } />
        </a>
    );
}