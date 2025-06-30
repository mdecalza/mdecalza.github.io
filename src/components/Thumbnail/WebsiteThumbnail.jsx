/* Matthew DeCalzadilla 2024—2025 */

import { Link } from 'react-router';

WebsiteThumbnail.propTypes = {
    to: { pathname: '/', },
    isInnerLink: false
};

export default function WebsiteThumbnail({ to = { pathname: '/' }, isInnerLink = !to.pathname.includes('://') }) {
    const thumbnailButtonClasses = 'mx-auto my-3 btn btn-transparent growOnHover fadeInDelayed';
    const thumbnailImageClasses = 'Thumbnail rounded-4 border border-2 border-light border-opacity-75 shadow';
    return (
        isInnerLink
        ?
        <Link
        to={ to }
        className={ thumbnailButtonClasses }
        type='button'>
            <iframe
            className={ thumbnailImageClasses }
            src={ to.pathname }
            style={{ pointerEvents: 'none' }}
            scrolling='no'></iframe>
        </Link>
        :
        <a
        href={ to.pathname }
        target='_blank'
        className={ thumbnailButtonClasses }
        type='button'>
            <iframe
            className={ thumbnailImageClasses }
            src={ to.pathname }
            style={{ pointerEvents: 'none' }}
            scrolling='no'></iframe>
        </a>
    );
}