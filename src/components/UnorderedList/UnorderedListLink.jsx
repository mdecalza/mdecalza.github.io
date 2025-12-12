/* Matthew DeCalzadilla 2024—2025 */

UnorderedListLink.propTypes = {
    href: '',
    wadTitle: '',
    mapTitle: '',
    releaseYear: null,
};

export default function UnorderedListLink({ href = '', wadTitle = '', mapTitle = '', releaseYear = null }) {
    const yearString = ` (${ releaseYear })`;

    return (
        <a
        href={ href }
        className='list-group-item list-group-item-action list-group-item-light py-2'
        type='button'>
            { `${wadTitle}${releaseYear ? yearString : ''}` }
            <div
            style={{
                fontSize: '0.8em',
                opacity: '70%',
            }}>
                { mapTitle }
            </div>
        </a>
    );
}