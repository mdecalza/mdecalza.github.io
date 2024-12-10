/* 2024 Matthew DeCalzadilla */

import { Link } from 'react-router';

WebsiteThumbnailImage.propTypes = {
    src: ''
};

function WebsiteThumbnailImage({ src='' }) {
    return (
        <img
        src={src}
        className='Thumbnail rounded-4 border border-2 border-light border-opacity-75 shadow' />
    );
}

WebsiteThumbnail.propTypes = {
    to: { pathname: '/', },
    imgSrc: '',
    innerLink: false
};

export default function WebsiteThumbnail({ to = { pathname: '/', }, imgSrc = '', innerLink = false }) {
    const websiteButtonClasses = 'mx-auto my-3 btn btn-transparent';

    return (
        innerLink
        ?
        <Link
        to={to}
        className={websiteButtonClasses}
        type='button'>
            <WebsiteThumbnailImage
            src={imgSrc} />
        </Link>
        :
        <a
        href={to.pathname}
        className={websiteButtonClasses}
        type='button'>
            <WebsiteThumbnailImage
            src={imgSrc} />
        </a>
    );
}