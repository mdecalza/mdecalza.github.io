/* Matthew DeCalzadilla 2024—2025 */

IconButton.propTypes = {
    href: '',
    onClick: null,
    iconSrc: null,
    text: '',
};

export default function IconButton({ href = '', onClick = null, iconSrc = null, text = '' }) {
    return (
        <a
        href={ href }
        target='_blank'
        onClick={ onClick }
        className='IconButton growOnHover d-flex flex-row card btn btn-light px-3 py-2 mx-1 mb-2 shadow-sm'
        type='button'>
            <img
            src={ iconSrc }
            className='IconButtonIcon me-2 my-auto' />
            <div>
                { text }
            </div>
        </a>
    );
}