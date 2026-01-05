/* Matthew DeCalzadilla 2024—2025 */

import { Link } from 'react-router';

Thumbnail.propTypes = {
    to: { pathname: '/', },
    imgSrc: '',
    text: '',
    width: '100%',
    height: '25%',
    isInnerLink: false
};

export default function Thumbnail({ to = { pathname: '/' }, imgSrc = '', text = '', width = '100%', height = '25%', isInnerLink = !to.pathname.includes('://') }) {
    const thumbnailLinkClasses = 'fadeInDelayed growOnHover mx-auto my-3 text-light';
    const thumbnailButtonClasses = 'mx-3 position-relative d-flex justify-content-center align-items-center';
    const thumbnailTextClasses = 'z-1 position-absolute';
    const thumbnailImageClasses = 'thumbnailImage z-0 w-100 object-fit-cover rounded-4 border border-2 border-light border-opacity-75 shadow';
    const textShadowStyle = '0px 0px 10px black, 3px 3px 0 black, -1px 0px black, 1px 0px black, 0px -1px black, 0px 1px black, -1px -1px black, 1px -1px black, -1px 1px black, 1px 1px black';

    return (
        isInnerLink
        ?
        <Link
        to={ to }
        className={ thumbnailLinkClasses }
        type='button'
        style={{ width: width, height: height }}>
            <div
            className={ thumbnailButtonClasses }>
                <h1
                className={ thumbnailTextClasses }
                style={{ textShadow: textShadowStyle }}>
                    { text }
                </h1>
                <img
                src={ imgSrc }
                className={ thumbnailImageClasses }
                style={{ height: height }} />
            </div>
        </Link>
        :
        <a
        href={ to.pathname }
        target='_blank'
        className={ thumbnailLinkClasses }
        type='button'
        style={{ width: width, height: height }}>
            <div
            className={ thumbnailButtonClasses }>
                <h3
                className={ thumbnailTextClasses }
                style={{ textShadow: textShadowStyle }}>
                    { text }
                </h3>
                <img
                src={ imgSrc }
                className={ thumbnailImageClasses }
                style={{ height: height }} />
            </div>
        </a>
    );
}