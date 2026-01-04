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
    const thumbnailButtonClasses = 'fadeInDelayed growOnHover mx-auto my-3 btn btn-transparent text-light';
    const thumbnailImageClasses = 'object-fit-cover rounded-4 border border-2 border-light border-opacity-75 shadow z-0 w-100';
    const thumbnailTextClasses = 'z-1 position-absolute d-contents w-100 align-self-center';

    return (
        isInnerLink
        ?
        <Link
        to={ to }
        className={ thumbnailButtonClasses }
        type='button'
        style={{ width: width, height: height }}>
            <div
            className='position-relative'
            >
                <h2
                className={ thumbnailTextClasses }
                style={{ textShadow: '2px 2px 0 black, -1px 0px black, 1px 0px black, 0px -1px black, 0px 1px black, -1px -1px black, 1px -1px black, -1px 1px black, 1px 1px black' }}>
                    { text }
                </h2>
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
        className={ thumbnailButtonClasses }
        type='button'>
            <div
            className='position-relative'>
                <h2
                className={ thumbnailTextClasses }>
                    { text }
                </h2>
                <img
                src={ imgSrc }
                className={ thumbnailImageClasses } />
            </div>
        </a>
    );
}